<template>
  <div class="home">
    <audio src="/assets/audios/home.mp3" autoplay loop></audio>
    <h1 class="home__text">{{ message }}</h1>
    <router-link class="home__link" to="/character">Votre héro</router-link>
    <router-link class="home__link" :to="'/game/'+go">Jouer</router-link>
  </div>
</template>

<script>
const step = JSON.parse(localStorage.getItem("step"));
const character = localStorage.getItem("character");

if (!step) localStorage.setItem("step", 1);
if (!character) localStorage.setItem("character", "Chevalier");

import stepCountService from "../services/stepCountService";
import characterService from "../services/characterService";
export default {
  data() {
    return {
      message: "Welcome to the dungeon",
      go: stepCountService.value()
    };
  }
};
</script>
