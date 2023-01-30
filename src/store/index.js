import Vue from 'vue'
import Vuex from 'vuex'
import * as doctor from './module/doctor'
import * as company from './module/company'
import * as service from './module/service'
import * as about from './module/about'
import * as carousel from './module/carousel'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    doctor,
    company,
    service,
    about,
    carousel
  },
})
