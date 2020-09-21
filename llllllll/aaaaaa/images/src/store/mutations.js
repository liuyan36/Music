/*
直接更新state的多个方法的对象
*/
import Vue from 'vue'

import {
  RECEIVE_ACG,
  RECEIVE_IMGS,
  RECEIVE_SCENERY,
  RECEIVE_ANIME
} from './mutation-types'

export default {
  [RECEIVE_ACG] (state, {acg}) {
    state.acg = acg
  },
  [RECEIVE_IMGS] (state, {imgs}) {
    state.imgs = imgs
  },
  [RECEIVE_SCENERY] (state, {scenery}) {
    state.scenery = scenery
  },
  [RECEIVE_ANIME] (state, {anime}) {
    state.anime = anime
  }
}

