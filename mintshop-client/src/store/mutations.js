/*
vuex 的 mutations 模块
*/
import * as mutationsTypes from './mutations-types'

// [方法名](state,{param}){}
export default {
  [mutationsTypes.RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [mutationsTypes.RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys
  },
  [mutationsTypes.RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops
  },
}
