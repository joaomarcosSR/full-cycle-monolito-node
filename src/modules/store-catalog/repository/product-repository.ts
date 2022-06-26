import Identifier from "../../_shared/domain/value-object/identifier";
import Product from "../domain/entity/product";
import ProductGateway from "../gateway/product-gateway";
import ProductModel from "./product-model";

export default class ProductRepository implements ProductGateway {
  async findAll(): Promise<Product[]> {
    const products = await ProductModel.findAll();

    return products.map((product) => {
      return new Product({
        id: new Identifier(product.id),
        name: product.name,
        description: product.description,
        salesPrice: product.salesPrice,
      });
    });
  }

  async find(id: string): Promise<Product> {
    const product = await ProductModel.findOne({ where: { id: id } });

    return new Product({
      id: new Identifier(product.id),
      name: product.name,
      description: product.description,
      salesPrice: product.salesPrice,
    });
  }
}
