import ProcessPayment from "../usecase/process-payment/process-payment";
import PaymentFacade, {
  PaymentFacadeInputDto,
  PaymentFacadeOutputDto,
} from "./payment-facade";

export interface UseCaseProps {
  processUsecase: ProcessPayment;
}

export default class PaymentFacadeImpl implements PaymentFacade {
  private _processUsecase: ProcessPayment;

  constructor(usecaseProps: UseCaseProps) {
    this._processUsecase = usecaseProps.processUsecase;
  }

  async process(input: PaymentFacadeInputDto): Promise<PaymentFacadeOutputDto> {
    return await this._processUsecase.process(input);
  }
}
