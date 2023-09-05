<template>
  <h1>Counter</h1>
  <!-- <h3>{{ $store.state.counter }}</h3> -->
  <the-counter></the-counter>
  <favorite-value></favorite-value>
  <button @click="addOne">Add 10</button>
  <change-counter></change-counter>
</template>

<script>
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components:{
        ChangeCounter,
    TheCounter,
    FavoriteValue
    },
  methods:{
    addOne(){
      this.$store.commit('increase',{value:10});
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

