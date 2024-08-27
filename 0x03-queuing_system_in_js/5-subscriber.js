import redis from 'redis';

const rdclient = redis.createClient();

rdclient.on('connect', () => {
  console.log('Redis client connected to the server');
});

rdclient.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

rdclient.subscribe('holberton school channel');

rdclient.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    rdclient.unsubscribe();
    rdclient.quit();
  }
});
