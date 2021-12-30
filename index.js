// $("#efficientResourcesDown").click(modifyUpgrade);
// $("#efficientResourcesUp").click(modifyUpgrade);
// $("#resourceRateDown").click(modifyUpgrade);
// $("#resourceRateUp").click(modifyUpgrade);
// $("#efficientEmeraldsDown").click(modifyUpgrade);
// $("#efficientEmeraldsUp").click(modifyUpgrade);
// $("#emeraldRateDown").click(modifyUpgrade);
// $("#emeraldRateUp").click(modifyUpgrade);
// $("#treasuryBonusConfirm").click(updateTreasuryBonus);

$(".upgradeSlot").mousedown(modifyUpgrade).contextmenu(() => false);
$(".upgrades").contextmenu(() => false);

let shifted = false;
$(document).on('keyup keydown', function (e) { shifted = e.shiftKey });

let currentTerrNames = ["Volcanic Slope", "Eltom", "Lava Lake", "Crater Descent", "Temple Island", "Sky Castle", "Path to Ahmsord Upper", "Old Coal Mine", "Astraulus' Tower", "Ahmsord Outskirts", "Angel Refuge", "Central Islands", "Sky Falls", "Raider's Base Lower", "Jofash Docks", "Kandon Farm", "Molten Heights Portal", "Active Volcano", "Snail Island", "Frozen Fort", "Kandon Ridge", "Molten Reach", "Wybel Island", "Raider's Base Upper", "Entrance to Rodoroc", "Ahmsord", "Dragonling Nests", "Sky Island Ascent", "Lava Lake Bridge", "Path to Ahmsord Lower", "Jofash Tunnel", "Rodoroc", "Swamp Island"];
let currentTerrs = {};
let hq = "Central Islands";
let globalTreasury = "Very Low";

const upgradesJSON = {
  "towerDamage": {
    "current": 0,
    "displayName": "Damage",
    "resource": "ore",
    "type": "%",
    "upgrades": [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440],
    "costs": [0, 100, 300, 600, 1200, 2400, 4800, 8400, 12000, 14600, 17200, 19800]
  },
  "towerAttack": {
    "current": 0,
    "displayName": "Attack",
    "resource": "crops",
    "type": "%",
    "upgrades": [0, 50, 100, 150, 220, 300, 400, 500, 620, 660, 740, 840],
    "costs": [0, 100, 300, 600, 1200, 2400, 4800, 8400, 12000, 14600, 17200, 19800]
  },
  "towerHealth": {
    "current": 0,
    "displayName": "Health",
    "resource": "wood",
    "type": "%",
    "upgrades": [0, 50, 100, 150, 220, 300, 400, 500, 620, 660, 740, 840],
    "costs": [0, 100, 300, 600, 1200, 2400, 4800, 8400, 12000, 14600, 17200, 19800]
  },
  "towerDefense": {
    "current": 0,
    "displayName": "Defense",
    "resource": "fish",
    "type": "%",
    "upgrades": [0, 300, 450, 525, 580, 620, 645, 665, 680, 695, 710, 720],
    "costs": [0, 100, 300, 600, 1200, 2400, 4800, 8400, 12000, 14600, 17200, 19800]
  },
  "towerMinions": {
    "current": 0,
    "displayName": "Minions",
    "resource": "wood",
    "type": "%",
    "upgrades": [0, 150, 200, 250, 300],
    "costs": [0, 200, 400, 800, 1600]
  },
  "towerMA": {
    "current": 0,
    "displayName": "Multi",
    "resource": "fish",
    "type": "",
    "upgrades": [1, 2, 3],
    "costs": [0, 4800, 9600]
  },
  "towerAura": {
    "current": 0,
    "displayName": "Aura",
    "resource": "crops",
    "type": "s",
    "upgrades": [0, 24, 18, 12],
    "costs": [0, 800, 1600, 3200]
  },
  "towerVolley": {
    "current": 0,
    "displayName": "Volley",
    "resource": "ore",
    "type": "s",
    "upgrades": [0, 20, 15, 10],
    "costs": [0, 200, 400, 800]
  },
  "resourceStorage": {
    "current": 0,
    "displayName": "Resource Storage",
    "resource": "emeralds",
    "type": "%",
    "upgrades": [0, 100, 300, 700, 1400, 3300, 7900],
    "costs": [0, 400, 800, 2000, 5000, 16000, 48000]
  },
  "emeraldStorage": {
    "current": 0,
    "displayName": "Emerald Storage",
    "resource": "wood",
    "type": "%",
    "upgrades": [0, 100, 300, 700, 1400, 3300, 7900],
    "costs": [0, 200, 400, 1000, 2500, 8000, 24000]
  },
  "efficientResources": {
    "current": 0,
    "displayName": "Efficient Resources",
    "resource": "emeralds",
    "type": "%",
    "upgrades": [0, 50, 100, 150, 200, 250, 300],
    "costs": [0, 6000, 12000, 24000, 48000, 96000, 192000]
  },
  "efficientEmeralds": {
    "current": 0,
    "displayName": "Efficient Emeralds",
    "resource": "ore",
    "type": "%",
    "upgrades": [0, 35, 100, 300],
    "costs": [0, 2000, 8000, 32000]
  },
  "resourceRate": {
    "current": 0,
    "displayName": "Resource Rate",
    "resource": "emeralds",
    "type": "s",
    "upgrades": [4, 3, 2, 1],
    "costs": [0, 6000, 18000, 32000]
  },
  "emeraldRate": {
    "current": 0,
    "displayName": "Emerald Rate",
    "resource": "crops",
    "type": "s",
    "upgrades": [4, 3, 2, 1],
    "costs": [0, 2000, 8000, 32000]
  }
}

