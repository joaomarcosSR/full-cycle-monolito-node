import { FindClientInputDto, FindClientOutputDto } from "./find-client-dto";

export default interface FindClient {
  find(input: FindClientInputDto): Promise<FindClientOutputDto>;
}
