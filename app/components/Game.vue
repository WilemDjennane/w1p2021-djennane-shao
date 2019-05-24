<template>
  <div class="game" ref="game">
    <audio src="/assets/audios/game.mp3" autoplay loop></audio>
    <img :src="step.image" :alt="step.background" class="game__image">
    <h1 class="game__title">{{step.title}}</h1>
    <div class="game__content">
      <p class="game__description">{{step.description}}</p>
      <div class="game__list">
        <router-link
          class="game__link"
          v-for="action in step.actions"
          :key="action.value"
          :to="action.to.toString()"
        >
          <span @click="countStep, check">{{action.label}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data";
import stepCountService from "../services/stepCountService";
import deathService from "../services/deathService";

export default {
  data: function() {
    return {
      step: data.steps.find(s => s.id === parseInt(this.$route.params.id))
    };
  },
  methods: {
    getStep() {
      return data.steps.find(s => s.id === parseInt(this.$route.params.id));
    },
    countStep() {
      const stepCountNub = data.steps.find(
        s => s.id === parseInt(this.$route.params.id)
      );
      stepCountService.count(stepCountNub.id);
    },
    check() {
      this.$refs.game.classList.add("fade");

      setTimeout(() => {
        this.$refs.game.classList.remove("fade");
      }, 500);

      const step = data.steps.find(
        s => s.id === parseInt(this.$route.params.id)
      );
      if (step.id === 9) {
        localStorage.setItem("recover", true);
      }

      const girlCheck = JSON.parse(localStorage.getItem("recover"));

      if (step.id === 14 && girlCheck === true) {
        this.$router.push({ path: "/game/15" });
      }
    },
    getDeath() {
      const deathStep = data.steps.find(
        s => s.id === parseInt(this.$route.params.id)
      );
      deathService.deathName(deathStep.death);
    }
  },
  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
      this.countStep();
      this.getDeath();
      this.check();
    }
  }
};
</script>
