# Example usage/output

┌──(venv)─[~/Documents/mlhDataWeek/LavinMQ/ProducerAndConsumer]
└─$ python Producer.py
[+] Channel over a connection created
[v] Message sent to queue - msg: #message one
[v] Message sent to queue - msg: #message two
[v] Message sent to queue - msg: #message three
[X] Connection closed
                                                                                     
┌──(venv)─[~/Documents/mlhDataWeek/LavinMQ/ProducerAndConsumer]
└─$ python Consumer.py
[+] Channel over a connection created

[ ] Waiting for messages. To exit press CTRL+C 

[+] Received #b'message one'
[+] Received #b'message two'
[+] Received #b'message three'