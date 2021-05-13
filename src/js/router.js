// Routes are currently hardcoded - when wanting to add a new route create the new view in the views directory and then add it to the menu
// If using this project for component only use please ignore routing

import Router from "vue-router";
import Vue from 'vue';
import Home from "./views/Home.vue";

Vue.use(Router);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
];

const router = new Router({
	routes,
	mode: 'hash',
});

export default router;
