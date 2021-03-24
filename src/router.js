import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Patients from './views/Patients.vue';
import Medicines from './views/Medicines.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/patients', component: Patients },
    { path: '/medicines', component: Medicines },
  ],
});

export default router;
