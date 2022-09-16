import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faCartShopping, faFileLines, faCheck, faGear, faDesktop, faBook, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faUser, faEye, faCalendar, faFlag, faLifeRing } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faLinkedin, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faCartShopping, faUser, faSquareFacebook, faTwitter, faInstagram, faLinkedin, faFileLines, faEye, faCalendar, 
  faCheck, faFlag, faGear, faLifeRing, faDesktop, faBook, faPlay)





/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
