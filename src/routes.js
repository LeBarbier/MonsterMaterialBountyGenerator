import home from './components/Home.vue';
import monsters from './components/Monsters.vue';
import wantedList from './components/WantedList.vue';

export const routes = [
    { path: '/', component: home },
    { path: '/Monsters', component: monsters },
    { path: '/WantedList', component: wantedList }
];