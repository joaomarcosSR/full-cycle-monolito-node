import ClientAdmFacade from "../facade/client-adm-facade";
import ClientAdmFacadeImpl from "../facade/client-adm-facade-impl";
import ClientRepository from "../repository/client-repository";
import AddClientImpl from "../usecase/add-client/add-client-impl";
import FindClientImpl from "../usecase/find-client/find-client-impl";

export default class ClientAdmFacadeFactory {
  static create(): ClientAdmFacade {
    const clientRepository = new ClientRepository();
    const addClientUseCase = new AddClientImpl(clientRepository);
    const findClientUseCase = new FindClientImpl(clientRepository);

    return new ClientAdmFacadeImpl({
      addUsecase: addClientUseCase,
      findUsecase: findClientUseCase,
    });
  }
}
