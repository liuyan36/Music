/*
Action:通过操作mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ACG,
  RECEIVE_IMGS,
  RECEIVE_SCENERY,
  RECEIVE_ANIME
} from './mutation-types'

import {
  reqShopAcg,
  reqShopImgs,
  reqShopScenery,
  reqShopAnime
} from '../api'

export default {
  async getShopAcg ({commit}, callback) {
    const result = await reqShopAcg()
    if (result.code === 0) {
      const acg = result.data
      commit(RECEIVE_ACG, {acg})
      // 数据更新了，通知组件
      callback && callback()
    }
  },
  async getShopImgs ({commit}, callback) {
    const result = await reqShopImgs()
    if (result.code === 0) {
      const imgs = result.data
      commit(RECEIVE_IMGS, {imgs})
      // 数据更新了，通知组件
      callback && callback()
    }
  },
  async getShopScenery ({commit}, callback) {
    const result = await reqShopScenery()
    if (result.code === 0) {
      const scenery = result.data
      commit(RECEIVE_SCENERY, {scenery})
      // 数据更新了，通知组件
      callback && callback()
    }
  },
  async getShopAnime ({commit}, callback) {
    const result = await reqShopAnime()
    if (result.code === 0) {
      const anime = result.data
      commit( RECEIVE_ANIME, {anime})
      // 数据更新了，通知组件
      callback && callback()
    }
  }
}
