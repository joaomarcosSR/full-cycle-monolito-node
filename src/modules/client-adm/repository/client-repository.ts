import Identifier from "../../_shared/domain/value-object/identifier";
import Client from "../domain/entity/client";
import client from "../domain/entity/client";
import ClientGateway from "../gateway/client-gateway";
import { ClientModel } from "./client-model";

export default class ClientRepository implements ClientGateway {
  async add(client: client): Promise<void> {
    await ClientModel.create({
      id: client.id.value,
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    });
  }

  async find(id: string): Promise<client> {
    const client = await ClientModel.findOne({ where: { id } });

    if (!client) {
      throw new Error("Client not found");
    }

    return new Client({
      id: new Identifier(client.id),
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    });
  }
}
