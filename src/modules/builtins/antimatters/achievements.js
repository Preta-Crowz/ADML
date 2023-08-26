import Achievement from "@mod/achievement";

export class Achievement11 extends Achievement {
  id = "achievement11";
  name = "You gotta start somewhere";
  description = "Buy a 1st Antimatter Dimension.";
  triggeredFrom = "buy";

  checkRequirement(event) {
    if (event.type != "antimatter:dimensions") return false;
    return event.tier == 1;
  }
}

export class Achievement12 extends Achievement {
  id = "achievement12";
  name = "100 antimatter is a lot";
  description = "Buy a 2nd Antimatter Dimension.";
  triggeredFrom = "buy";

  checkRequirement(event) {
    if (event.type != "antimatter:dimensions") return false;
    return event.tier == 2;
  }
}

export class Achievement13 extends Achievement {
  id = "achievement13";
  name = "Half life 3 CONFIRMED";
  description = "Buy a 3rd Antimatter Dimension.";
  triggeredFrom = "buy";

  checkRequirement(event) {
    if (event.type != "antimatter:dimensions") return false;
    return event.tier == 3;
  }
}

export class Achievement14 extends Achievement {
  id = "achievement14";
  name = "L4D = Left 4 Dimensions";
  description = "Buy a 4th Antimatter Dimension.";
  triggeredFrom = "buy";

  checkRequirement(event) {
    if (event.type != "antimatter:dimensions") return false;
    return event.tier == 4;
  }
}

export class Achievement15 extends Achievement {
  id = "achievement15";
  name = "5 Dimension Antimatter Punch";
  description = "Buy a 5th Antimatter Dimension.";
  triggeredFrom = "buy";

  checkRequirement(event) {
    if (event.type != "antimatter:dimensions") return false;
    return event.tier == 5;
  }
}

export class Achievement16 extends Achievement {
  id = "achievement16";
  name = "We couldn't afford 9";
  get description(event) {
    if (ModManager.isLoaded("enslaved") && GlobalState.isRunning("enslaved:challenge")) {
      return "Buy a 6th Antimatter Dimension (they never amount to anything)";
    }
    return "Buy a 6th Antimatter Dimension.";
  }

  triggeredFrom = "buy";

  checkRequirement(event) {
    if (event.type != "antimatter:dimensions") return false;
    return event.tier == 6;
  }
}

export class Achievement17 extends Achievement {
  id = "achievement17";
  name = "Not a luck related achievement";
  description = "Buy a 7th Antimatter Dimension.";
  triggeredFrom = "buy";

  checkRequirement(event) {
    if (event.type != "antimatter:dimensions") return false;
    return event.tier == 7;
  }
}

export class Achievement18 extends Achievement {
  id = "achievement18";
  name = "90 degrees to infinity";
  get description() {
    if (ModManager.isLoaded("enslaved") && GlobalState.isRunning("enslaved:challenge")) {
      return "Buy an 8th Antimatter Dimension (don't get used to it)";
    }
    return "Buy an 8th Antimatter Dimension.";
  }

  triggeredFrom = "buy";

  checkRequirement(event) {
    if (event.type != "antimatter:dimensions") return false;
    return event.tier == 8;
  }
}