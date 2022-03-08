const amqp = require("amqplib/callback_api");
require('dotenv').config()

// Create the connection
amqp.connect(process.env.RABBIT_CONNECTION, (error, connection) => {
	if (error) {
	  throw error;
	}
	// Create the Channel
	connection.createChannel((channelError, channel) => {
	  if (channelError) {
		throw channelError;
	  }
	  const QUEUE = process.env.RABBIT_QUEUE;
	  channel.assertQueue(QUEUE);
	  channel.consume(QUEUE,(msg)=>{
		console.log(`Message received: ${msg.content}`);
	  }, {
		 noAck:true
		});
	});
  });
  