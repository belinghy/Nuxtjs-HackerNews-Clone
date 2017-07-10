import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  counter: 0,
  activeType: null,
  itemsPerPage: 20,
  items: {/* [id: number]: Item */},
  users: {/* [id: string]: User */},
  lists: {
    top: [/* number */],
    new: [],
    show: [],
    ask: [],
    job: []
  }
}

const store = () => new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
