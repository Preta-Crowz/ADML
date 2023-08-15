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
        this.id = from.id + ':' + this.id; // this will final id, with namespace
        this.constructor.self = this;
    }

    register() {
        let fin = -1;
        for (let k of this.before) {
            let i = window.PRESTIGE_PRIORITY.indexOf(k);
            if (i === -1) continue;
            else if (fin === -1 || fin > i) fin = i;
        }

        let beforeLock = fin + 1; // when before and after conflicts, after will ignored
        for (let k of this.after) {
            let i = window.PRESTIGE_PRIORITY.indexOf(k);
            if (i === -1 || beforeLock >= i) continue;
            else if (fin === -1 || fin < i) fin = i;
        }

        if (fin === -1) {
            window.PRESTIGE_PRIORITY.push(this.id);
        } else {
            let temp = window.PRESTIGE_PRIORITY.splice(fin);
            window.PRESTIGE_PRIORITY.push(this.id);
            window.PRESTIGE_PRIORITY = [...window.PRESTIGE_PRIORITY, ...temp];
        }

        Prestige.updatePrestige();
    }

    static updatePrestige() { // update PRESTIGE_EVENT like vanilla one
        window.PRESTIGE_EVENT = {};
        for (let i in window.PRESTIGE_PRIORITY) {
            window.PRESTIGE_EVENT[window.PRESTIGE_PRIORITY[i]] = +i;
        }
    }
}