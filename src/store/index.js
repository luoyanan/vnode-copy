import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isShowMenu : false
	},
	mutations: {
		showMenu (state) {
			state.isShowMenu = true
		},
		hideMenu (state) {
			state.isShowMenu = false
		}
	},
	getters :{

	},
	actions: {

	}
})

export default store