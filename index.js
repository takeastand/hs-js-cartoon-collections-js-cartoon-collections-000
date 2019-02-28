function dwarfRollCall(dwarves) {
  var list = "";
  for (var i = 0; i < dwarves.length; i++) {
	    list = list + ((i + 1) + ". " + (dwarves[i]) + " ");
  }
  return list;
}

function summonCaptainPlanet(planeteerCalls){
  var array = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    array.push(planeteerCalls[i].toUpperCase() + "!")
  }
  return array;
}

function longPlaneteerCalls(words) {
  var value = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === (cheese[0] || cheese[1] || cheese[2])) {
      return foods[i];
    }
  }
  return "no cheese!";
}