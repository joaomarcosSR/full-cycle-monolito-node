import Identifier from "../../../_shared/domain/value-object/identifier";
import Transaction from "../../domain/entity/transaction";
import PaymentGateway from "../../gateway/payment-gateway";
import ProcessPayment from "./process-payment";
import {
  ProcessPaymentInputDto,
  ProcessPaymentOutputDto,
} from "./process-payment-dto";

export default class ProcessPaymentImpl implements ProcessPayment {
  private _gateway: PaymentGateway;

  constructor(gateway: PaymentGateway) {
    this._gateway = gateway;
  }

  async process(
    input: ProcessPaymentInputDto
  ): Promise<ProcessPaymentOutputDto> {
    let transaction = new Transaction({
      orderId: input.orderId,
      amount: input.amount,
    });

    transaction.process();

    transaction = await this._gateway.save(transaction);

    return {
      transactionId: transaction.id.value,
      orderId: transaction.orderId,
      amount: transaction.amount,
      status: transaction.status,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
    };
  }
}
