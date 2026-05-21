import net from 'net';
import { spawn } from 'child_process';

function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => {
      resolve(false);
    });
    server.once('listening', () => {
      server.close(() => {
        resolve(true);
      });
    });
    server.listen(port);
  });
}

async function getFreePort(startPort, exclude = []) {
  let port = startPort;
  while (true) {
    if (!exclude.includes(port) && (await isPortAvailable(port))) {
      return port;
    }
    port++;
  }
}

async function run() {
  const graphqlPort = await getFreePort(4001);
  const datalayerPort = await getFreePort(9000, [graphqlPort]);

  console.log(`Starting TinaCMS dev server...`);
  console.log(`- GraphQL server port: ${graphqlPort}`);
  console.log(`- Datalayer port: ${datalayerPort}`);

  const command = `npx tinacms dev --port ${graphqlPort} --datalayer-port ${datalayerPort} -c 'remix vite:dev'`;

  const child = spawn(command, { stdio: 'inherit', shell: true });

  child.on('close', (code) => {
    process.exit(code || 0);
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
