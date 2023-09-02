export default class PlayerData {
  achievements: Map<string, Achievement> = {}

  constructor(from:Mod) {
    this.from = from;
  }
}