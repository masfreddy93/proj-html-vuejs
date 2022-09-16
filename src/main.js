import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faCartShopping, faFileLines, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faUser, faEye, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faLinkedin, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faCartShopping, faUser, faSquareFacebook, faTwitter, faInstagram, faLinkedin, faFileLines, faEye, faCalendar, faCheck)





/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
