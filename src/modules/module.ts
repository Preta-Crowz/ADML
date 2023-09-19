import AchievementGroup from "@mod/AchievementGroup";
import PlayerData from "@mod/PlayerData";

export default class Module extends NamedObject {
  achievementGroups: AchievementGroup[] = [];
  contents: NamedObject[] = [];

  constructor() {
    super();
    this.player = new PlayerData(this);
  }

  register() {
    super();
    for (const c of contents) {
      c.register();
    }
  }
}