<template>
  <div class="game">
    <!-- <img :src="'/assets/images/' + step.background" :alt="step.background" class="game__image"> -->
    <img src="/assets/images/background.jpg" :alt="step.background" class="game__image">
    <audio src="/assets/audios/game.mp3" autoplay loop></audio>
    <h1 class="game__title">{{step.title}}</h1>
    <div class="game__content">
      <p class="game__description">{{step.description}}</p>
      <div class="game__list">
        <router-link
          class="game__link"
          v-for="action in step.actions"
          :key="action.value"
          :to="action.to.toString()"
        >{{action.label}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../data.json";

export default {
  data: function() {
    return {
      step: json.steps.find(s => s.id === parseInt(this.$route.params.id))
    };
  },
  mounted: function() {},
  methods: {
    getStep() {
      return json.steps.find(s => s.id === parseInt(this.$route.params.id));
    }
  },
  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
    }
  }
};
</script>
