import PaymentFacade from "../facade/payment-facade";
import PaymentFacadeImpl from "../facade/payment-facade-impl";
import TransactionRepository from "../repository/transaction-repository";
import ProcessPaymentImpl from "../usecase/process-payment/process-payment-impl";

export default class PaymentFacadeFactory {
  static create(): PaymentFacade {
    const repository = new TransactionRepository();
    const usecase = new ProcessPaymentImpl(repository);
    return new PaymentFacadeImpl({
      processUsecase: usecase,
    });
  }
}
