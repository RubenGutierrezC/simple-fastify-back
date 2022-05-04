import { ProductModel, productModel } from "./productModel";

const getAllProducts = async () => {
  const products = await productModel.find();
  return products;
};

const addProuct = (product: ProductModel) => {
  const data = new productModel(product);

  return data.save();
};

const editProductById = (id: string, product: ProductModel) => {
  return productModel.findByIdAndUpdate(id, product, {
    new: true,
  });
};

const deleteProductById = (id: string) => {
  return productModel.findByIdAndDelete(id);
};

const productRepository = {
  getAllProducts,
  addProuct,
  editProductById,
  deleteProductById,
};

export default productRepository;
