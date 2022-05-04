import { initMongoDB } from "./services/database";
import { build } from "./app";

const server = build();

server.listen(8080, async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  await initMongoDB();

  console.log(`Server listening at ${address}`);
});
