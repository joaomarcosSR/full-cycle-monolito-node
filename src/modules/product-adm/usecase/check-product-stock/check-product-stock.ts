import {
  CheckProductStockInputDto,
  CheckProductStockOutputDto,
} from "./check-product-stock-dto";

export default interface CheckProductStock {
  check(input: CheckProductStockInputDto): Promise<CheckProductStockOutputDto>;
}
