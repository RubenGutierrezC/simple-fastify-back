import { build } from "../../../app";
import { closeMongoConnection, initMongoDB } from "../../../services/database";

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
});
