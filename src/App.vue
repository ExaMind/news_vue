<template>
<div>
  <nav class="blue-grey" role="navigation">
    <div class="nav-wrapper container">

      <a id="logo-container" href="#" class="brand-logo"><i class="material-icons">public</i>Top Stories</a>

    </div>
  </nav>

  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text">Search News!</h1>

      <div class="row center">

        <app-search></app-search>
      </div>
      <br><br>

    </div>
  </div>


  <div class="container">

    <app-news></app-news>
    <br><br>
  </div>

  <footer class="page-footer orange">
    <div class="footer-copyright black">
      <div class="container">
        Powered by <a class="orange-text" href="https://newsapi.org/">News API</a>
      </div>
    </div>
  </footer>


  <main>
    <router-view/>
  </main>

</div>


</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
