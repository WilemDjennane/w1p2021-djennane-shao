import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';

new Vue({ router: router }).$mount('#root');

// localStorage.setItem('muted', false);
// const muteOpt = document.querySelector('.mute');
// const audio = document.querySelector('audio');

// muteOpt.addEventListener('click', () => {
//   const muted = JSON.parse(localStorage.getItem('muted'));
//   if (muted == false) {
//     audio.play();
//     setTimeout(() => {
//       localStorage.setItem('muted', true);
//     }, 300);
//   } else {
//     audio.pause();
//     setTimeout(() => {
//       localStorage.setItem('muted', false);
//     }, 300);
//   }
// });
