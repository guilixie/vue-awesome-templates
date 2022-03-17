import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0
	},
	getters: {
		count(state) {
			return state.count
		}
	},
	mutations: {
		addCount(state, num) {
			state.count += num
		}
	},
	actions: {}
})

export default store