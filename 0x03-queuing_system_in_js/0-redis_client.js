import redis from 'redis';

const rdclient = redis.createClient();

rdclient.on('connect', () => {
  console.log('Redis client connected to the server');
});

rdclient.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});
