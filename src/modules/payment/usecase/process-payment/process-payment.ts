import {
  ProcessPaymentInputDto,
  ProcessPaymentOutputDto,
} from "./process-payment-dto";

export default interface ProcessPayment {
  process(input: ProcessPaymentInputDto): Promise<ProcessPaymentOutputDto>;
}
