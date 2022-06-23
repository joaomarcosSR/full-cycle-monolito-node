import Identifier from "../../../_shared/domain/value-object/identifier";
import Client from "../../domain/entity/client";
import ClientGateway from "../../gateway/client-gateway";
import AddClient from "./add-client";
import { AddClientInputDto, AddClientOutputDto } from "./add-client-dto";

export default class AddClientImpl implements AddClient {
  private _gateway: ClientGateway;

  constructor(gateway: ClientGateway) {
    this._gateway = gateway;
  }

  async add(input: AddClientInputDto): Promise<AddClientOutputDto> {
    const props = {
      id: new Identifier(input.id) || new Identifier(),
      name: input.name,
      email: input.email,
      address: input.address,
    };

    const client = new Client(props);

    await this._gateway.add(client);

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
