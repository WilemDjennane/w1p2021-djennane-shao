<template>
  <div class="home">
    <audio src="/assets/audios/home.mp3" autoplay loop></audio>
    <h1 class="home__text">{{ message }}</h1>
    <router-link class="home__link" to="/page">Jouer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome to the dungeon"
    };
  }
};
</script>
