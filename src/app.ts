import 'dotenv/config';

import fastify from 'fastify';
import sharp from 'sharp';

const PORT = Number(process.env.PORT) || 3005;
const app = fastify();

app.post('/', () => {
  sharp();
});

app.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server running on port:${PORT}`);
});
