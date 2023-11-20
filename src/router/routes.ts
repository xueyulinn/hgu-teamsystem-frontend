import HomePage from "../pages/HomePage.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";

export const routes = [
    {path: '/', component: HomePage},
    {path: '/team', component: TeamPage},
    {path: '/user', component: UserPage},
    {path: '/search', name: 'search', component: SearchPage},
    {path: '/user/edit', title: '编辑信息', component: UserEditPage},
    {path: '/user/update', title: '更新信息', component: UserUpdatePage},
    {path: '/user/list', title: '搜索结果', component: SearchResultPage},

]


