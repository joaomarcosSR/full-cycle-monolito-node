import { FindProductInputDto, FindProductOutputDto } from "./find-product-dto";

export default interface FindProduct {
  find(input: FindProductInputDto): Promise<FindProductOutputDto>;
}
