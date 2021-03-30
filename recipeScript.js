// Added this stuff below??
var el = document.getElementById('overlayBtn');
if (el) {
  el.addEventListener('click', swapper, false);
}

document.getElementById("recipeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;
  console.log(value);

  var ingr = value.replace(/\r/g, "").split(/\n/);
  var res = [];
  var indivString = "";

  for (var i = 0; i < ingr.length; ++i) {
    if (ingr[i] !== "") {
      res.push(ingr[i]);
    }
  }

  //const url = "https://zestful.p.rapidapi.com/parseIngredients";
  fetch("https://zestful.p.rapidapi.com/parseIngredients", {
  	"method": "POST",
  	"headers": {
  		"content-type": "application/json",
  		"x-rapidapi-key": "cd69223c42msh0df29fa5851872cp1bb4c4jsn15a80059575b",
  		"x-rapidapi-host": "zestful.p.rapidapi.com"
  	},
  	"body": {
  		"ingredients": [
  			"2 1/2 tablespoons finely chopped parsley",
  			"3 tablespoons extra-virgin olive oil, or more to taste",
  			"1 1/2 tbsp cinnamon"
  		]
  	}
  })
  .then(response => {
  	console.log(response);
  })
  .catch(err => {
  	console.error(err);
  });
  /*
  fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": "cd69223c42msh0df29fa5851872cp1bb4c4jsn15a80059575b",
        "x-rapidapi-host": "zestful.p.rapidapi.com"
      },
      body: {
        "ingredients": res
      }
    })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += "<h2>Ingredient breakdown for your recipe...</h2>";

      for (let i = 0; i < json.results.length; i++) {
        results += "<p>" + json.results[i].ingredientParsed.product + "</p>";
      }

      document.getElementById("recipeResults").innerHTML = results;
    });*/
});
