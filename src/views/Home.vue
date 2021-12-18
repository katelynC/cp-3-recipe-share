<template>
  <div class="body">
    <h2>Welcome to Recipe Share!</h2>
    <p>This is a website where you can explore new recipes, save recipes through pictures or off of other websites online, store your
      favorite recipes in a cookbook, and share your favorite recipes with family or friends. View your favorite recipes under the
      "Cookbook" tab; use the "Calendar" tab to see your scheduled meal planning for the week; browse the "Explore Recipes" tab
      to see others' recommendations for you and to browse other recipes; or see the ingredients and/or nutrition analysis of a recipe
      under the "Recipe Analysis" tab!</p>
    <br>

    <br />
    <div id="app2">
      <h3>Website Reviews</h3>
      <div v-for="review in reviews" :key="review.id">
        <hr>
        <p>{{review.text}}</p>
        <p><i>- {{review.name}}</i></p>
        <div v-if="review.isMine"><button type="submit" v-on:click="deleteReview(review)">Delete</button></div>
      </div>
      <br />
      <h3>Add a Review</h3>
      <p>Your honest review could instantly help others find and share new and favorite recipes!</p>
      <hr>
      <div class="format">
        <form v-on:submit.prevent="addComment">
          <input class="in" v-model="addedName" placeholder="Name" />
          <textarea v-model="addedComment" placeholder="I love this website because..."></textarea>
          <br />
          <button type="submit">Share</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        addedName: '',
        addedComment: '',
        review: {},
      }
    },
    computed: {
      reviews() {
        return this.$root.$data.reviews; // Declared inside of main.js
      }
    },
    methods: {
      addComment() {
        if (this.$root.$data.reviews.length === 0) {
          this.$root.$data.reviews = new Array;
        }

        this.$root.$data.reviews.push({
          id: this.$root.$data.reviews.length,
          name: this.addedName,
          text: this.addedComment,
          isMine: true,
        });
        this.addedName = '';
        this.addedComment = '';
      },
      deleteReview(review) {
        const index = this.$root.$data.reviews.indexOf(review);
        if (index > -1) {
          this.$root.$data.reviews.splice(index, 1);
        }
      }
    },
  }
</script>

<style>
  @import "https://fonts.googleapis.com/css?family=Montserrat:400,700"

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

  button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    padding-left: 3px;
    padding-right: 3px;
  }

  textarea {
    width: 100%;
    max-width: 500px;
    height: 100px;
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
    color: #414141;
    padding: 50px auto;
  }

  .in,
  textarea {
    padding: 5px;
    margin: 10px;
  }

  button {
    margin: 10px;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  .format {
    float: none;
    display: inline-block;
    vertical-align: top;
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
