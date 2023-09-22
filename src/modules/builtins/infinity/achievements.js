import Achievement from "@mod/achievement";

export class Achievement21 extends Achievement {
  id = "achievement21";
  name = "To infinity!";
  description = "Go Infinite.";
  get reward() {
    return `Start with ${formatInt(100)} antimatter.`;
  }

  triggeredFrom = "prestige";

  checkRequirement(event) {
    return event.type === "infinity:prestige";
  }

  register() {
    super();
    ModManager.getObject("antimatter:antimatter").setDefaultPlayer.addAfter(r => {
      if (!ModManager.getAchivement("infinity:achievement21").isEffectActive()) return null;
      if (r.antimatters < 100) r.antimatters = 100;
      return r;
    });
  }
}

export class Achievement22 extends Achievement {
  id = "achievement22";
  name = "FAKE NEWS!";
  get description() {
    return `Encounter ${formatInt(50)} different news messages.`;
  }

  triggeredFrom = "tick";

  checkRequirement(event) {
    // Need rework on news
    return NewsHandler.uniqueTickersSeen >= 50;
  }
}

export class Achievement23 extends Achievement {
  id = "achievement23";
  name = "The 9th Dimension is a lie";
  get description() {
    return `Have exactly ${formatInt(99)} 8th Antimatter Dimensions.`;
  }

  get reward() {
    return `8th Antimatter Dimensions are ${formatPercents(0.1)} stronger.`;
  }

  triggeredFrom = "tick";

  checkRequirement(event) {
    return ModManager.getObject("antimatter:dimensions").tier(8).getAmount().eq(99);
  }

  register() {
    super();
    ModManager.getObject("antimatter:dimensions").tier(8).getMultiplier.addAfter(r => {
      if (!ModManager.getAchivement("infinity:achievement23").isEffectActive()) return null;
      return r * 1.1;
    });
  }
}

export class Achievement24 extends Achievement {
  id = "achievement24";
  name = "Antimatter Apocalypse";
  get description() {
    return `Get over ${format(DC.E80)} antimatter.`;
  }

  triggeredFrom = "tick";

  checkRequirement(event) {
    return ModManager.getPlayer("antimatter").antimatters.exponent >= 80;
  }
}

export class Achievement25 extends Achievement {
  id = "achievement25";
  name = "Antimatter Apocalypse";
  get description() {
    return `Buy ${formatInt(10)} Dimension Boosts.`;
  }

  triggeredFrom = "prestige";

  checkRequirement(event) {
    if (event.type !== "antimatter:boost") return false;
    return ModManager.getPlayer("antimatter").boosts >= 10;
  }
}

export class Achievement26 extends Achievement {
  id = "achievement26";
  name = "You got past The Big Wall";
  description = "Buy an Antimatter Galaxy.";

  triggeredFrom = "prestige";

  checkRequirement(event) {
    return event.type === "antimatter:galaxy";
  }
}

export class Achievement27 extends Achievement {
  id = "achievement27";
  name = "Double Galaxy";
  get description() {
    return `Buy ${formatInt(2)} Antimatter Galaxies.`;
  }

  triggeredFrom = "prestige";

  checkRequirement(event) {
    if (event.type !== "antimatter:galaxy") return false;
    return ModManager.getPlayer("antimatter").galaxies >= 2;
  }
}

export class Achievement28 extends Achievement {
  id = "achievement28";
  name = "There's no point in doing that...";
  get description() {
    return `Buy a single 1st Antimatter Dimension when you have over ${format(DC.E150)} of them.`;
  }

  get reward() {
    return `1st Antimatter Dimensions are ${formatPercents(0.1)} stronger.`;
  }

  triggeredFrom = "buy";

  checkRequirement(event) {
    if (event.type !== "antimatter:dimensions" || event.tier !== 1) return false;
    if (ModManager.getObject("antimatter:dimensions").tier(1).getAmount().exponent < 150) return false;
    return event.isSingle;
  }

