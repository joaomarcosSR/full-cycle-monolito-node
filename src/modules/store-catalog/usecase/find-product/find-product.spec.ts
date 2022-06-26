import Identifier from "../../../_shared/domain/value-object/identifier";
import Product from "../../domain/entity/product";
import FindProductImpl from "./find-product-impl";

const product = new Product({
  id: new Identifier("1"),
  name: "Product 1",
  description: "Description 1",
  salesPrice: 100,
});

const MockRepository = () => {
  return {
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
  };
};

describe("find a product usecase unit test", () => {
  it("should find a product", async () => {
    const productRepository = MockRepository();
    const usecase = new FindProductImpl(productRepository);

    const input = {
      id: "1",
    };

    const result = await usecase.find(input);

    expect(productRepository.find).toHaveBeenCalled();
    expect(result.id).toBe("1");
    expect(result.name).toBe("Product 1");
    expect(result.description).toBe("Description 1");
    expect(result.salesPrice).toBe(100);
  });
});
