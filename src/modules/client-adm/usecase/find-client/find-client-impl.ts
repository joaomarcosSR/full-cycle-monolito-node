import ClientGateway from "../../gateway/client-gateway";
import FindClient from "./find-client";
import { FindClientInputDto, FindClientOutputDto } from "./find-client-dto";

export default class FindClientImpl implements FindClient {
  private _gateway: ClientGateway;

  constructor(gateway: ClientGateway) {
    this._gateway = gateway;
  }

  async find(input: FindClientInputDto): Promise<FindClientOutputDto> {
    const client = await this._gateway.find(input.id);

    return {
      id: client.id.value,
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    };
  }
}
