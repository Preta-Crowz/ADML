import Prestige from "@mod/prestige";

export default class antimatterGalaxy extends Prestige {
  id = "galaxy";
  after = ["antimatter:boost"];
  get name() {
    return "Antimatter Galaxy";
  }
}