let rectangles = {};
let tradingRoutes = {};
let selections = [];
let showingTerr = "";

const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: 6,
  maxZoom: 10,
  zoomControl: false,
  zoom: 8,
  preferCanvas: true,
  markerZoomAnimation: false,
  inertia: false
});

updateCurrentTerrs();

function updateMap() {
  const bounds = [];
  const images = [];

  L.control.zoom({
    position: 'topright'
  }).addTo(map);

  map.fitBounds([[0, -4], [6, 2]]);

  for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
      bounds.push([[a * 2, (2 * b) - 4], [(a + 1) * 2, (2 * (b + 1)) - 4]])
    }
  }
  bounds.push([[6, -2], [8, 0]])
  bounds.push([[-2, 0], [0, 2]])

  for (let bound of bounds) {
    images.push(L.imageOverlay(`./tiles/${bound[0][1]}/${bound[0][0]}.png`,
      bound, {}
    ));
  }

  for (let image of images) {
    image.addTo(map);
  }

  map.on('zoomend', () => {
    if (map.getZoom() <= 8) {
      hideTradeRoutes();
      hideTooltips();
    } else if (map.getZoom() >= 8) {
      showTradeRoutes();
      showTooltips();
    }
    prevZoom = map.getZoom();
  });

  map.doubleClickZoom.disable();

  $.get("https://www.avicia.tk/map/territories.json", function (terrData) {
    $.get("https://www.avicia.tk/map/terralldata.json", function (resourceData) {
      let colors = {
        "crops": "#ffe83d",
        "ore": "#ff3333",
        "fish": "#3098ff",
        "wood": "#4ab31d",
        "oasis": "#cf1bbd"
      };

      for (let territory in terrData.territories) {
        if (currentTerrNames.includes(territory)) {

          let location = terrData.territories[territory].location
          let bounds = [[location.startY * -.001, location.startX * .001], [location.endY * -.001, location.endX * .001]]

          let productions = Object.keys(resourceData[territory].resources).filter(e => e !== "emeralds" && resourceData[territory].resources[e] !== '0');
          if (productions.length > 1) {
            productions = ["oasis"];
          }

          let rectangle = L.rectangle(bounds, { color: colors[productions], weight: 2, pane: "markerPane" });

          if (currentTerrNames.includes(territory)) {
            rectangle.unbindTooltip();
            rectangle.bindTooltip(`<span class="territoryName" style="visibility: hidden">${territory}</span>`, { sticky: true, interactive: false, permanent: true, direction: 'center', className: 'territoryName', opacity: 1 })
          }

          if (territory in currentTerrs) {
            currentTerrs[territory].popup = rectangle;

            rectangle.on("click", () => {
              if (selections.includes(territory)) {
                selections = selections.filter(index => index != territory);
                rectangles[territory].setStyle({ dashArray: [0] });
              }
              else {
                selections.push(territory);
                rectangles[territory].setStyle({ dashArray: [7] })
              }

              updateUpgradesMenu();
            });

            rectangle.on("mouseover", () => {
              if (shifted) {
                showingTerr = territory;
                updateTerrStats();
              }
            });
          }
          rectangles[territory] = rectangle;
          rectangle.addTo(map);
        }
      }

      for (territory in rectangles) {
        try {
          for (route of resourceData[territory]["Trading Routes"]) {
            if (currentTerrNames.includes(route)) {
              currentTerrs[territory].conns.push(route);
              currentTerrs[route].conns.push(territory);

              let polyline = L.polyline([rectangles[territory].getCenter(), rectangles[route].getCenter()], { color: "rgba(0,0,0,0)", pane: "overlayPane" });
              tradingRoutes[territory] ? tradingRoutes[territory].push(polyline) : tradingRoutes[territory] = [polyline];
              polyline.addTo(map);

              polyline.on("click", () => {
                console.log(territory);
              });
            }
          }
        } catch (e) {
          console.error(e);
          console.log(territory);
        }
      }

      updateTreasuryBonus();
    });
  });
}

