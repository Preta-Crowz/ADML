import Prestige from "@mod/Prestige"

export default class antimatterGalaxy {
    id = 'galaxy';
    after = ['antimatter:boost'];
    get name() {
        return 'Antimatter Galaxy';
    }

    constructor(args...){
        super(args);
    }
}