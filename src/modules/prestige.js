window.PRESTIGE_EVENT = {};
window.PRESTIGE_PRIORITY = [];

export default class Prestige {
  id = "";
  name = "";
  before = [];
  after = [];

  static self;

  constructor(from) {
    if (this.constructor.self) return this.constructor.self;
    this.from = from;
    // This will final id, with namespace
    this.id = `${from.id}:${this.id}`;
    this.constructor.self = this;
  }

  register() {
    let fin = -1;
    for (const k of this.before) {
      const i = window.PRESTIGE_PRIORITY.indexOf(k);
      if (i === -1) continue;
      else if (fin === -1 || fin > i) fin = i;
    }

    // When before and after conflicts, after will ignored
    const beforeLock = fin + 1;
    for (const k of this.after) {
      const i = window.PRESTIGE_PRIORITY.indexOf(k);
      if (i === -1 || beforeLock >= i) continue;
      else if (fin === -1 || fin < i) fin = i;
    }

    if (fin === -1) {
      window.PRESTIGE_PRIORITY.push(this.id);
    } else {
      const l = window.PRESTIGE_PRIORITY.splice(fin);
      window.PRESTIGE_PRIORITY.push(this.id);
      window.PRESTIGE_PRIORITY = [...window.PRESTIGE_PRIORITY, ...l];
    }

    Prestige.updatePrestige();
  }

  // Update PRESTIGE_EVENT like vanilla one
  static updatePrestige() {
    window.PRESTIGE_EVENT = {};
    for (const i in window.PRESTIGE_PRIORITY) {
      window.PRESTIGE_EVENT[window.PRESTIGE_PRIORITY[i]] = Number(i);
    }
  }
}