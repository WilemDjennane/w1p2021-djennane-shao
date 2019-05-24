<template>
  <div class="lose">
    <img src="/assets/images/lose.jpg" alt class="lose__image">
    <audio src="/assets/audios/lose.mp3" autoplay></audio>
    <h1 class="lose__title">Vous êtes mort !</h1>
    <div class="lose__text">
      <p>{{death}}</p>
      <p>Vous feriez mieux la prochaine fois !</p>
    </div>
    <router-link to="/home" class="lose__link">
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
        localStorage.setItem("step", 1);
        localStorage.removeItem("death");
        localStorage.removeItem("recover");
      }
    };
  }
};
</script>
