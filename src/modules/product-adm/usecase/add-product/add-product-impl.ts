import Identifier from "../../../_shared/domain/value-object/identifier";
import Product from "../../domain/entity/product";
import ProductGateway from "../../gateway/product-gateway";
import AddProduct from "./add-product";
import { AddProductInputDto, AddProductOutputDto } from "./add-product-dto";

export default class AddProductImpl implements AddProduct {
  private _gateway: ProductGateway;

  constructor(gateway: ProductGateway) {
    this._gateway = gateway;
  }

  async add(input: AddProductInputDto): Promise<AddProductOutputDto> {
    const product = new Product({
      id: new Identifier(input.id),
      name: input.name,
      description: input.description,
      purchasePrice: input.purchasePrice,
      stock: input.stock,
    });

    this._gateway.add(product);

    return {
      id: product.id.value,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }
}
