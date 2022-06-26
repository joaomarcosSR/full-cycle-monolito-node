import FindAllProducts from "../usecase/find-all-products/find-all-products";
import FindProduct from "../usecase/find-product/find-product";
import StoreCatalogFacade, {
  FindAllStoreCatalogFacadeOutputDto,
  FindStoreCatalogFacadeInputDto,
  FindStoreCatalogFacadeOutputDto,
} from "./store-catalog-facade";

export interface UseCaseProps {
  findUseCase: FindProduct;
  findAllUseCase: FindAllProducts;
}

export default class StoreCatalogFacadeImpl implements StoreCatalogFacade {
  private _findUseCase: FindProduct;
  private _findAllUseCase: FindAllProducts;

  constructor(props: UseCaseProps) {
    this._findUseCase = props.findUseCase;
    this._findAllUseCase = props.findAllUseCase;
  }

  async find(
    id: FindStoreCatalogFacadeInputDto
  ): Promise<FindStoreCatalogFacadeOutputDto> {
    return await this._findUseCase.find(id);
  }
  async findAll(): Promise<FindAllStoreCatalogFacadeOutputDto> {
    return await this._findAllUseCase.findAll();
  }
}
