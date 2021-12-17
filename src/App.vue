<template>
  <div id="app">
    <!--<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/styles.css" />
    <title>Home Page</title>

    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
  </head>-->

    <body>
      <div class="title-pic"><img src="../public/images/C1 recipe share title.jpg" /></div>

      <nav class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color: #C1E9FF">
        <!-- Changed from:background-color: #B7E0FC  -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link">
                <router-link to="/">Home</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/healthAnalysis">Health Analysis</router-link>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div class="content">
        <router-view />
      </div>

      <!--<li class="nav-item">
      <a class="nav-link"><router-link :to="/pages/my-cookbook.html">Cookbook</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/pages/calendar.html">Calendar</a>
    </li>
    <li class="nav-item">
      <a class="nav-link"><router-link :to="/recipes">Explore Recipes</router-link></a>
    </li>-->
      <!--<li class="nav-item">
      <a class="nav-link" href="/pages/recipe-analysis.html">Recipe Analysis</a>
    </li>-->
      <!--<div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/my-cookbook.html">Cookbook</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/calendar.html">Calendar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/recipes.html">Explore Recipes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/health-analysis.html">Health Analysis</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/recipe-analysis.html">Recipe Analysis</a>
          </li>
        </ul>
      </div>-->

    <!-- Footer -->
    <footer class="bg-dark text-center text-lg-start" style="background-color: #35779E;">
      <!-- Dark blue footer -->
      <div class="text-center text-white p-3" style="background-color: #35779E;">
        © 2021 Private Link:
        <a class="text-white" href="https://github.com/katelynC/cp-3-recipe-share/">GitHub.com</a>
      </div>
    </footer>

      <!-- ADD THIS BACK  IN!!
    <script type="text/JavaScript" src="https://MomentJS.com/downloads/moment.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="./comment-script.js"></script>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> -->

    </body>
  </div>
</template>

<style>
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css';

  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 20px;
    color: #414141;
    padding: 50px auto;
  }

  .jumbotron {
    margin: 0;
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
  }

  h1 {
    padding: 50px auto;
    text-align: center;
  }

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
</style>
