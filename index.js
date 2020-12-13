$("#efficientResourcesDown").click(modifyUpgrade);
$("#efficientResourcesUp").click(modifyUpgrade);
$("#resourceRateDown").click(modifyUpgrade);
$("#resourceRateUp").click(modifyUpgrade);
$("#efficientEmeraldsDown").click(modifyUpgrade);
$("#efficientEmeraldsUp").click(modifyUpgrade);
$("#emeraldRateDown").click(modifyUpgrade);
$("#emeraldRateUp").click(modifyUpgrade);

const currentTerrs = {
  "Kandon Farm": {
    "type": "crop",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Old Coal Mine": {
    "type": "ore",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Kandon Ridge": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Path to Ahmsord Upper": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Path to Ahmsord Lower": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Sky Castle": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Dragonling Nest": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Snail Island": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Temple Island": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Ahmsord": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Astraulus' Tower": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Swamp Island": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Ahmsord Outskirts": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Central Islands": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Sky Island Ascent": {
    "type": "ore",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Jofash Tunnel": {
    "type": "ore",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Jofash Docks": {
    "type": "fish",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Molten Reach": {
    "type": "ore",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Wybel Island": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Angel Refuge": {
    "type": "wood",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Sky falls": {
    "type": "ore",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Frozen Fort": {
    "type": "fish",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Raider's Base Upper": {
    "type": "ore",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Raider's Base Lower": {
    "type": "ore",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Regular Island": {
    "type": "fish",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Dead Island North East": {
    "type": "fish",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Dead Island North West": {
    "type": "fish",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Dead Island South East": {
    "type": "fish",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  },
  "Dead Island South West": {
    "type": "fish",
    "baseResources": 3600,
    "selected": "unselected",
    "productions": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "costs": {
      "emeralds": 0,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 0
    },
    "upgrades": {
      "efficientResources": 0,
      "resourceRate": 4,
      "efficientEmeralds": 0,
      "emeraldRate": 4
    }
  }
}
const currentUpgrades = {
  "efficientResources": 0,
  "resourceRate": 0,
  "efficientEmeralds": 0,
  "emeraldRate": 0
}

const resourceAmtUpgrades = [0, 50, 100, 150, 200, 250, 300];
const resourceAmtUpgradesCosts = [0, 6000, 12000, 24000, 48000, 96000, 192000];
const resourceTimes = [4, 3, 2, 1];
const resourceTimesCosts = [0, 6000, 18000, 32000];

const emeraldsAmtUpgrades = [0, 35, 100, 300];
const emeraldsAmtUpgradesCosts = [0, 2000, 8000, 32000];
const emeraldsTimes = [4, 3, 2, 1];
const emeraldsTimesCosts = [0, 2000, 8000, 32000];

updateJSON(Object.keys(currentTerrs), currentUpgrades);
updateCards();

function terrOnClick(terrName) {
  if (currentTerrs[terrName].selected == "selected") {
    currentTerrs[terrName].selected = "unselected";
  }
  else {
    currentTerrs[terrName].selected = "selected";
  }

  updateCards();
}

function updateCards() {
  const totalProduction = { "emeralds": 0, "wood": 0, "fish": 0, "ore": 0, "crop": 0 };
  const totalCosts = { "emeralds": 0, "wood": 0, "fish": 0, "ore": 0, "crop": 0 };
  const totalProfit = { "emeralds": 0, "wood": 0, "fish": 0, "ore": 0, "crop": 0 };

  $(".terrs").empty();
  let currentTerrsKeyse = Object.keys(currentTerrs);
  currentTerrsKeyse.sort();

  currentTerrsKeyse.forEach(terrName => {
    const terrData = currentTerrs[terrName];

    $(".terrs").append(`
    <div class="col-3">
      <div class="terr ${terrData.selected}" id="${terrName}" onclick="terrOnClick('${terrName.replace("'", "\\\'").replace('"', '\\\"')}')">
        <div class="name">
          <strong>${terrName}</strong>
        </div>
        <div class="type">
          ${terrData.type.slice(0, 1).toUpperCase() + terrData.type.slice(1)}
        </div>
        <div class="costs">
          ${terrData.productions.emeralds} emeralds
        </div>
        <div class="production">
          ${terrData.productions[terrData.type]} ${terrData.type}
        </div>
      </div>
    </div>
    `);

    Object.entries(terrData.productions).forEach(([productionType, productionValue]) => {
      totalProduction[productionType] += productionValue;
    });

    Object.entries(terrData.costs).forEach(([costType, costValue]) => {
      totalCosts[costType] += costValue;
    });

    Object.keys(totalProfit).forEach(resourceType => {
      totalProfit[resourceType] = totalProduction[resourceType] - totalCosts[resourceType];
    });
  });

  $(".totalProduction").html(`
    <u><strong>Total Production:</strong></u><br>
    <strong>Emeralds:</strong> ${totalProduction.emeralds}<br>
    <strong>Wood:</strong> ${totalProduction.wood}<br>
    <strong>Fish:</strong> ${totalProduction.fish}<br>
    <strong>Ore:</strong> ${totalProduction.ore}<br>
    <strong>Crop:</strong> ${totalProduction.crop}<br>

    <br>

    <u><strong>Total Costs:</strong></u><br>
    <strong>Emeralds:</strong> ${totalCosts.emeralds}<br>
    <strong>Wood:</strong> ${totalCosts.wood}<br>
    <strong>Fish:</strong> ${totalCosts.fish}<br>
    <strong>Ore:</strong> ${totalCosts.ore}<br>
    <strong>Crop:</strong> ${totalCosts.crop}<br>

    <br>

    <u><strong>Total Profit:</strong></u><br>
    <strong>Emeralds:</strong> ${totalProfit.emeralds}<br>
    <strong>Wood:</strong> ${totalProfit.wood}<br>
    <strong>Fish:</strong> ${totalProfit.fish}<br>
    <strong>Ore:</strong> ${totalProfit.ore}<br>
    <strong>Crop:</strong> ${totalProfit.crop}<br>
  `);

  const terrs = Object.keys(currentTerrs).filter(terrName => currentTerrs[terrName].selected == "selected");
  if (terrs.length == 0) {
    $("#terrsBeingModified").text("None");
  }
  else {
    $("#terrsBeingModified").text(terrs.join(", "));
  }
}

function updateJSON(terrs, upgrades) {
  terrs.forEach(terr => {
    currentTerrs[terr].upgrades.efficientResources = upgrades.efficientResources;
    currentTerrs[terr].upgrades.resourceRate = upgrades.resourceRate;
    currentTerrs[terr].upgrades.efficientEmeralds = upgrades.efficientEmeralds;
    currentTerrs[terr].upgrades.emeraldRate = upgrades.emeraldRate;

    currentTerrs[terr].productions[currentTerrs[terr].type] = ((currentTerrs[terr].baseResources / 900) * (1 + (resourceAmtUpgrades[upgrades.efficientResources] / 100)) * (60 * (60 / resourceTimes[upgrades.resourceRate])));
    currentTerrs[terr].productions.emeralds = (10 * (1 + (emeraldsAmtUpgrades[upgrades.efficientEmeralds] / 100)) * (60 * (60 / emeraldsTimes[upgrades.emeraldRate])));

    currentTerrs[terr].costs.emeralds = resourceAmtUpgradesCosts[resourceAmtUpgrades.indexOf(resourceAmtUpgrades[currentTerrs[terr].upgrades.efficientResources])];
    currentTerrs[terr].costs.emeralds += resourceTimesCosts[resourceTimes.indexOf(resourceTimes[currentTerrs[terr].upgrades.resourceRate])];
    currentTerrs[terr].costs.ore = emeraldsAmtUpgradesCosts[emeraldsAmtUpgrades.indexOf(emeraldsAmtUpgrades[currentTerrs[terr].upgrades.efficientEmeralds])];
    currentTerrs[terr].costs.crop = emeraldsTimesCosts[emeraldsTimes.indexOf(emeraldsTimes[currentTerrs[terr].upgrades.emeraldRate])];
  });

  updateCards();
}

function modifyUpgrade() {
  const objID = this.id;

  const upgradeType = objID.replace("Down", "").replace("Up", "");
  const text = $('#' + upgradeType).text();
  const startingText = text.split(": ")[0];
  let amountInUpgrade;

  if (upgradeType == "efficientResources") {
    amountInUpgrade = parseInt(text.split(": ")[1].split("%")[1].replace(" (", "").replace(")"));

    if (objID.includes("Down") && amountInUpgrade > 0) {
      amountInUpgrade--;
    }
    else if (objID.includes("Up") && amountInUpgrade < 6) {
      amountInUpgrade++;
    }

    $("#" + upgradeType).text(startingText + ": " + resourceAmtUpgrades[amountInUpgrade] + "% (" + amountInUpgrade + ")");
  }
  else if (upgradeType == "efficientEmeralds") {
    amountInUpgrade = parseInt(text.split(": ")[1].split("%")[1].replace(" (", "").replace(")"));

    if (objID.includes("Down") && amountInUpgrade > 0) {
      amountInUpgrade--;
    }
    else if (objID.includes("Up") && amountInUpgrade < 3) {
      amountInUpgrade++;
    }

    $("#" + upgradeType).text(startingText + ": " + emeraldsAmtUpgrades[amountInUpgrade] + "% (" + amountInUpgrade + ")");
  }
  else {
    amountInUpgrade = parseInt(text.split(": ")[1].split("s")[1].replace(" (", "").replace(")"));

    if (objID.includes("Down") && amountInUpgrade > 0) {
      amountInUpgrade--;
    }
    else if (objID.includes("Up") && amountInUpgrade < 3) {
      amountInUpgrade++;
    }

    $("#" + upgradeType).text(startingText + ": " + resourceTimes[amountInUpgrade] + "s (" + amountInUpgrade + ")");
  }

  currentUpgrades[upgradeType] = amountInUpgrade;
  const terrs = Object.keys(currentTerrs).filter(terrName => currentTerrs[terrName].selected == "selected");
  updateJSON(terrs, currentUpgrades);

  // if (objId.includes("Down")) {
  //   const id = objId.slice(0, objId.length - 4);
  //   const text = $('#' + id).text();
  //   const type = text.split(": ")[0];

  //   if (text.includes("Rate")) {
  //     let val = parseInt(text.split(": ")[1].split("s")[0]);
  //     let num = parseInt(text.split(": ")[1].split("s")[1].replace(" (", "").replace(")"));
  //     console.log(num);

  //     if (val > 1) {
  //       val -= 1;
  //       num++;
  //     }

  //     currentUpgrades[id] = val;
  //     $("#" + id).text(type + ": " + val + "s (" + num + ")")
  //   }
  //   else {
  //     let val = parseInt(text.split(": ")[1].split("%")[0]);
  //     let num = parseInt(text.split(": ")[1].split("%")[1].replace(" (", "").replace(")"));

  //     if (val > 0) {

  //       val -= 50;
  //       num--;
  //     }

  //     currentUpgrades[id] = val;
  //     $("#" + id).text(type + ": " + val + "% (" + num + ")")
  //   }
  // }
  // else {
  //   const id = objId.slice(0, objId.length - 2);
  //   const text = $('#' + id).text();
  //   const type = text.split(": ")[0];

  //   if (text.includes("Rate")) {
  //     let val = parseInt(text.split(": ")[1].split("s")[0]);
  //     let num = parseInt(text.split(": ")[1].split("s")[1].replace(" (", "").replace(")"));

  //     if (val < 4) {
  //       val += 1;
  //       num--;
  //     }

  //     currentUpgrades[id] = val;
  //     $("#" + id).text(type + ": " + val + "s (" + num + ")")
  //   }
  //   else {
  //     let val = parseInt(text.split(": ")[1].split("%")[0]);
  //     let num = parseInt(text.split(": ")[1].split("%")[1].replace(" (", "").replace(")"));

  //     if (val < 300) {
  //       val += 50;
  //       num++;
  //     }

  //     currentUpgrades[id] = val;
  //     $("#" + id).text(type + ": " + val + "% (" + num + ")")
  //   }
  // }
}