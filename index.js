function dwarfRollCall(dwarves) {
  var list = "";
  for (var i = 0; i < dwarves.length/2; i++) {
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
    for (var j = 0; j < cheese.length; j++) {
      if (foods[i] === cheese[j]) {
        return cheese[j];
      }
    }
  }
  return "no cheese!";
}

function wordsWithB (words) {
  var wordsStartWithB = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].charAt(0).toLowerCase() === "b") {
      wordsStartWithB.push(words[i]);
    }
  }
  return wordsStartWithB;
  //return every word that starts with b
}

