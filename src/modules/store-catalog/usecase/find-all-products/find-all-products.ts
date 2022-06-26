import { FindAllProductsOutputDto } from "./find-all-product-dto";

export default interface FindAllProducts {
  findAll(): Promise<FindAllProductsOutputDto>;
}
