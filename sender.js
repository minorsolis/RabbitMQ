const amqp = require("amqplib/callback_api");
require('dotenv').config()

// Create the connection
amqp.connect(process.env.RABBIT_CONNECTION, (error, connection) => {
  if (error) {
    throw error;
  }
  // Create the channel
  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }
	// Send the message
    const QUEUE = process.env.RABBIT_QUEUE;
    channel.assertQueue(QUEUE);
    channel.sendToQueue(QUEUE, Buffer.from("Hello world! This is a RabbitMQ message"));
    console.log(`Message sent! ${QUEUE}`);
  });
});
