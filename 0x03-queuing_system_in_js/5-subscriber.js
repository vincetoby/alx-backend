import { createClient } from 'redis';

const myredisClient = createClient();

//connect to redis server
myredisClient.on('connect', function () {
    console.log('Redis client connected to the server');
});

myredisClient.on('error', function (error) {
    console.log(`Redis client not connected to the server: ${error.message}`);
});

//subscribe to holberton school channel
myredisClient.subscribe('holberton school channel');

//listen for messages on channel and print message when received
myredisClient.on('message', function (channel, message) {
  console.log(`${message}`);
  if (message === 'KILL_SERVER') {
//unsubscribe from channel and cancel server connection
    myredisClient.unsubscribe('holberton school channel');
    myredisClient.end(true);
  }
});
