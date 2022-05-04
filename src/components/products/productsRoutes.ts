import { FastifyRoute } from "../../types/global";
import productsController from "./productsController";

export const productsRoutes: FastifyRoute = (app, _opts, done) => {
  app.get("/", productsController.getAllProducts);
  app.post("/", productsController.addProduct);
  app.put("/:id", productsController.editProductById);
  app.delete("/:id", productsController.deleteProductById);

  done();
};