  register() {
    super();
    ModManager.getObject("antimatter:dimensions").getMultipliers.addAfter((r, args) => {
      if (!ModManager.getAchivement("infinity:achievement28").isEffectActive()) return null;
      if (args[0] !== 1) return null;
      return r * 1.1;
    });
  }
}

export class Achievement31 extends Achievement {
  id = "achievement31";
  name = "I forgot to nerf that";
  get description() {
    return `Get any Antimatter Dimension multiplier over ${formatX(DC.E31)}.`;
  }

  get reward() {
    return `1st Antimatter Dimensions are ${formatPercents(0.05)} stronger.`;
  }

  triggeredFrom = "tick";

  checkRequirement(event) {
    if (event.type !== "antimatter") return false;
    return ModManager.getObject("antimatter:dimensions").getAllMultipliers().some(x => x.multiplier.exponent >= 31);
  }

  register() {
    super();
    ModManager.getObject("antimatter:dimensions").getMultipliers.addAfter((r, args) => {
      if (!ModManager.getAchivement("infinity:achievement31").isEffectActive()) return null;
      if (args[0] !== 1) return null;
      return r * 1.05;
    });
  }
}

export class Achievement32 extends Achievement {
  id = "achievement32";
  name = "The Gods are pleased";
  get description() {
    return `Get over ${formatX(600)} from Dimensional Sacrifice outside of Challenge 8.`;
  }

  get reward() {
    return `Dimensional Sacrifice is stronger.
    AD^x ➜
    AD^(x+0.1)`;
  }

  triggeredFrom = "prestige";

  checkRequirement(event) {
    if (event.type !== "antimatter:sacrifice") return false;
    if (ModManager.isRunning("infinity:challenge8")) return false;
    return ModManager.getObject("antimatter:sacrifice").getTotalBoost().gte(600);
  }

  register() {
    super();
    ModManager.getObject("antimatter:sacrifice").getBaseExponent.addAfter(r => {
      if (!ModManager.getAchivement("infinity:achievement32").isEffectActive()) return null;
      return r + 0.1;
    });
  }
}

export class Achievement33 extends Achievement {
  id = "achievement33";
  name = "That's a lot of infinites";
  get description() {
    return `Reach Infinity ${formatInt(10)} times.`;
  }

  triggeredFrom = "prestige";

  checkRequirement(event) {
    if (event.type !== "infinity:infinity") return false;
    return ModManager.getPlayer("infinity").infinities.gte(10);
  }
}

export class Achievement34 extends Achievement {
  id = "achievement34";
  name = "You didn't need it anyway";
  description = "Infinity without having any 8th Antimatter Dimensions.";

  get reward() {
    return `Dimensions 1-7 are ${formatPercents(0.02)} stronger.`;
  }

  triggeredFrom = "prestige";

  checkRequirement(event) {
    if (event.type !== "infinity:infinity") return false;
    return ModManager.getObject("antimatter:dimensions").tier(8).getAmount().eq(0);
  }

  register() {
    super();
    ModManager.getObject("antimatter:dimensions").getMultipliers.addAfter((r, args) => {
      if (!ModManager.getAchivement("infinity:achievement33").isEffectActive()) return null;
      if (args[0] === 8) return null;
      return r * 1.02;
    });
  }
}

