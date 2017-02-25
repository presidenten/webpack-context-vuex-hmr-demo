<script>
  import { mapGetters, mapActions } from 'vuex';
  import example from './example-store.js';

  export default {
    name: 'example',
    computed: {
      ...mapGetters({
        something: example.api.get.something,
        theThing: example.api.get.theThing,
      }),
    },
    methods: {
      ...mapActions({
        doSomething: example.api.act.doSomething,
      }),
    },
  };
</script>

<template>
  <div class="example box">
    <div class="value" >
      <p>Value from store:</p>
      <p>{{something}}</p>
    </div>

    <div class="value" >
      <p>Value from substore:<p>
      <p>{{theThing}}</p>
    </div>

    <button @click="doSomething">Push me</button>
  </div>
</template>

<style scoped>
  .box {
    border-radius: 4px;
    box-shadow: 8px 8px 16px #ccc;
    background-color: #eee;
  }

  .example {
    width: 250px;
    height: 180px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;;
    align-items: center;
    font-size: 16px;
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: #555;
    border: 1px solid #888;
    border-bottom: 3px solid #888;
    border-radius: 3px;
    background-color: #bdffbd;
    outline: none;
    margin-top: 15px;
  }

  button:active {
    background: linear-gradient(to bottom, #62d162 20%, #bdffbd);
    border-top: 3px solid #888;
    border-bottom: 1px solid #888;
  }

  .value {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
  }

  p {
    padding: 5px;
    display: inline-block;
    margin: 0;
  }
</style>
