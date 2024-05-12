import pika, os
from dotenv import load_dotenv

load_dotenv()

url = os.environ.get('CLOUDAMQP_URL', 'amqp://guest:guest@localhost:5672/%2f')

params = pika.URLParameters(url)
connection = pika.BlockingConnection(params)

channel = connection.channel()
print("[+] Channel over a connection created")

channel.exchange_declare(exchange='slack_notifications', exchange_type='direct')

channel.queue_declare(queue="hr_queue")
channel.queue_declare(queue="marketing_queue")
channel.queue_declare(queue="support_queue")

channel.queue_bind("hr_queue", "slack_notifications", "hr")
channel.queue_bind("hr_queue", "slack_notifications", "marketing")
channel.queue_bind("hr_queue", "slack_notifications", "support")

def send_to_queue(channel, routing_key, body):
    channel.basic_publish(
        exchange='direct_exchange',
        routing_key=routing_key,
        body=body
    )
    print(f"[v] Message sent to queue - msg: #{body}")

send_to_queue(channel=channel, routing_key="hr", body="message to hr")
send_to_queue(channel=channel, routing_key="marketing", body="message to marketing")
send_to_queue(channel=channel, routing_key="support", body="message to support")

try:
    connection.close()
    print("[X] Connection closed")
except Exception as e:
    print(f"Error: #{e}")
