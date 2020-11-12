// Action:通过操作mutation间接更新state的多个方法的对象
// 注意要引入api接口函数
import * as mutationsTypes from './mutations-types'
import * as api from '@/api'

export default {
  // 异步获取地址
  async getAddress({ commit, state }) {
    // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
    const geohash = state.latitude + ',' + state.longitude

    // 1. 发送异步ajax请求
    const result = await api.reqAddress(geohash)
    // 2. 根据结果提交一个mutation
    commit(mutationsTypes.RECEIVE_ADDRESS, { address: result.data })
  },

  // 异步获取分类列表
  async getCategorys({ commit }) {
    const result = await api.reqCategorys()
    commit(mutationsTypes.RECEIVE_CATEGORYS, { categorys: result.data })
  },

  // 异步获取商家列表
  async getShops({ commit, state }) {
    // 对象的解构赋值
    const { latitude, longitude } = state
    // 注意参数的顺序
    const result = await api.reqShops({ latitude, longitude })
    commit(mutationsTypes.RECEIVE_SHOPS, { shops: result.data })
  },
}
