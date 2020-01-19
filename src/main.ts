import { Config } from '~/lib/config';
import { server } from '~/server';

function main() {
  const config = new Config();
  server.listen(config.port);
}

main();
