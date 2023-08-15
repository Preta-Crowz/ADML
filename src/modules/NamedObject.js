export default class NamedObject {
  id = "";
  name = "";
  before = [];
  after = [];

  static self;

  constructor(from) {
    if (this.constructor.self) return this.constructor.self;
    this.from = from || this;
    // This will final id, with namespace
    this.id = `${from.id}:${this.id}`;
    this.constructor.self = this;
  }
}