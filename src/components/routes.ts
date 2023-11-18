import HomePage from "../pages/HomePage.vue";
import TeamPage from "../pages/TeamPage.vue";
import PrivatePage from "../pages/PrivatePage.vue";
import SearchPage from "../pages/SearchPage.vue";

export const routes = [
  { path: '/', component: HomePage },
  { path: '/team', component: TeamPage },
  { path: '/private', component: PrivatePage },
  { path: '/search', name:'search', component: SearchPage },
]


