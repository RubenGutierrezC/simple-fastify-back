import { initMongoDB } from "./services/database";
import { build } from "./app";

const server = build();

server.listen(5100, "0.0.0.0", async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  await initMongoDB();

  console.log(`Server listening at ${address}`);
});
