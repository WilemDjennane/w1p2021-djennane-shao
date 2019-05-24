<template>
  <div class="characters">
    <ul class="characters__list">
      <li
        v-for="character in characters"
        :key="character.value"
        @click="chooseCharacter(character.name)"
        class="characters__item"
      >
        <router-link to="/game/1">
          <img :src="character.image" alt>
          <p class="characters__name">{{character.name}}</p>
          <span class="characters__description">{{character.description}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import data from "../data";
import characterService from "../services/characterService";

export default {
  data: function() {
    return {
      characters: data.characters
    };
  },
  methods: {
    chooseCharacter(name) {
      characterService.characterSelect(name);
    }
  }
};
</script>
