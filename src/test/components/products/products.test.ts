import { build } from "../../../app";
import { closeMongoConnection, initMongoDB } from "../../../services/database";
import productRepository from "../../../components/products/productRepository";

describe("/products", () => {
  beforeAll(() => {
    return initMongoDB();
  });

  afterAll(() => {
    return closeMongoConnection();
  });

  describe("GET /", () => {
    let app: any;
    let response: any;

    beforeAll(async () => {
      app = build();
      response = await app.inject({
        method: "GET",
        url: "/products",
      });
    });

    it("should work", () => {
      expect(response.statusCode).toBe(200);
    });

    it("should return a array", () => {
      expect(JSON.parse(response.body)).toBeInstanceOf(Array);
    });
  });

  describe("POST /", () => {
    let app: any;
    let response: any;

    const mockProduct = {
      name: "pollo",
      price: 1,
    };

    beforeAll(async () => {
      app = build();
      response = await app.inject({
        method: "POST",
        url: "/products",
        payload: mockProduct,
      });
    });

    it("should work", () => {
      expect(response.statusCode).toBe(200);
    });

    it("should save the product", () => {
      expect(JSON.parse(response.body)?.name).toBe(mockProduct.name);
      expect(JSON.parse(response.body)?.price).toBe(mockProduct.price);
    });
  });

  describe("PUT /:id", () => {
    let newProduct: any;
    let app: any;
    let response: any;

    beforeAll(async () => {
      newProduct = await productRepository.addProuct({
        name: "pollo",
        price: 1,
      });

      app = build();
      response = await app.inject({
        method: "PUT",
        url: `/products/${newProduct._id}`,
        payload: {
          name: "pollo mod",
        },
      });
    });

    it("should work", () => {
      expect(response.statusCode).toBe(200);
    });

    it("should update the product", () => {
      expect(JSON.parse(response.body)?.name).toBe("pollo mod");
    });
  });

  describe("Delete /:id", () => {
    let app: any;
    let response: any;
    let newProduct: any;

    beforeAll(async () => {
      newProduct = await productRepository.addProuct({
        name: "pollo",
        price: 1,
      });

      app = build();
      response = await app.inject({
        method: "DELETE",
        url: `/products/${newProduct._id}`,
      });
    });

    it("should work", () => {
      expect(response.statusCode).toBe(200);
    });

    it("should return the deleted product", () => {
      const responseId = JSON.parse(response.body)._id;
      expect(responseId).toBe(newProduct._id.toString());
    });
  });
});
