import ValueObject from "./value-object";
import { v4 as uuidv4 } from "uuid";

export default class Identifier extends ValueObject<string> {
  constructor(value?: string) {
    super(value || uuidv4());
  }
}
