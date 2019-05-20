<template>
  <div class="lose">
    <h1 class="lose__title">Vous êtes mort !</h1>
    <p class="lose__description">{{death}}</p>
    <router-link to="/game/1" class="lose__link">
      <span @click="reset">Rejouer</span>
    </router-link>
  </div>
</template>
<script>
import deathService from "../services/deathService";
export default {
  data: function() {
    return {
      death: deathService.value(),
      reset() {
        localStorage.removeItem("step");
        localStorage.removeItem("death");
        localStorage.removeItem("recover");
      }
    };
  }
};
</script>
