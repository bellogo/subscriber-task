const { port } = require('./config');
const app = require('./app');

const nodePort = port || 3000;

app.listen(nodePort, () => {
  console.log(`Admin-Node API on port ${nodePort}`);
});
