import Prestige from "@mod/restige";

export default class antimatterGalaxy extends Prestige {
  id = "galaxy";
  after = ["antimatter:boost"];
  get name() {
    return "Antimatter Galaxy";
  }
}