function updateTerrStats() {
  if (showingTerr == "") return;

  const terrData = currentTerrs[showingTerr];
  const connsBonus = 1 + (0.3 * new Set(terrData.conns).size);
  const damageMin = 1000 * connsBonus * (1 + (upgradesJSON.towerDamage.upgrades[terrData.upgrades.towerDamage] / 100));
  const damageMax = 1500 * connsBonus * (1 + (upgradesJSON.towerDamage.upgrades[terrData.upgrades.towerDamage] / 100));
  const attackSpeed = Math.round(0.5 * (1 + (upgradesJSON.towerAttack.upgrades[terrData.upgrades.towerAttack] / 100)) * 10) / 10;
  const health = 300000 * connsBonus * (1 + (upgradesJSON.towerHealth.upgrades[terrData.upgrades.towerHealth] / 100));
  const defense = 10 * (1 + (upgradesJSON.towerDefense.upgrades[terrData.upgrades.towerDefense] / 100));

  const towerDPSMin = damageMin * attackSpeed;
  const towerDPSMax = damageMax * attackSpeed;
  const towerEHP = health / (1 - (defense / 100));

  $(".terrStats").html(`
  <div class="terr" id="${showingTerr}"">
    <div class="terrName">
      <strong><u>${showingTerr}</u></strong>
    </div>

    <div class="productions">
      <strong class="emeralds">+${Math.round(terrData.productions.emeralds)} Emeralds <br></strong>
      ${terrData.type.map(type => `<strong class="${type}">+${Math.round(terrData.productions[type])} ${type.slice(0, 1).toUpperCase() + type.slice(1)}</strong>`).join("<br>")}
    </div>
    <br>
    <div class="towerStats">
    Tower Damage: ${makeReadableNumber(damageMin)}-${makeReadableNumber(damageMax)}<br>
    Tower Attack Speed: ${attackSpeed}x<br>
    Tower Health: ${makeReadableNumber(health)}<br>
    Tower Defense: ${defense}%<br>
    
    Tower DPS: ${makeReadableNumber(towerDPSMin)}-${makeReadableNumber(towerDPSMax)}<br>
    Tower EHP: ${makeReadableNumber(towerEHP)}<br>
    </div>
    <br>
    ${Object.keys(terrData.upgrades).filter(type => !type.toLowerCase().includes("emerald") && !type.toLowerCase().includes("resource")).map(type => `${upgradesJSON[type].displayName}: ${terrData.upgrades[type]}`).join("<br>")}
  </div>
  `)

  $(".terrStats").css("display", "block");
}

function hideTradeRoutes() {
  for (territory in tradingRoutes) {
    for (route in tradingRoutes[territory]) {
      tradingRoutes[territory][route].setStyle({
        color: 'rgba(0,0,0,0)'
      })
    }
  }
}

function showTradeRoutes() {
  for (territory in tradingRoutes) {
    for (route in tradingRoutes[territory]) {
      tradingRoutes[territory][route].setStyle({
        color: 'white'
      })
    }
  }
}

function hideTooltips() {
  $('.territoryName').each(function (i, obj) {
    obj.style.visibility = "hidden";
  });
}

function showTooltips() {
  $('.territoryName').each(function (i, obj) {
    obj.style.visibility = "visible";
  });
}

