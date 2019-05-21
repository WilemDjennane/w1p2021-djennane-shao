<template>
  <div class="lose">
    <h1 class="lose__title">Vous êtes mort !</h1>
    <div class="lose__text">
      <p>{{death}}</p>
      <p>Vous verriez mieux la prochaine fois !</p>
    </div>
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