[
  {
    id: 35,
    name: "Don't you dare sleep",
    get description() {
      return PlayerProgress.realityUnlocked()
        ? `Be offline for a period of over ${formatInt(6)} hours (real time).`
        : `Be offline for a period of over ${formatInt(6)} hours.`;
    },
    checkRequirement: () => Date.now() - player.lastUpdate >= 21600000,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE
  },
  {
    id: 36,
    name: "Claustrophobic",
    get description() {
      return `Infinity with just ${formatInt(1)} Antimatter Galaxy. (Your Antimatter Galaxies are reset on Infinity.)`;
    },
    checkRequirement: () => player.galaxies === 1,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `Multiply starting tick speed by ${format(1.02, 2, 2)}.`; },
    effect: 1 / 1.02
  },
  {
    id: 37,
    name: "That's FAST!",
    get description() { return `Infinity in under ${formatInt(2)} hours.`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalHours <= 2,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `Start with ${formatInt(5000)} antimatter.`; },
    effect: 5000
  },
  {
    id: 38,
    name: "I don't believe in Gods",
    get description() {
      return `Buy an Antimatter Galaxy without Dimensional Sacrificing.
        (Your Antimatter Galaxies are reset on Infinity.)`;
    },
    checkRequirement: () => player.requirementChecks.infinity.noSacrifice,
    checkEvent: GAME_EVENT.GALAXY_RESET_BEFORE
  },
  {
    id: 41,
    name: "No DLC required",
    get description() { return `Buy ${formatInt(16)} Infinity Upgrades.`; },
    checkRequirement: () => player.infinityUpgrades.size >= 16,
    checkEvent: [
      GAME_EVENT.INFINITY_UPGRADE_BOUGHT,
      GAME_EVENT.REALITY_RESET_AFTER,
      GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT
    ],
    get reward() {
      return `Unlock two new Infinity Upgrades- ${formatX(2)} IP multiplier and offline IP generation.`;
    },
  },
  {
    id: 42,
    name: "Super Sanic",
    get description() {
      return `Have antimatter per second exceed your current antimatter above ${format(DC.E63)}.`;
    },
    checkRequirement: () =>
      Currency.antimatter.exponent >= 63 &&
      Currency.antimatter.productionPerSecond.gt(Currency.antimatter.value),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 43,
    name: "How the antitables have turned..",
    description:
      "Get the 8th Antimatter Dimension multiplier to be highest, 7th Antimatter Dimension multiplier " +
      " second highest, etc.",
    checkRequirement: () => {
      const multipliers = Array.range(1, 8).map(tier => AntimatterDimension(tier).multiplier);
      for (let i = 0; i < multipliers.length - 1; i++) {
        if (multipliers[i].gte(multipliers[i + 1])) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `Each Antimatter Dimension gains a boost proportional to tier
      (8th gets ${formatPercents(0.08)}, 7th gets ${formatPercents(0.07)}, etc.)`;
    }
  },
  {
    id: 44,
    name: "Over in 30 Seconds",
    get description() {
      return `Have antimatter per second exceed your current antimatter
      for ${formatInt(30)} consecutive seconds.`;
    },
    checkRequirement: () => AchievementTimers.marathon1
      .check(Currency.antimatter.productionPerSecond.gt(Currency.antimatter.value), 30),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
  },
  {
    id: 45,
    name: "Faster than a potato",
    get description() { return `Get more than ${format(DC.E29)} ticks per second.`; },
    checkRequirement: () => Tickspeed.current.exponent <= -26,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `Multiply starting tickspeed by ${formatX(1.02, 0, 2)}.`; },
    effect: 0.98
  },
  {
    id: 46,
    name: "Multidimensional",
    get description() { return `Reach ${format(DC.E12)} of all Antimatter Dimensions except the 8th.`; },
    checkRequirement: () => AntimatterDimension(7).amount.exponent >= 12,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 47,
    name: "Daredevil",
    get description() { return `Complete ${formatInt(3)} Normal Challenges.`; },
    checkRequirement: () => NormalChallenges.all.countWhere(c => c.isCompleted) >= 3,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
  },
  {
    id: 48,
    name: "Antichallenged",
    get description() { return `Complete all ${formatInt(12)} Normal Challenges.`; },
    checkRequirement: () => NormalChallenges.all.countWhere(c => !c.isCompleted) === 0,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
    get reward() { return `All Dimensions are ${formatPercents(0.1)} stronger.`; },
    effect: 1.1
  }
];