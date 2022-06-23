import { AddClientInputDto, AddClientOutputDto } from "./add-client-dto";

export default interface AddClient {
  add(input: AddClientInputDto): Promise<AddClientOutputDto>;
}
