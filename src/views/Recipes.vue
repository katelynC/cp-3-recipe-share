<template>
  <div class="body">
    <h2>Exploring New Recipes...</h2>
    <p>Click on each picture to take you to its own website (eventually, to an automated version of the recipe on THIS website, or to
      that website but with an extension that lets you add that recipe to this website, or tag it in your cookbook or something!)</p>
  </div>

  <!--<div class="masonry">
    <a v-for="recipe in recipes"
  </div>-->
</template>
  <!-- Masonry of Recipe Images -->
  <!--<div class="masonry">
  <div class="item"><a href="https://www.eatthis.com/pumpkin-pad-thai-recipe/"><img src="/images/food1.jpg" /></a>
    <p class="item-text">Pumpkin Pad Thai</p></div>
  <div class="item"><a href="https://www.bbcgoodfood.com/recipes/chorizo-mozzarella-gnocchi-bake"><img src="/images/food2.jpg" /></a>
    <p class="item-text">Chorizo & Mozzarella Gnocchi Bake</p></div>
  <div class="item"><a href="https://www.tasteandtellblog.com/cookbook-of-the-month-review-may-2008/">
    <img src="/images/food11.jpg" /></a><p class="item-text">Tropical Smoothie Recipe</p></div>
  <div class="item"><a href="https://www.loveandlemons.com/pantry-recipes/"><img src="/images/food3.jpg" /></a>
    <p class="item-text">(Healthy) Curried Tomato Lentil Soup</p></div>
  <div class="item"><a href="https://www.tasteofhome.com/recipes/easy-four-layer-chocolate-dessert/">
    <img src="/images/food8.jpg" /></a><p class="item-text">Easy Four-Layer Chocolate Dessert</p></div>
  <div class="item"><a href="https://www.landolakes.com/recipe/17244/caramel-topped-ice-cream-dessert/">
    <img src="/images/food10.jpg" /></a><p class="item-text">Caramel Topped Ice Cream Dessert</p></div>
  <div class="item"><a href="https://www.allrecipes.com/recipe/281402/creamy-instant-pot-bacon-macaroni-and-cheese/">
    <img src="/images/mac.jpg" /></a><p class="item-text">Creamy Instant Pot Bacon Mac 'n Cheese</p></a></div>

  <div class="item"><a href="https://www.popsugar.com/family/photo-gallery/25606166/image/47208878/Tex-Mex-Egg-Cheese-Cauliflower-Casserole">
    <img src="/images/food6.jpg" /></a><p class="item-text">Tex-Mex Cheese & Cauliflower Casserole</p></div>
  <div class="item"><a href="https://www.loveandlemons.com/vegan-desserts/"><img src="/images/food9.jpg" /></a>
    <p class="item-text">(Vegan) Peanut Butter Cookie Bars</p></div>
  <div class="item"><a href="https://www.bbcgoodfood.com/recipes/collection/student-recipes">
    <img src="/images/food7.jpg" /></a><p class="item-text">(Student Recipes) Veg & Rice</p></div>
  <div class="item"><a href="https://www.bbcgoodfood.com/recipes/collection/pasta-recipes"><img src="/images/food4.jpg" /></a>
    <p class="item-text">The Best Pasta!</p></div>
</div>-->

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
    max-width: 1100px;
    /* Changed from max-width: 768px */
    column-gap: 1.5em;
    padding: 0 0 50px 0;
  }

  /* The Masonry Brick */
  .item {
    background: #fff;
    /* changed from background: #E9E9E9 = light grey?? */
    padding: 1em;
    /*margin: 0 0 1.5em;*/
  }

  .item-text {
    text-align: center;
    font-size: 1em;
    /* Does this change much?! */
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

  .navbar-dark .navbar-nav .nav-link:focus,
  .navbar-dark .navbar-nav .nav-link:hover {
    color: #333;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: #fff;
  }

  .footer {
    clear: both;
    overflow: hidden;
    background-color: #FFFFFF;
    /* Light blue = #D9E9FE */
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
    background-color: #eee;
    /* Darker blue = B2D6FF, lighter blue = D9E9FE, change to light grey =  */
  }

  .username {
    margin-top: 30px;
  }

  .masonry {
    /* Masonry container */
    column-count: 4;
    column-gap: 1em;
  }

  .item {
    /* Masonry bricks or child elements */
    background-color: #eee;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
  }

  .comment {
    margin: 15px;
    overflow: hidden;
    /* Makes sure that the text "horizontally cleared" with a constant left-align and the floated image. BREAKS magazine-style layout usefully. */
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
