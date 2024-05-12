import pika, os
from dotenv import load_dotenv

load_dotenv()

url = os.environ.get('CLOUDAMQP_URL', 'amqp://guest:guest@localhost:5672/%2f')

params = pika.URLParameters(url)
connection = pika.BlockingConnection(params)

channel = connection.channel()
print("[+] Channel over a connection created")

channel.queue_declare(queue="hello_world")

def send_to_queue(channel, routing_key, body):
    channel.basic_publish(
        exchange='',
        routing_key=routing_key,
        body=body
    )
    print(f"[v] Message sent to queue - msg: #{body}")

send_to_queue(channel=channel, routing_key="hello_world", body="message one")
send_to_queue(channel=channel, routing_key="hello_world", body="message two")
send_to_queue(channel=channel, routing_key="hello_world", body="message three")

try:
    connection.close()
    print("[X] Connection closed")
except Exception as e:
    print(f"Error: #{e}")
