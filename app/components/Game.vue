<template>
  <div class="game">
    <!-- <img :src="step.background" :alt="step.background" class="game__image"> -->
    <img :src="step.image" :alt="step.background" class="game__image">
    <audio src="/assets/audios/game.mp3" autoplay loop></audio>
    <!-- <transition-group> -->
    <!-- <img src="/assets/images/background.jpg" :alt="step.background" class="game__image"> -->
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
          <span @click="countStep, getGirl">{{action.label}}</span>
        </router-link>
      </div>
    </div>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import data from "../data";
import stepCountService from "../services/stepCountService";
import deathService from "../services/deathService";
import girlService from "../services/girlService";

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
    getGirl() {
      const deathStep = data.steps.find(
        s => s.id === parseInt(this.$route.params.id)
      );
      if (deathStep.recover) {
        console.log("dfdsfd");
        localStorage.setItem("recover", true);
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
      this.getGirl();
      this.getDeath();
    }
  }
};
</script>
