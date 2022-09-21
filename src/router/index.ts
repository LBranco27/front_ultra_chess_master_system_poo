import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
import ChessPage from "../components/ChessPage.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
	    path: "/chess/",
	    name: "chess",
	    component: ChessPage,
    },
  ],
});

export default router;
