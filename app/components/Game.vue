<template>
  <div class="game">
    <h1 class="game__title">{{step.title}}</h1>
    <router-link
      class="game__link"
      v-for="action in step.actions"
      :key="action.value"
      :to="action.to.toString()"
    >{{action.label}}</router-link>
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
