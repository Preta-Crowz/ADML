import Module from "@mod/module";

import * as ad from "./antimatter-dimension";
import { AchievementGroup1 } from "./achievement-groups";
import boost from "./boost";
import galaxy from "./galaxy";

export default class Antimatters extends Module {
  id = "antimatter";
  name = "Antimatters";

  contents = [
    boost, galaxy,
    AchievementGroup1
  ]
}