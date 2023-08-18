export default class AchievementGroup extends NamedObject {
  id = "";
  name = "";
  achievements = [];

  constructor(from) {
    super(from);
    for (const i in this.achievements) {
      this.achievements[i] = new this.achievements[i](from);
    }
    this.from.achievementGroups[this.internal] = this;
  }
}