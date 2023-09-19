import NamedObject from "@mod/NamedObject";

export default class ModManager {
  static private GameObjects = new Map<string, NamedObject>();
  static private Achievements = new Map<string, Achievement>();

  static getObject(key:string):NamedObject {
    if (ModManager.GameObjects.has(key)) return ModManager.GameObjects.get(key);
    throw new Error();
  }

  static addObject(key:string, obj:NamedObject) {
    if (GameObjects.has(key)) throw new Error();
    ModManager.GameObjects.set(key, obj);
  }
}