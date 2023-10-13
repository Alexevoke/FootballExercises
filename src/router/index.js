import { createRouter, createWebHistory } from 'vue-router'
import Exercises from '../views/ExercisesView.vue'
import Home from '../views/HomeView.vue'
import Exercise from '../views/ExerciseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/exercises', name: 'exercises', component: Exercises},
    {path: '/exercise/:id', name: 'exercise', component: Exercise, props: true }
  ]
})

export default router
