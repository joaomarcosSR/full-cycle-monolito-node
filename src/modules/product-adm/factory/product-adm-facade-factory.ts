import ProductAdmFacade from "../facade/product-adm-facade";
import ProductAdmFacadeImpl from "../facade/product-adm-facade-impl";
import ProductRepository from "../repository/product-repository";
import AddProductImpl from "../usecase/add-product/add-product-impl";
import CheckProductStockImpl from "../usecase/check-product-stock/check-product-stock-impl";

export default class ProductAdmFacadeFactory {
  static create(): ProductAdmFacade {
    const productRepository = new ProductRepository();
    const addProductUseCase = new AddProductImpl(productRepository);
    const checkProductStockUseCase = new CheckProductStockImpl(
      productRepository
    );

    return new ProductAdmFacadeImpl({
      addUseCase: addProductUseCase,
      stockUseCase: checkProductStockUseCase,
    });
  }
}
