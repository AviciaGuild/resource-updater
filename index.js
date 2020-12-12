$("#efficientResourcesDown").click(modifyUpgrade);
$("#efficientResourcesUp").click(modifyUpgrade);
$("#resourceRateDown").click(modifyUpgrade);
$("#resourceRateUp").click(modifyUpgrade);
$("#efficientEmeraldsDown").click(modifyUpgrade);
$("#efficientEmeraldsUp").click(modifyUpgrade);
$("#emeraldRateDown").click(modifyUpgrade);
$("#emeraldRateUp").click(modifyUpgrade);

const currentTerrs = {
  "Ahmsord": {
    "type": "Wood",
    "baseResources": 3600,
    "productions": {
      "emeralds": 9000,
      "wood": 3600,
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
    "type": "Wood",
    "baseResources": 3600,
    "productions": {
      "emeralds": 9000,
      "wood": 3600,
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
    "type": "Wood",
    "baseResources": 3600,
    "productions": {
      "emeralds": 9000,
      "wood": 0,
      "fish": 3600,
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
  "Kandon Farm": {
    "type": "Wood",
    "baseResources": 3600,
    "productions": {
      "emeralds": 9000,
      "wood": 0,
      "fish": 0,
      "ore": 0,
      "crop": 3600
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
  "resourceRate": 4,
  "efficientEmeralds": 0,
  "emeraldRate": 4
}

updateCards();

function updateCards() {
  const totalProduction = { "emeralds": 0, "wood": 0, "fish": 0, "ore": 0, "crop": 0 };

  $(".terrs").empty();
  Object.entries(currentTerrs).forEach(([terrName, terrData]) => {
    const nonZero = Object.keys(terrData.productions).filter(key => key != "emeralds" && terrData.productions[key] != 0)[0];
    $(".terrs").append(`
      <div class="col terr" id="${terrName}">
        <div class="name">
          <strong>${terrName}</strong>
        </div>
        <div class="type">
          ${terrData.type}
        </div>
        <div class="costs">
          ${terrData.productions.emeralds} emeralds
        </div>
        <div class="production">
          ${terrData.productions[nonZero]} ${nonZero}
        </div>
      </div>
    `);

    Object.entries(terrData.productions).forEach(([productionType, productionValue]) => {
      totalProduction[productionType] += productionValue;
    });
  });

  $(".totalProduction").html(`
    <u><strong>Total Production:</strong></u><br>
    <strong>Emeralds:</strong> ${totalProduction.emeralds}<br>
    <strong>Wood:</strong> ${totalProduction.wood}<br>
    <strong>Fish:</strong> ${totalProduction.fish}<br>
    <strong>Ore:</strong> ${totalProduction.ore}<br>
    <strong>Crop:</strong> ${totalProduction.crop}<br>
  `);
}

function updateJSON(terrs, upgrades) {
  terrs.forEach(terr => {
    const nonZero = Object.keys(currentTerrs[terr].productions).filter(key => key != "emeralds" && currentTerrs[terr].productions[key] != 0)[0];

    currentTerrs[terr].upgrades.efficientResources = upgrades.efficientResources;
    currentTerrs[terr].upgrades.resourceRate = upgrades.resourceRate;
    currentTerrs[terr].upgrades.efficientEmeralds = upgrades.efficientEmeralds;
    currentTerrs[terr].upgrades.emeraldRate = upgrades.emeraldRate;

    currentTerrs[terr].productions[nonZero] = ((currentTerrs[terr].baseResources / 900) * (1 + (upgrades.efficientResources / 100)) * (60 * (60 / upgrades.resourceRate)))
    currentTerrs[terr].productions.emeralds = (100 * (1 + (upgrades.efficientEmeralds / 100)) * (60 * (60 / upgrades.emeraldRate)))
  });
}

function modifyUpgrade() {
  const objId = this.id;
  if (objId.includes("Down")) {
    const id = objId.slice(0, objId.length - 4);
    const text = $('#' + id).text();
    const type = text.split(": ")[0];

    if (text.includes("Rate")) {
      let val = parseInt(text.split(": ")[1].split("s")[0]);
      let num = parseInt(text.split(": ")[1].split("s")[1].replace(" (", "").replace(")"));
      console.log(num);

      if (val > 1) {
        val -= 1;
        num++;
      }

      currentUpgrades[id] = val;
      $("#" + id).text(type + ": " + val + "s (" + num + ")")
    }
    else {
      let val = parseInt(text.split(": ")[1].split("%")[0]);
      let num = parseInt(text.split(": ")[1].split("%")[1].replace(" (", "").replace(")"));

      if (val > 0) {
        val -= 50;
        num--;
      }

      currentUpgrades[id] = val;
      $("#" + id).text(type + ": " + val + "% (" + num + ")")
    }
  }
  else {
    const id = objId.slice(0, objId.length - 2);
    const text = $('#' + id).text();
    const type = text.split(": ")[0];

    if (text.includes("Rate")) {
      let val = parseInt(text.split(": ")[1].split("s")[0]);
      let num = parseInt(text.split(": ")[1].split("s")[1].replace(" (", "").replace(")"));

      if (val < 4) {
        val += 1;
        num--;
      }

      currentUpgrades[id] = val;
      $("#" + id).text(type + ": " + val + "s (" + num + ")")
    }
    else {
      let val = parseInt(text.split(": ")[1].split("%")[0]);
      let num = parseInt(text.split(": ")[1].split("%")[1].replace(" (", "").replace(")"));

      if (val < 300) {
        val += 50;
        num++;
      }

      currentUpgrades[id] = val;
      $("#" + id).text(type + ": " + val + "% (" + num + ")")
    }
  }

  const terrs = $("#terrsToModify").val().split(",");
  updateJSON(terrs, currentUpgrades);
  updateCards();
}