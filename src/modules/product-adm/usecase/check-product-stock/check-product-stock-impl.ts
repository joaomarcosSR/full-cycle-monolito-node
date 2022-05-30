import ProductGateway from "../../gateway/product-gateway";
import CheckProductStock from "./check-product-stock";
import {
  CheckProductStockInputDto,
  CheckProductStockOutputDto,
} from "./check-product-stock-dto";

export default class CheckProductStockImpl implements CheckProductStock {
  private _gateway: ProductGateway;

  constructor(gateway: ProductGateway) {
    this._gateway = gateway;
  }

  async check(
    input: CheckProductStockInputDto
  ): Promise<CheckProductStockOutputDto> {
    const product = await this._gateway.find(input.productId);

    return {
      productId: product.id.value,
      stock: product.stock,
    };
  }
}
