import { createClient, print } from 'redis';
import { promisify } from 'util';

const myclient = createClient();

myclient.on('connect', function() {
  console.log('Redis client connected to the server');
});

myclient.on('error', function (err) {
  console.log(`Redis client not connected to the server: ${err}`);
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
};

const get = promisify(myclient.get).bind(myclient);

async function displaySchoolValue(schoolName) {
  const result = await get(schoolName).catch((error) => {
    if (error) {
      console.log(error);
      throw error;
    }
  });
  console.log(result);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
