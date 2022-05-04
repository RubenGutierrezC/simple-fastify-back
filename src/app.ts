import fastify from "fastify";
import { productsRoutes } from "./components/products/productsRoutes";

export const build = (opts = {}) => {
  const app = fastify(opts);

  app.register(productsRoutes, { prefix: "/products" });

  return app;
};
