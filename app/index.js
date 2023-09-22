import express from 'express';
import { router } from './routes/index.js';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Content-Type", "application/x-www-form-urlencoded");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

// app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// ~ LAUNCHER CONFIG ~ //
app.use('/api/v1', router);
// app.use(_404)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => {
  console.log(`\x1b[1;33m⚡⚡ http://localhost:${PORT}/api/v1 ⚡⚡ \x1b[0m`)
});
