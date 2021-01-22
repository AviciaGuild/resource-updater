$("#efficientResourcesDown").click(modifyUpgrade);
$("#efficientResourcesUp").click(modifyUpgrade);
$("#resourceRateDown").click(modifyUpgrade);
$("#resourceRateUp").click(modifyUpgrade);
$("#efficientEmeraldsDown").click(modifyUpgrade);
$("#efficientEmeraldsUp").click(modifyUpgrade);
$("#emeraldRateDown").click(modifyUpgrade);
$("#emeraldRateUp").click(modifyUpgrade);

const currentTerrNames = ["Kandon Farm", "Old Coal Mine", "Kandon Ridge", "Path to Ahmsord Upper", "Path to Ahmsord Lower", "Sky Castle", "Dragonling Nests", "Snail Island", "Temple Island", "Ahmsord", "Astraulus' Tower", "Swamp Island", "Ahmsord Outskirts", "Central Islands", "Sky Island Ascent", "Jofash Tunnel", "Jofash Docks", "Molten Reach", "Wybel Island", "Angel Refuge", "Sky Falls", "Frozen Fort", "Raider's Base Upper", "Raider's Base Lower", "Thesead Suburbs", "Molten Heights Portal", "Crater Descent", "Rodoroc", "Lava Lake Bridge", "Lava Lake", "Active Volcano", "Volcanic Slope", "Entrance to Rodoroc", "Eltom", "Ranol's Farm"];
const currentTerrs = {};
let currentUpgrades = { "efficientResources": 0, "resourceRate": 0, "efficientEmeralds": 0, "emeraldRate": 0 }

const resourceAmtUpgrades = [0, 50, 100, 150, 200, 250, 300];
const resourceAmtUpgradesCosts = [0, 6000, 12000, 24000, 48000, 96000, 192000];
const resourceTimes = [4, 3, 2, 1];
const resourceTimesCosts = [0, 6000, 18000, 32000];

const emeraldsAmtUpgrades = [0, 35, 100, 300];
const emeraldsAmtUpgradesCosts = [0, 2000, 8000, 32000];
const emeraldsTimes = [4, 3, 2, 1];
const emeraldsTimesCosts = [0, 2000, 8000, 32000];

updateCurrentTerrs();

function updateCurrentTerrs() {
  $.get("https://www.avicia.tk/map/terralldata.json", function (terrData) {
    currentTerrNames.forEach(terr => {
      const resources = Object.keys(terrData[terr].resources).filter(resourceType => terrData[terr].resources[resourceType] != 0 && resourceType != "emeralds");
      const value = {
        "type": resources,
        "baseResources": terrData[terr].resources[resources[0]],
        "selected": "unselected",
        "productions": {
          "emeralds": 0,
          "wood": 0,
          "fish": 0,
          "ore": 0,
          "crops": 0
        },
        "costs": {
          "emeralds": 0,
          "wood": 0,
          "fish": 0,
          "ore": 0,
          "crops": 0
        },
        "upgrades": {
          "efficientResources": 0,
          "resourceRate": 0,
          "efficientEmeralds": 0,
          "emeraldRate": 0
        }
      };

      currentTerrs[terr] = value;
    });

    updateJSON(Object.keys(currentTerrs), currentUpgrades);
    updateCards();

    updateMap();
  });
}

function updateMap() {
  const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: 6,
    maxZoom: 10,
    zoomControl: false,
    zoom: 8
  });

  L.imageOverlay("map.png", [[0, 0], [7, 7]]).addTo(map);
  map.fitBounds([[0, 0], [7, 7]]);

  let minX = 550;
  let maxX = 1620;
  let xRange = Math.abs(maxX - minX);
  let minY = -5675;
  let maxY = -3820;
  let yRange = Math.abs(maxY - minY);

  $.get("https://www.avicia.tk/map/territories.json", function (terrData) {
    Object.keys(currentTerrs).forEach(terr => {
      let currentTerrData = terrData.find(e => e.name == terr);
      let bounds = [[currentTerrData.start.split(",")[1], currentTerrData.start.split(",")[0]], [currentTerrData.end.split(",")[1], currentTerrData.end.split(",")[0]]];

      bounds[0][0] = 7 - ((bounds[0][0] - minY) * 7 / yRange);
      bounds[0][1] = (bounds[0][1] - minX) * 7 / xRange;
      bounds[1][0] = 7 - ((bounds[1][0] - minY) * 7 / yRange);
      bounds[1][1] = (bounds[1][1] - minX) * 7 / xRange;

      let rectangle = L.rectangle(bounds, { color: "#0058ff", weight: 2 })

      rectangle.bindPopup(terr).openPopup();
      currentTerrs[terr].popup = rectangle;

      rectangle.addTo(map);
    });
  });
}

