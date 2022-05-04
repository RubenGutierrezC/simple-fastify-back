import { ProductModel, productModel } from "./productModel";

const getAllProducts = async () => {
  const products = await productModel.find();
  return products;
};

const addProuct = (product: ProductModel) => {
  const data = new productModel(product);

  return data.save();
};

const productRepository = {
  getAllProducts,
  addProuct,
};

export default productRepository;
