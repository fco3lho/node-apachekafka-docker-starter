import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-producer",
  brokers: ["kafka:9092"],
});

const producer = kafka.producer();

export const produceMessage = async (topic, message) => {
  await producer.connect();
  await producer.send({
    topic: topic,
    messages: [{ value: message }],
  });
  await producer.disconnect();
};
