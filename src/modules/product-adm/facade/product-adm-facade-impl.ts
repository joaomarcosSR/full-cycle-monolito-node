import AddProduct from "../usecase/add-product/add-product";
import CheckProductStock from "../usecase/check-product-stock/check-product-stock";
import ProductAdmFacade from "./product-adm-facade";
import {
  AddProductFacadeInputDto,
  CheckStockFacadeInputDto,
  CheckStockFacadeOutputDto,
} from "./product-adm-facade-dto";

export interface UseCasesProps {
  addUseCase: AddProduct;
  stockUseCase: CheckProductStock;
}

export default class ProductAdmFacadeImpl implements ProductAdmFacade {
  private _addUsecase: AddProduct;
  private _checkStockUsecase: CheckProductStock;

  constructor(usecasesProps: UseCasesProps) {
    this._addUsecase = usecasesProps.addUseCase;
    this._checkStockUsecase = usecasesProps.stockUseCase;
  }

  async addProduct(input: AddProductFacadeInputDto): Promise<void> {
    await this._addUsecase.add(input);
  }

  async checkStock(
    input: CheckStockFacadeInputDto
  ): Promise<CheckStockFacadeOutputDto> {
    return await this._checkStockUsecase.check(input);
  }
}
