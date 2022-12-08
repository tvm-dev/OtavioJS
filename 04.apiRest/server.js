import app from './app';

// const app = require('./app');

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Running on port: http://localhost:${port}`);
});
