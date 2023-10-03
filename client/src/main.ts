import { createApp } from 'vue'
import App from './App.vue'
import WebApp from '@twa-dev/sdk'
import Router from '@/application/router'
import './presentation/styles/index.css'

/**
 * @todo Date Picker
 * @todo Home Screen design
 * @todo Settings Page
 * @todo "Back" segue transition
 * @todo Close confirmation
 * @todo Feedback on the hotel page
 * @todo cancel payment toast
 * @todo picture slider on Rooms page
 * @todo room page
 * @todo fill with more mock data
 * @todo refactor data access
 * @todo documentation
 * @todo share order
 * @todo test in all clients
 * @todo android design
 * @todo add "4 viewing right now" with 👀 animation
 * @todo check all border-radius consistency
 */

WebApp.ready()

const app = createApp(App)

app.use(Router)
app.mount('#app')