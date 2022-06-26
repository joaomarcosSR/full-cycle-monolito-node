import ProductGateway from "../../gateway/product-gateway";
import { FindAllProductsOutputDto } from "./find-all-product-dto";
import FindAllProducts from "./find-all-products";

export default class FindAllProductsImpl implements FindAllProducts {
  private _gateway: ProductGateway;

  constructor(gateway: ProductGateway) {
    this._gateway = gateway;
  }

  async findAll(): Promise<FindAllProductsOutputDto> {
    const products = await this._gateway.findAll();

    return {
      products: products.map((product) => ({
        id: product.id.value,
        name: product.name,
        description: product.description,
        salesPrice: product.salesPrice,
      })),
    };
  }
}
