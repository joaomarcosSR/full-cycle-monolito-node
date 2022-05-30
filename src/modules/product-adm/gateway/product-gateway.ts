import Product from "../domain/entity/product";

export default interface ProductGateway {
  add(product: Product): Promise<void>;
  find(id: string): Promise<Product>;
}
