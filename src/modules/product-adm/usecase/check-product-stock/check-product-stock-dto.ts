export interface CheckProductStockInputDto {
  productId: string;
}

export interface CheckProductStockOutputDto {
  productId: string;
  stock: number;
}
