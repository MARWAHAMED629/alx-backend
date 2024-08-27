import redis from 'redis';
import { promisify } from 'util';

const rdclient = redis.createClient();

const getAsync = promisify(rdclient.get).bind(rdclient);
const setAsync = promisify(rdclient.set).bind(rdclient);

rdclient.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});

rdclient.on('connect', () => {
  console.log('Redis client connected to the server');
  
  (async () => {
    await displaySchoolValue('Holberton');
    await setNewSchool('HolbertonSanFrancisco', '100');
    await displaySchoolValue('HolbertonSanFrancisco');
  })();
});

async function setNewSchool(schoolName, value) {
  try {
    const reply = await setAsync(schoolName, value);
    console.log('Reply:', reply);
  } catch (err) {
    console.error(`Error setting value: ${err}`);
  }
}

async function displaySchoolValue(schoolName) {
  try {
    const result = await getAsync(schoolName);
    console.log(result);
  } catch (err) {
    console.error(`Error getting value: ${err}`);
  }
}
