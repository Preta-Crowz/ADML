import PlayerData from "@mod/playerdata";

export default class Module extends NamedObject {
  achievements = {};
  achievementGroups = {};

  contents = [];

  constructor() {
    super();
    player = new PlayerData(this);
    for (const c of contents) {
      // eslint-disable-next-line no-new
      new c(this);
    }
  }
}