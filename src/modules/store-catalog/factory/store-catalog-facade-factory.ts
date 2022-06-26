import StoreCatalogFacade from "../facade/store-catalog-facade";
import StoreCatalogFacadeImpl from "../facade/store-catalog-facade-impl";
import ProductRepository from "../repository/product-repository";
import FindAllProductsImpl from "../usecase/find-all-products/find-all-products-impl";
import FindProductImpl from "../usecase/find-product/find-product-impl";

export default class StoreCatalogFacadeFactory {
  static create(): StoreCatalogFacade {
    const productRepository = new ProductRepository();
    const findUseCase = new FindProductImpl(productRepository);
    const findAllUseCase = new FindAllProductsImpl(productRepository);

    const facade = new StoreCatalogFacadeImpl({
      findUseCase: findUseCase,
      findAllUseCase: findAllUseCase,
    });
    return facade;
  }
}
