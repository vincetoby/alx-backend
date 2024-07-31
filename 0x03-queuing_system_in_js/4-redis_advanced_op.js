import { createClient, print } from 'redis';

const myredisClient = createClient();

myredisClient.on('connect', function() {
  console.log('Redis client connected to the server');
});

myredisClient.on('error', function(error) {
  console.log(`Redis client not connected to the server: ${error}`);
});

//set hash key-value in HolbertonSchools list
myredisClient.hset('HolbertonSchools', 'Portland', '50', print);
myredisClient.hset('HolbertonSchools', 'Seattle', '80', print);
myredisClient.hset('HolbertonSchools', 'New York', '20', print);
myredisClient.hset('HolbertonSchools', 'Bogota', '20', print);
myredisClient.hset('HolbertonSchools', 'Cali', '40', print);
myredisClient.hset('HolbertonSchools', 'Paris', '2', print);

// retrieve all elements stored in HolbertonSchools list
myredisClient.hgetall('HolbertonSchools', function (error, result) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(result);
});
