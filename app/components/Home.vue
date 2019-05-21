<template>
  <div class="home">
    <audio src="/assets/audios/home.mp3" autoplay loop></audio>
    <h1 class="home__text">{{ message }}</h1>
    <router-link class="home__link" to="/characters">Votre héro</router-link>
    <router-link class="home__link" :to="'/game/'+go">Jouer</router-link>
  </div>
</template>

<script>
import stepCountService from "../services/stepCountService";
import charactersService from "../services/charactersService";
export default {
  data() {
    return {
      message: "Welcome to the dungeon",
      go: stepCountService.value()
    };
  }
};
</script>