setTimeout(function () {
  updateRectangles();
}, 2000);

function updateRectangles() {
  Object.entries(currentTerrs).forEach(([terrName, terrData]) => {
    if (terrData.popup != undefined) {
      terrData.popup.setPopupContent(`
      <strong>${terrName}</strong>
      <table>
        <tr>
          <th>Type</th>
          <th>Costs</th>
          <th>Products</th>
          <th>Profit</th>
        </tr>

        <tr>
          <td>Emeralds</td>
          <td>${terrData.costs.emeralds}</td>
          <td>${terrData.productions.emeralds}</td>
          <td>${terrData.productions.emeralds - terrData.costs.emeralds}</td>
        </tr>

        <tr>
          <td>Wood</td>
          <td>${terrData.costs.wood}</td>
          <td>${terrData.productions.wood}</td>
          <td>${terrData.productions.wood - terrData.costs.wood}</td>
        </tr>

        <tr>
          <td>Ore</td>
          <td>${terrData.costs.ore}</td>
          <td>${terrData.productions.ore}</td>
          <td>${terrData.productions.ore - terrData.costs.ore}</td>
        </tr>

        <tr>
          <td>Fish</td>
          <td>${terrData.costs.fish}</td>
          <td>${terrData.productions.fish}</td>
          <td>${terrData.productions.fish - terrData.costs.fish}</td>
        </tr>

        <tr>
          <td>Crop</td>
          <td>${terrData.costs.crops}</td>
          <td>${terrData.productions.crops}</td>
          <td>${terrData.productions.crops - terrData.costs.crops}</td>
        </tr>
      </table>
    `);
    }
  });
}

function terrOnClick(terrName) {
  if (currentTerrs[terrName].selected == "selected") {
    currentTerrs[terrName].selected = "unselected";
  }
  else {
    currentTerrs[terrName].selected = "selected";
  }

  const selectedTerrs = Object.keys(currentTerrs).filter(terrName => currentTerrs[terrName].selected == "selected");
  if (selectedTerrs.length == 0) {
    currentUpgrades = { "efficientResources": 0, "resourceRate": 0, "efficientEmeralds": 0, "emeraldRate": 0 }
    updateUpgradeText(currentUpgrades);
  }
  else if (selectedTerrs.length == 1) {
    currentUpgrades = currentTerrs[selectedTerrs[0]].upgrades;
    updateUpgradeText(currentUpgrades);
  }

  updateCards();
}

function updateUpgradeText(currentUpgrades) {
  $("#efficientResources").text(`Efficient Resources: ${resourceAmtUpgrades[currentUpgrades.efficientResources]}% (${currentUpgrades.efficientResources})`);
  $("#resourceRate").text(`Resource Rate: ${resourceTimes[currentUpgrades.resourceRate]}s (${currentUpgrades.resourceRate})`);
  $("#efficientEmeralds").text(`Efficient Emeralds: ${emeraldsAmtUpgrades[currentUpgrades.efficientEmeralds]}% (${currentUpgrades.efficientEmeralds})`);
  $("#emeraldRate").text(`Emerald Rate: ${emeraldsTimes[currentUpgrades.emeraldRate]}s (${currentUpgrades.emeraldRate})`);
}

