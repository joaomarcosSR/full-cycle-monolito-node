import { AddProductInputDto, AddProductOutputDto } from "./add-product-dto";

export default interface AddProduct {
  add(input: AddProductInputDto): Promise<AddProductOutputDto>;
}
