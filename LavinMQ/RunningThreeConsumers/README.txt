# Example usage/output

### Producer.py
[+] Channel over a connection created
[v] Message sent to hr queue - msg: #message to hr
[v] Message sent to marketing queue - msg: #message to marketing
[v] Message sent to support queue - msg: #message to support
[X] Connection closed

### Consumer.py --hr
[+] Channel over a connection created

[ ] Waiting for messages in hr_queue. To exit press CTRL+C 

[+] Received #b'message to hr'

### Consumer.py --marketing
[+] Channel over a connection created

[ ] Waiting for messages in marketing_queue. To exit press CTRL+C 

[+] Received #b'message to marketing'

### Consumer.py --support
[+] Channel over a connection created

[ ] Waiting for messages in support_queue. To exit press CTRL+C 

[+] Received #b'message to support'