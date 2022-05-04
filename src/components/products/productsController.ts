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

const editProductById: FastifyController = async (req, _rep) => {
  const productId = (req.params as any).id;
  const product: ProductModel = req.body as ProductModel;

  const updatedProduct = await productRepository.editProductById(
    productId,
    product
  );

  return updatedProduct;
};

const deleteProductById: FastifyController = async (req, rep) => {
  const productId = (req.params as any).id;

  const deletedProduct = await productRepository.deleteProductById(productId);

  rep.send(deletedProduct);
};

const productsController = {
  getAllProducts,
  addProduct,
  editProductById,
  deleteProductById,
};

export default productsController;
