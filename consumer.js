import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-consumer",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "test-group" });

export const consumeMessages = async (topic) => {
  await consumer.connect();
  await consumer.subscribe({ topic: topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};
