<template>
<div>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">News</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="">Get News</a></li>
      </ul>
    </div>
  </nav>


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
  .nav-wrapper {
    background-color: #00ced1;
    font-size: 14px;
    font-weight: bold;
  }
</style>
