# RabbitMQ Demo
This is a basic demo using a sender and receiver for RabbitMQ.

* If you don't have RabbitMQ install, you can use (CloudAMQP)[https://www.cloudamqp.com/]
* Make sure you duplicate the `.env_example` to `.env` and the server credentials.

# Get started
* $ git clone https://github.com/minorsolis/RabbitMQ
* `npm install`

# Usage
* To send a demo message
* `node sender.js`
* To receive the message
* `node receiver.js`
# Output
`Hello world! This is a RabbitMQ message`

# Result
* You will the message in the console and you can also access the RabbitMQ Management Tool to check the channels.

# Finally
* It was tested with node `v16.14.0`

