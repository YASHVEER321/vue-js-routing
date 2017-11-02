<template>
  <div id="app">
  <h1>Vue Js Application</h1>
<div>
<router-link to="/">Go to first component</router-link>
    <router-link to="/comp2">Go to second component</router-link>
  <router-view></router-view>

</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
template{
  background-color: red;
}

</style>
