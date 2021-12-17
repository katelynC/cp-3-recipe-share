<template>
  <div class="body">
    <h2>Ingredient Health Analysis</h2>
    <p>Discover the nutrition break-down for individual ingredients.</p>
<hr>
    <h4>Example Recipe: <a href="https://www.landolakes.com/recipe/17244/caramel-topped-ice-cream-dessert/">Easy Four-Layer
        Chocolate Dessert</a></h4>
        <p>Recipe Ingredients...</p>
        <ul class="theList">
          <li>
            <p>2 cups (about 16) finely crushed shortbread cookies</p>
          </li>
          <li>
            <p>1/4 cup cashews, finely chopped</p>
          </li>
          <li>
            <p>1/3 cup Land O Lakes® Butter, melted</p>
          </li>
          <li>
            <p>1 half gallon vanilla ice cream, softened</p>
          </li>
          <li>
            <p>1 cup semi-sweet chocolate chips</p>
          </li>
          <li>
            <p>1 1/2 cups powdered sugar</p>
          </li>
          <li>
            <p>1/2 cup Land O Lakes® Butter</p>
          </li>
          <li>
            <p>2 (5-ounce) cans evaporated milk</p>
          </li>
          <li>
            <p>1 teaspoon vanilla</p>
          </li>
          <li>
            <p>1 cup pretzel sticks, coarsely crushed</p>
          </li>
          <li>
            <p>1/2 cup cashews, coarsely chopped</p>
          </li>
          <li>
            <p>1 (12-ounce) jar caramel ice cream topping, warmed</p>
          </li>
        </ul>
        <br />

        <form>
          <label>
            <p>Enter food items below. (To test, copy items from above!)</p>
          </label> <br />
          <textarea id="ingredientInput" name="ingredients" rows="1" cols="60"></textarea> <br />
          <input id="ingredientSubmit" type="submit" value="Submit" />
          <div id="edamam-badge" data-color="white"></div>
        </form>

        <br />
        <div id="nutritionResults"></div>
  </div>
</template>

<script>
/*document.getElementById("ingredientSubmit").addEventListener("click", function(event) {
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
});*/
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Box-sizing reset: //w3bits.com/?p=3225 */
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

/* The Masonry Container */
.masonry {
  margin: 1.5em auto;
  max-width: 1100px;       /* Changed from max-width: 768px */
  column-gap: 1.5em;
  padding: 0 0 50px 0;
}

/* The Masonry Brick */
.item {
  background: #fff;    /* changed from background: #E9E9E9 = light grey?? */
  padding: 1em;
  /*margin: 0 0 1.5em;*/
}

.item-text {
  text-align: center;
  font-size: 1em; /* Does this change much?! */
  padding: 10px;
}

/*
.me-pic-container { /* Masonry bricks or child elements
  background-color: #eee;
  display: inline-block;
  margin: 0 0 1em;
  padding: 1em; /* ?
  /*width: 100%;
}
*/
/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .masonry {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .masonry {
    column-count: 2;
  }
}

body {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 20px;
  /* WHY is this not updating?! */
  color: #414141;
  padding: 50px auto;
}


.jumbotron {
  margin: 0;
  /*background-color: #eee; /* Changed from SUPEr ligght blue: EFF7FF*/
  background-image: url("/images/title.pic.JPG");
}

/* Edits words in Jumbotron at top of pages */
.display-4 .lead {
  color: white;
  text-align: right;
}

.title-pic {
  float: center;
  width: fill;
  /*height: 160px;*/
  /*display: inline-block;*/
}

h1 {
  padding: 50px auto;
  text-align: center;
}

/* WHY is this not updating?! */
p {
  font-family: verdana;
	font-size: 18px;
}

.body {
  padding: 35px;
}

.theList {
  padding: 0px 45px;
}

.ingredientSubmit .recipeSubmit {
  /*padding: 100px;*/
  color: #414141;
}

.edamam-badge {
  max-width: 15%;
  align: left;
}

.selector-for-some-widget {
  box-sizing: content-box;
}

img {
  width: 100%;
}
/* Image Grid */
.portfolio {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.image img {
  width: 100%;
}

.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
  color: #333;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.footer {
  clear: both;
  overflow: hidden;
  background-color: #FFFFFF;    /* Light blue = #D9E9FE */
  padding: 0 0 75px 0;
}

.avatar {
  float: left;
  width: 60px;
  height: 60px;
  margin: 25px;
  border-radius: 40px;
  background-color: #B2D6FF;
}

.column {
  float: left;
  width: 31%;
  margin: 20px 1.15%;
  height: 160px;
  background-color: #eee;  /* Darker blue = B2D6FF, lighter blue = D9E9FE, change to light grey =  */
}

.username {
  margin-top: 30px;
}

.masonry { /* Masonry container */
  column-count: 4;
  column-gap: 1em;
}

.item { /* Masonry bricks or child elements */
  background-color: #eee;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
}

.comment {
  margin: 15px;
  overflow: hidden;  /* Makes sure that the text "horizontally cleared" with a constant left-align and the floated image. BREAKS magazine-style layout usefully. */
  font-size: 13px;
}

.photo-grid-container {
  display: flex;
  justify-content: center;
}

.photo-grid {
  width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}

.photo-grid-item {
  border: 1px solid #fff;
  width: 300px;
  height: 300px;
}

</style>
