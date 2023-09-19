import ModManager from "@mod/ModManager";

export default class NamedObject {
  id = "";
  name = "";
  before: string[] = [];
  after: string[] = [];

  static self:NamedObject;

  constructor(from: NamedObject?) {
    if (this.constructor.self) return this.constructor.self;
    this.from = from || this;
    // This will original id which is configurated, I'm too lazy to rename this
    this.internal = this.id;
    // This will final id, with namespace
    this.id = `${from.id}:${this.id}`;
    this.constructor.self = this;
  }

  register() {
    ModManager.addObject(this.id, this);
  }

  getPlayer() {
    return this.from.player;
  }
}