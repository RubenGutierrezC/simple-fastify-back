import { FastifyController } from "../../types/global";
import { ProductModel } from "./productModel";
import productRepository from "./productRepository";

const getAllProducts: FastifyController = async (_req, rep) => {
  const products = await productRepository.getAllProducts();

  rep.send(products);
};

const addProduct: FastifyController = async (req, rep) => {
  const product = req.body as ProductModel;

  const newProduct = await productRepository.addProuct(product);

  rep.send(newProduct);
};

const editProductById: FastifyController = (req, _rep) => {
  const product = req.body;

  return product;
};

const deleteProductById: FastifyController = (req, _rep) => {
  const product = req.body;

  return product;
};

const productsController = {
  getAllProducts,
  addProduct,
  editProductById,
  deleteProductById,
};

export default productsController;
