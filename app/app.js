import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';

new Vue({ router: router }).$mount('#root');

const audio = document.querySelector('audio');
audio.volume = 0.5;
