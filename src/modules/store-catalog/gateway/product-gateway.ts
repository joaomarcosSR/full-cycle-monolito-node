import Product from "../domain/entity/product";

export default interface ProductGateway {
  findAll(): Promise<Product[]>;
  find(id: string): Promise<Product>;
}
