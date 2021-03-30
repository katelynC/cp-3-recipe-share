// Added this stuff below??
var el = document.getElementById('overlayBtn');
if (el) {
  el.addEventListener('click', swapper, false);
}

// The recommended code:
document.getElementById("ingredientSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("ingredientInput").value;
  if (value === "")
    return;
  console.log(value);


  var url = "https://api.edamam.com/api/nutrition-data?app_id=4a2c0b9d&app_key=9faa92a69fa4454b3efdcb547ca89a47&ingr=";
  //url += "1%20large%20apple";
  var words = value.split(" ");
  for (var i = 0; i < words.length - 1; i++) {
    url += words[i] + "%20";
  }
  /* ES5 without the for loop:
  value.split('').forEach(function(c) {
    if (c === ' ' && x < value.length()) url += "%20";
    else url += c;
  });
  /*
    for (var x = 0, c = ''; c = value.charAt(x); x++) {
      if (c === ' ' && x < value.length()) url += "%20";
      else url += c;
    }*/

  //url += value + ",US&units=imperial" + "&APPID=b6c571c291843e432896b1253964c651";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2>Breakdown for: ' + value + "</h2>";
      results += "<p>Calories: " + json.calories + " calories</p>";
      results += "<p>Fats: " + json.totalNutrients.FAT.quantity + " g</p>";
      results += "<p>Carbs: " + json.totalNutrients.CHOCDF.quantity + " g</p>";
      results += "<p>Fiber: " + json.totalNutrients.FIBTG.quantity + " g</p>";
      results += "<p>Sugars: " + json.totalNutrients.SUGAR.quantity + " g</p>";
      results += "<p>Total Weight: " + json.totalWeight + " g</p>";
      results += "<p>Diet Labels: ";
      for (let i = 0; i < json.dietLabels.length; i++) {
        results += json.dietLabels[i];
        if (i !== json.dietLabels.length - 1) results += ", ";
      }
      if (json.dietLabels.length === 0) results += "None";
      results += "</p>";
      results += "<p>Health Labels: ";
      for (let i = 0; i < json.healthLabels.length; i++) {
        results += json.healthLabels[i];
        if (i !== json.healthLabels.length - 1) results += ", ";
      }
      if (json.healthLabels.length === 0) results += "None";
      results += "</p>";

      document.getElementById("nutritionResults").innerHTML = results;
    });
});

document.getElementById("recipeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;
  console.log(value);

  var ingr = value.replace(/\r/g, "").split(/\n/);
  var results = [];
  var indivString = "";

  for( var i = 0; i < ingr.length; ++i ) {
    var check = ingr[i].match(/\n/);

    if( !check ) {
        indivString += ingr[i];
    }
    else {
      results.push(indivString);
      indivString = "";
    }
}

  fetch("https://zestful.p.rapidapi.com/parseIngredients", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-rapidapi-key": "cd69223c42msh0df29fa5851872cp1bb4c4jsn15a80059575b",
        "x-rapidapi-host": "zestful.p.rapidapi.com"
      },
      "body": {
        "ingredients": results
      }
    })
    .then(response => {
      return response.json();
    }) .then(function(json) {
      let results = "";
      results += "<h2>Ingredient breakdown for your recipe...</h2>";

      for (let i = 0; i < json.results.length; i++) {
        results += "<p>" + json.results[i] + "</p>";
      }

      document.getElementById("recipeResults").innerHTML = results;
    });
});
