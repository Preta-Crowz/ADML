import AchievementGroup from "@mod/achievement-group";

import { Achievement11, Achievement12, Achievement13, Achievement14,
  Achievement15, Achievement16, Achievement17, Achievement18 } from "@builtins/antimatters/achievements";

export class AchievementGroup1 extends AchievementGroup {
  id = "achievementGroup1";
  name = "Row 1";
  achievements = [
    Achievement11, Achievement12, Achievement13, Achievement14,
    Achievement15, Achievement16, Achievement17, Achievement18
  ];
}