export default class AchievementGroup extends NamedObject {
  id = "";
  name = "";
  achievements: Achievement[] = [];
  get length() {
    return this.achievements.length;
  }

  constructor(from:Mod) {
    super(from);
    this.from.achievementGroups[this.internal] = this;
  }

  addAchievement(achievement: Achievement) {
    this.achievements.push(achievement);
  }
}