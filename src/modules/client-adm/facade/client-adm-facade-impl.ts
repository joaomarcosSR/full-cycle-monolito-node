import AddClient from "../usecase/add-client/add-client";
import FindClient from "../usecase/find-client/find-client";
import ClientAdmFacade, {
  AddClientFacadeInputDto,
  FindClientFacadeInputDto,
  FindClientFacadeOutputDto,
} from "./client-adm-facade";

export interface UseCaseProps {
  addUsecase: AddClient;
  findUsecase: FindClient;
}

export default class ClientAdmFacadeImpl implements ClientAdmFacade {
  private _addUsecase: AddClient;
  private _findUsecase: FindClient;

  constructor(usecaseProps: UseCaseProps) {
    this._findUsecase = usecaseProps.findUsecase;
    this._addUsecase = usecaseProps.addUsecase;
  }

  async add(input: AddClientFacadeInputDto): Promise<void> {
    await this._addUsecase.add(input);
  }

  async find(
    input: FindClientFacadeInputDto
  ): Promise<FindClientFacadeOutputDto> {
    return await this._findUsecase.find(input);
  }
}
