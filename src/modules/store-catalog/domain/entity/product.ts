import AggregateRoot from "../../../_shared/domain/entity/aggregate-root";
import Identifier from "../../../_shared/domain/value-object/identifier";

type ProductProps = {
  id: Identifier;
  name: string;
  description: string;
  salesPrice: number;
};

export default class Product extends AggregateRoot {
  private _name: string;
  private _description: string;
  private _salesPrice: number;

  constructor(props: ProductProps) {
    super(props.id);
    this._name = props.name;
    this._description = props.description;
    this._salesPrice = props.salesPrice;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get salesPrice(): number {
    return this._salesPrice;
  }
}
