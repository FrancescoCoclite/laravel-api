require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import App from './views/App';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
   el: '#root',
   render: h => h(App)
});
