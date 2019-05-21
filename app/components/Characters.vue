<template>
  <div class="characters">
    <ul class="characters__list">
      <li
        v-for="character in characters"
        :key="character.value"
        @click="chooseCharacter(character.name)"
        class="characters__item"
      >
        <img :src="character.image" alt>
        <p class="characters__name">{{character.name}}</p>
        <span class="characters__description">{{character.description}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import json from "../data";
import characterService from "../services/charactersService";

export default {
  data: function() {
    return {
      characters: json.characters
    };
  },
  methods: {
    chooseCharacter(name) {
      characterService.character(name);
    }
  }
};
</script>
