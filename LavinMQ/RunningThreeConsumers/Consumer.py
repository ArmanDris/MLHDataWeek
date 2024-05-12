import pika, os, argparse, sys
from dotenv import load_dotenv

parser = argparse.ArgumentParser(description="Select which queue the consumer listens on")
parser.add_argument('--hr', action='store_true', help="listen on hr queue")
parser.add_argument('--marketing', action='store_true', help="listen on marketing queue")
parser.add_argument('--support', action='store_true', help="listen on support queue")

args = parser.parse_args()

if not any(vars(args).values()):
    parser.print_usage()
    exit(1)

if args.hr:
    queue="hr_queue"
elif args.marketing:
    queue = "marketing_queue"
elif args.support:
    queue = "support_queue"

load_dotenv()

url = os.environ.get('CLOUDAMQP_URL', 'amqp://guest:guest@localhost:5672/%2f')

params = pika.URLParameters(url)
connection = pika.BlockingConnection(params)

channel = connection.channel()
print("[+] Channel over a connection created")

channel.queue_declare(queue=queue)

def callback(ch, method, properties, body):
    print(f"[+] Received #{body}")

channel.basic_consume(queue, callback, auto_ack=True)

try:
    print(f"\n[ ] Waiting for messages in {queue}. To exit press CTRL+C \n")
    channel.start_consuming()
except Exception as e:
    print(f"Error: {e}")
    try:
        sys.exit(0)
    except SystemExit:
        os.exit(0)
