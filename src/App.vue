<template>
<base-container title="Vuex" v-if="isAuth"> 
  <the-counter></the-counter>
  <favorite-value></favorite-value>
  <button @click="addOne">Add 10</button>
  <change-counter></change-counter>
</base-container>
<base-container title="Auth">
  <user-auth></user-auth>
</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components:{
    BaseContainer,
        ChangeCounter,
    TheCounter,
    FavoriteValue,
    UserAuth
    },
    computed:{
        isAuth(){
            return this.$store.getters.userIsAuth;
        }
    },
  methods:{
    addOne(){
      this.$store.dispatch('numbers/increase',{value:10});
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

