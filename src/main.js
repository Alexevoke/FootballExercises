import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ExerciseTable from './components/ExerciseTable.vue'

const app = createApp(App)

app.use(router)
app.component(ExerciseTable)

app.mount('#app')
