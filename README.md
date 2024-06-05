# Starter application using Node.js + Apache Kafka + Docker

Simple application for the sole purpose of studying Apache Kafka and its functionality on a server. Here a Node.js server was developed using Express, which has implemented a Kafka message producer and a consumer of these messages.

The producer sends messages to a specific topic created in Kafka using the URL that was assigned to send these messages and the consumer is the server itself, which, upon receiving a message in the topic it is watching, prints the message on the terminal.

This is just a simulation, and this producer/consumer system would work best in applications that connect, with a specific application being the producer of the messages and another or other applications being the consumers of this produced content.

## How to use

```shell
$ git clone https://github.com/fco3lho/node-apachekafka-docker-starter.git
$ cd node-apachekafka-docker-starter

# Setup
$ docker-compose up -d

# To send messages to the thread, type the following command in your terminal
$ curl -X POST http://localhost:3000/produce -H "Content-Type: application/json" -d '{"message":"Hello world, Kafka!"}'

# Open the topic with name is "topic" and see the messages
$ open http://localhost:9000/topic/topic
```

For