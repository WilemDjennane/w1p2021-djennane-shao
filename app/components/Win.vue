<template>
  <div class="win">
    <img src="/assets/images/win.jpg" alt class="win__image">
    <audio src="/assets/audios/win.mp3" autoplay></audio>
    <h1 class="win__title">Tu as gagné</h1>
    <div class="win__content">
      <p
        class="win__text"
      >Félicitation vous avez vaincu le gardien et vous remportez la relique qui est enfaite excalibur</p>
      <router-link to="/home" class="win__link">
        <span @click="reset">Rejouer</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      reset() {
        localStorage.setItem("step", 1);
        localStorage.removeItem("death");
        localStorage.removeItem("recover");
      }
    };
  }
};
</script>
