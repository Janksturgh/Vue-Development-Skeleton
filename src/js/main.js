import 'core-js/stable';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAxios from 'vue-axios';
const axios = require('axios').default;

const app = new Vue({
	el: '#app',
	router,
	components: {
		App,
		VueAxios
	},
	data() {
		return {
			data: null,
		};
	},
	mounted() {
	  axios.request({
            url: '/book',
            method: 'get',
            baseURL: 'https://the-one-api.dev/v2/'
          })
		  .then(response => (this.data = response))
	},
});

Vue.use(VueAxios, axios)
