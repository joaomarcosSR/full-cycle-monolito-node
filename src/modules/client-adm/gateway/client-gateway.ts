import Client from "../domain/entity/client";

export default interface ClientGateway {
  add(client: Client): Promise<void>;
  find(id: string): Promise<Client>;
}
