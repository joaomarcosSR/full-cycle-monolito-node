import Identifier from "../value-object/identifier";

export default class Entity {
  private _id: Identifier;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(id?: Identifier, createdAt?: Date, updatedAt?: Date) {
    this._id = id || new Identifier();
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
  }
  get id(): Identifier {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(updatedAt: Date) {
    this._updatedAt = updatedAt;
  }
}
