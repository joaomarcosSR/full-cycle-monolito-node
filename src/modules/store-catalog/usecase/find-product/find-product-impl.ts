import ProductGateway from "../../gateway/product-gateway";
import FindProduct from "./find-product";
import { FindProductInputDto, FindProductOutputDto } from "./find-product-dto";

export default class FindProductImpl implements FindProduct {
  private _gateway: ProductGateway;

  constructor(gateway: ProductGateway) {
    this._gateway = gateway;
  }

  async find(input: FindProductInputDto): Promise<FindProductOutputDto> {
    const product = await this._gateway.find(input.id);

    return {
      id: product.id.value,
      name: product.name,
      description: product.description,
      salesPrice: product.salesPrice,
    };
  }
}