function updateCards() {
  const totalProduction = { "emeralds": 0, "wood": 0, "fish": 0, "ore": 0, "crops": 0 };
  const totalCosts = { "emeralds": 0, "wood": 0, "fish": 0, "ore": 0, "crops": 0 };
  const totalProfit = { "emeralds": 0, "wood": 0, "fish": 0, "ore": 0, "crops": 0 };

  $(".terrs").empty();
  let currentTerrsKeys = Object.keys(currentTerrs);
  currentTerrsKeys.sort();

  currentTerrsKeys.forEach(terrName => {
    const terrData = currentTerrs[terrName];

    $(".terrs").append(`
    <div class="col-3">
      <div class="terr ${terrData.selected}" id="${terrName}" onclick="terrOnClick('${terrName.replace("'", "\\\'").replace('"', '\\\"')}')">
        <div class="name">
          <strong>${terrName}</strong>
        </div>
        <div class="type">
          ${terrData.type.map(e => e.slice(0, 1).toUpperCase() + e.slice(1)).join(", ")}
        </div>
        <div class="costs">
          ${terrData.productions.emeralds} emeralds
        </div>
        <div class="production">
          ${terrData.type.map(type => terrData.productions[type] + " " + type).join("<br>")}
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
    <strong>Crop:</strong> ${totalProduction.crops}<br>

    <br>

    <u><strong>Total Costs:</strong></u><br>
    <strong>Emeralds:</strong> ${totalCosts.emeralds}<br>
    <strong>Wood:</strong> ${totalCosts.wood}<br>
    <strong>Fish:</strong> ${totalCosts.fish}<br>
    <strong>Ore:</strong> ${totalCosts.ore}<br>
    <strong>Crop:</strong> ${totalCosts.crops}<br>

    <br>

    <u><strong>Total Profit:</strong></u><br>
    <strong>Emeralds:</strong> ${totalProfit.emeralds}<br>
    <strong>Wood:</strong> ${totalProfit.wood}<br>
    <strong>Fish:</strong> ${totalProfit.fish}<br>
    <strong>Ore:</strong> ${totalProfit.ore}<br>
    <strong>Crop:</strong> ${totalProfit.crops}<br>
  `);

  const terrs = Object.keys(currentTerrs).filter(terrName => currentTerrs[terrName].selected == "selected");
  if (terrs.length == 0) {
    $("#terrsBeingModified").text("None");
  }
  else {
    $("#terrsBeingModified").text(terrs.join(", "));
  }

  updateRectangles();
}

function updateJSON(terrs, upgrades) {
  terrs.forEach(terr => {
    currentTerrs[terr].upgrades.efficientResources = upgrades.efficientResources;
    currentTerrs[terr].upgrades.resourceRate = upgrades.resourceRate;
    currentTerrs[terr].upgrades.efficientEmeralds = upgrades.efficientEmeralds;
    currentTerrs[terr].upgrades.emeraldRate = upgrades.emeraldRate;

    currentTerrs[terr].type.forEach(type => {
      currentTerrs[terr].productions[type] = ((currentTerrs[terr].baseResources / 900) * (1 + (resourceAmtUpgrades[upgrades.efficientResources] / 100)) * (60 * (60 / resourceTimes[upgrades.resourceRate])));
    });
    currentTerrs[terr].productions.emeralds = (10 * (1 + (emeraldsAmtUpgrades[upgrades.efficientEmeralds] / 100)) * (60 * (60 / emeraldsTimes[upgrades.emeraldRate])));

    currentTerrs[terr].costs.emeralds = resourceAmtUpgradesCosts[resourceAmtUpgrades.indexOf(resourceAmtUpgrades[currentTerrs[terr].upgrades.efficientResources])];
    currentTerrs[terr].costs.emeralds += resourceTimesCosts[resourceTimes.indexOf(resourceTimes[currentTerrs[terr].upgrades.resourceRate])];
    currentTerrs[terr].costs.ore = emeraldsAmtUpgradesCosts[emeraldsAmtUpgrades.indexOf(emeraldsAmtUpgrades[currentTerrs[terr].upgrades.efficientEmeralds])];
    currentTerrs[terr].costs.crops = emeraldsTimesCosts[emeraldsTimes.indexOf(emeraldsTimes[currentTerrs[terr].upgrades.emeraldRate])];
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
  }
  else if (upgradeType == "efficientEmeralds") {
    amountInUpgrade = parseInt(text.split(": ")[1].split("%")[1].replace(" (", "").replace(")"));

    if (objID.includes("Down") && amountInUpgrade > 0) {
      amountInUpgrade--;
    }
    else if (objID.includes("Up") && amountInUpgrade < 3) {
      amountInUpgrade++;
    }
  }
  else {
    amountInUpgrade = parseInt(text.split(": ")[1].split("s")[1].replace(" (", "").replace(")"));

    if (objID.includes("Down") && amountInUpgrade > 0) {
      amountInUpgrade--;
    }
    else if (objID.includes("Up") && amountInUpgrade < 3) {
      amountInUpgrade++;
    }
  }

  currentUpgrades[upgradeType] = amountInUpgrade;
  const terrs = Object.keys(currentTerrs).filter(terrName => currentTerrs[terrName].selected == "selected");
  updateJSON(terrs, currentUpgrades);
  updateUpgradeText(currentUpgrades);
}
