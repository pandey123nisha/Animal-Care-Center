import Vue from 'vue'
import Vuex from 'vuex'
import * as doctor from './module/doctor_module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doctor
  },
})