function updateCurrentTerrs() {
  $.get("https://www.avicia.tk/map/terralldata.json", function (terrData) {
    currentTerrs = {};
    currentTerrNames.forEach(terr => {
      const resources = Object.keys(terrData[terr].resources).filter(resourceType => terrData[terr].resources[resourceType] != 0 && resourceType != "emeralds");
      const value = {
        type: resources,
        baseResources: terrData[terr].resources[resources[0]],
        baseEmeralds: terrData[terr].resources.emeralds,
        productions: {
          emeralds: 0,
          wood: 0,
          fish: 0,
          ore: 0,
          crops: 0
        },
        costs: {
          emeralds: 0,
          wood: 0,
          fish: 0,
          ore: 0,
          crops: 0
        },
        upgrades: {
          efficientResources: 0,
          resourceRate: 0,
          efficientEmeralds: 0,
          emeraldRate: 0,
          towerDamage: 0,
          towerAttack: 0,
          towerHealth: 0,
          towerDefense: 0,
          towerMinions: 0,
          towerMA: 0,
          towerAura: 0,
          towerVolley: 0,
          resourceStorage: 0,
          emeraldStorage: 0
        },
        treasuryBonus: 0,
        treasuryValue: globalTreasury,
        conns: []
      };

      currentTerrs[terr] = value;
    });

    Object.values(upgradesJSON).forEach(upgradeData => {
      upgradeData.current = 0;
    });

    updateMap();
  });
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
    <strong class="emeralds"> +${makeReadableNumber(totalProduction.emeralds)} Emeralds </strong><br>
    <strong class="ore"> +${makeReadableNumber(totalProduction.ore)} Ore </strong><br>
    <strong class="wood"> +${makeReadableNumber(totalProduction.wood)} Wood </strong><br>
    <strong class="fish"> +${makeReadableNumber(totalProduction.fish)} Fish </strong><br>
    <strong class="crops"> +${makeReadableNumber(totalProduction.crops)} Crops </strong><br>

    <br>

    <u><strong>Total Costs:</strong></u><br>
    ${Object.keys(totalCosts).map(type => `
    <strong class="${type}"> -${makeReadableNumber(totalCosts[type])} ${type.slice(0, 1).toUpperCase() + type.slice(1)}
    ${`<span class="${totalCosts[type] > totalProduction[type] ? "overPercentage" : "percentage"}">(${Math.floor((totalCosts[type] / totalProduction[type]) * 100)}%)</span>`} 
    <span class="profitNum">(${totalProfit[type] > 0 ? `+${makeReadableNumber(totalProfit[type])}` : `-${makeReadableNumber(Math.abs(totalProfit[type]))}`})</span> </strong>
    `).join("<br>")}

    <br>
  `);

  const terrs = Object.keys(currentTerrs).filter(terrName => currentTerrs[terrName].selected == "selected");
  if (terrs.length == 0) {
    $("#terrsBeingModified").text("None");
  }
  else {
    $("#terrsBeingModified").text(terrs.join(", "));
  }
}

function updateTerrOutputs(terrs) {
  terrs.forEach(terr => {
    const terrData = currentTerrs[terr];

    currentTerrs[terr].type.forEach(type => {
      currentTerrs[terr].productions[type] = ((currentTerrs[terr].baseResources / 900) * (1 + (upgradesJSON.efficientResources.upgrades[terrData.upgrades.efficientResources] / 100)) * (60 * (60 / upgradesJSON.resourceRate.upgrades[terrData.upgrades.resourceRate]))) * (1 + (currentTerrs[terr].treasuryBonus) / 100);
    });
    currentTerrs[terr].productions.emeralds = ((currentTerrs[terr].baseEmeralds / 900) * (1 + (upgradesJSON.efficientEmeralds.upgrades[terrData.upgrades.efficientEmeralds] / 100)) * (60 * (60 / upgradesJSON.emeraldRate.upgrades[terrData.upgrades.emeraldRate]))) * (1 + (currentTerrs[terr].treasuryBonus) / 100);

    currentTerrs[terr].costs = { "emeralds": 0, "wood": 0, "fish": 0, "ore": 0, "crops": 0 };
    Object.entries(upgradesJSON).forEach(([upgradeType, upgradeData]) => {
      currentTerrs[terr].costs[upgradeData.resource] += upgradeData.costs[terrData.upgrades[upgradeType]];
    });
  });
  
  updateCards();
}

function updateUpgradesMenu() {
  if (selections.length == 0) {
    Object.values(upgradesJSON).forEach(data => {
      data.current = 0;
    });

    [...$(".upgradeNumber")].forEach(e => {
      e.innerText = 0;
    });
  } else if (selections.length == 1) {
    [...$(".upgradeNumber")].forEach(e => {
      const upgradeType = e.id.replace("Number", "");
      const upgradeValue = currentTerrs[selections[0]].upgrades[upgradeType];;

      e.innerText = upgradeValue;
      upgradesJSON[upgradeType].current = upgradeValue;
    });
  }
}

function modifyUpgrade(event) {
  const tags = [...event.currentTarget?.childNodes].filter(e => e.tagName == "P");
  if (tags.length !== 1) return;

  const upgradeType = tags[0].id.replace("Number", "");
  let changeNum = 1;

  if (event.shiftKey) {
    changeNum = 3;
  }

  if (event.button == 0) {
    upgradesJSON[upgradeType].current = Math.min(upgradesJSON[upgradeType].current + changeNum, upgradesJSON[upgradeType].upgrades.length - 1);
  } else if (event.button == 2) {
    upgradesJSON[upgradeType].current = Math.max(upgradesJSON[upgradeType].current - changeNum, 0);
  }

  tags[0].innerText = upgradesJSON[upgradeType].current;

  selections.forEach(terr => {
    const terrData = currentTerrs[terr];

    Object.keys(terrData.upgrades).forEach(upgradeType => {
      terrData.upgrades[upgradeType] = upgradesJSON[upgradeType].current;
    });
  });

  updateTerrOutputs(selections);
  updateTerrStats();
}

function updateGlobalTreasury(newGlobalTreasury) {
  globalTreasury = newGlobalTreasury;
  Object.values(currentTerrs).forEach(terrData => {
    terrData.treasuryValue = globalTreasury;
  });

  $("#dropdownMenuButton").text(globalTreasury);
  updateTreasuryBonus();
}

function updateTreasuryBonus() {
  const baseValues = {
    0: 10,
    1: 10,
    2: 10,
    3: 8.5,
    4: 7,
    5: 5.5,
    6: 4
  };
  const multiplierConversions = {
    "Very Low": 0,
    "Low": 1,
    "Medium": 2,
    "High": 2.5,
    "Very High": 3
  };

  Object.entries(currentTerrs).forEach(([terrName, terrData]) => {
    let shortestTreasuryRoute = Math.min(getShortestRoute(hq, terrName, []), 6);
    terrData.treasuryBonus = baseValues[shortestTreasuryRoute] * multiplierConversions[terrData.treasuryValue];
  });
  
  updateTerrOutputs(Object.keys(currentTerrs));
}

function getShortestRoute(startTerr, endTerr, formerTerrs) {
  if (!(startTerr in currentTerrs)) return 999;
  if (startTerr == endTerr) return 0;

  const conns = [...new Set(currentTerrs[startTerr].conns)].filter(conn => !formerTerrs.includes(conn));
  return 1 + Math.min(...conns.map(conn => getShortestRoute(conn, endTerr, [...formerTerrs, conn])));
}

$("#importMapButton").on("click", function () {
  $("#importMap").click();
});

$("#importMap").on("change", function () {
  const file = document.getElementById("importMap").files[0];

  const reader = new FileReader();
  reader.onload = function (file) {
    const mapJSON = JSON.parse(file.target.result);
    currentTerrNames = Object.keys(mapJSON.territories).filter(terrName => mapJSON.territories[terrName] == "AVO");
    updateCurrentTerrs();
  }
  reader.readAsText(file);

  document.getElementById("importMap").value = "";
});

$("#importUpgradesButton").on("click", function () {
  $("#importUpgrades").click();
});

$("#importUpgrades").on("change", function () {
  const file = document.getElementById("importUpgrades").files[0];

  const reader = new FileReader();
  reader.onload = function (file) {
    const importedData = JSON.parse(file.target.result);
    Object.entries(importedData).forEach(([terrName, terrData]) => {
      if (currentTerrs[terrName] != undefined) {
        terrData.popup = currentTerrs[terrName].popup;
      }
      terrData.selected = "unselected";
    });
    currentTerrs = Object.assign({}, importedData);
    currentTerrNames = Object.keys(currentTerrs);

    Object.values(upgradesJSON).forEach(upgradeData => {
      upgradeData.current = 0;
    });

    updateCards();
  }
  reader.readAsText(file);

  document.getElementById("importUpgrades").value = "";

  updateMap();
});

$("#exportUpgradesButton").on("click", function () {
  const dataToExport = {};
  Object.assign(dataToExport, currentTerrs);

  Object.values(dataToExport).forEach(terrData => {
    delete terrData.popup;
  });

  const aElement = document.createElement("a");
  const fileToDownload = new Blob([JSON.stringify(dataToExport)], { type: 'application/json' });
  aElement.href = URL.createObjectURL(fileToDownload);
  aElement.download = 'upgrades.json';
  aElement.click();
});

$("#deselectAll").on("click", function () {
  selections.forEach(territory => rectangles[territory].setStyle({ dashArray: [0] }));
  selections = [];
});

function makeReadableNumber(number) {
  if (number >= 1000000000) {
    return `${Math.floor(number / 10000000) / 100}B`
  } else if (number >= 1000000) {
    return `${Math.floor(number / 10000) / 100}M`
  } else if (number >= 1000) {
    return `${Math.floor(number / 10) / 100}K`
  }

  return Math.floor(number);
}