import redis from 'redis';

const rdclient = redis.createClient();

rdclient.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});

rdclient.on('connect', () => {
  console.log('Redis client connected to the server');

  rdclient.hset('HolbertonSchools', 'Portland', 50, redis.print);
  rdclient.hset('HolbertonSchools', 'Seattle', 80, redis.print);
  rdclient.hset('HolbertonSchools', 'New York', 20, redis.print);
  rdclient.hset('HolbertonSchools', 'Bogota', 20, redis.print);
  rdclient.hset('HolbertonSchools', 'Cali', 40, redis.print);
  rdclient.hset('HolbertonSchools', 'Paris', 2, redis.print);

  rdclient.hgetall('HolbertonSchools', (err, reply) => {
    if (err) {
      console.error(`Error: ${err}`);
    } else {
      console.log(reply);
    }
  });
});
