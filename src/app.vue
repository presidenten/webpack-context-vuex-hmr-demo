<script>
  import example from './components/example-component/example-view.vue';

  export default {
    name: 'app',
    components: {
      example,
    },
  };
</script>

<template>
  <div id="app">
    <example></example>
    <div></div>
  </div>
</template>

<style>
  html, body {
    height: 100%;
    color: #444;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
