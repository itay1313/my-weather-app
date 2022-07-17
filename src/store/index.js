import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex, VueCookies)

export default new Vuex.Store({
  state: {
    location: {
      locationKey: $cookies.get("locationKey") ? $cookies.get("locationKey") : null,
      locationName: $cookies.get("locationName") ? $cookies.get("locationName") : null,
      latitude: null,
      longitude: null,
      search: false
    },
    user: {
      ipAddress: null
    },
    notification: {
      error: false,
      succ: false,
      msg: ""
    },
    api: {
      // apiKey: "MOHzrpD1ntPcR6iPxXp9UUOXGPd9m8ee",
      // apiKey: "aePP6ikUk45AOaVMrkptmgejFOJZVAz6",
      apiKey: "KU3bZYXMH1YkodB7fo505DYOl8qApmvR",
      lang: "en-en"
    },
    weather: {
      hourData: null,
      fiveDayData: null
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
