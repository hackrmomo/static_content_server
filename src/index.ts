import "reflect-metadata"
import { useContainer } from "@fastify-decorators/typedi"
import { fastify } from "fastify"
import { bootstrap } from "fastify-decorators"
import { Container } from "typedi"

const hostname = '127.0.0.1';
const port = 3003;

useContainer(Container)

export const app = fastify({
  logger: true
});

app.register(bootstrap, {
  directory: import.meta.url,
  classLoader: (c) => Container.get(c),
})

console.log("Server started successfully")

app.server.on('error', (error) => {
  console.error(error)
  process.exit(1)
});


app.server.on('listening', () => {
  console.log(`Available routes: \n${app.printRoutes()}`);
});

app.listen({
  port,
  host: hostname,
});
