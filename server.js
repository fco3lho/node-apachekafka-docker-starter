import express from "express";
import { produceMessage } from "./producer.js";
import { consumeMessages } from "./consumer.js";

const app = express();
app.use(express.json());

const topic = "topic";
const port = 3000;

app.post("/produce", async (req, res) => {
  const { message } = req.body;
  await produceMessage(topic, message);
  res.send("Message produced");
});

consumeMessages(topic).catch(console.error);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
