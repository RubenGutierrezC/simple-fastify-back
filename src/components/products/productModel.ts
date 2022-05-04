import { model, Schema } from "mongoose";

export interface ProductModel {
  name: string;
  price: number;
}

const ProductSchema = new Schema<ProductModel>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    default: 0,
  },
});

export const productModel = model<ProductModel>("product", ProductSchema);
