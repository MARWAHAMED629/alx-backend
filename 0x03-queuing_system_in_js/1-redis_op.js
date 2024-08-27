import redis from 'redis';

const rdclient = redis.createClient();

rdclient.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});

rdclient.on('connect', () => {
  console.log('Redis client connected to the server');
  
  displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  displaySchoolValue('HolbertonSanFrancisco');
});

function setNewSchool(schoolName, value) {
  rdclient.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
  rdclient.get(schoolName, (err, reply) => {
    if (err) {
      console.error(`Error: ${err}`);
    } else {
      console.log(reply);
    }
  });
}
