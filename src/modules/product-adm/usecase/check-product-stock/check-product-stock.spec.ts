import Identifier from "../../../_shared/domain/value-object/identifier";
import CheckProductStockImpl from "./check-product-stock-impl";

const productDb = {
  id: new Identifier("1"),
  name: "Product 1",
  description: "Product 1 description",
  purchasePrice: 100,
  stock: 10,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn().mockResolvedValueOnce(Promise.resolve(productDb)),
  };
};

describe("Check Product Stock usecase unit test", () => {
  it("should add a product", async () => {
    const productRepository = MockRepository();
    const usecase = new CheckProductStockImpl(productRepository);

    const input = {
      productId: "1",
    };

    const result = await usecase.check(input);

    expect(result.productId).toBe("1");
    expect(result.stock).toBe(10);
  });
});
