/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回图片接口
Mock.mock('/acg', {code: 0, data: data.acg}) // 最初
Mock.mock('/imgs', {code: 0, data: data.imgs}) //第一次
Mock.mock('/scenery', {code: 0, data: data.scenery}) // 风景
Mock.mock('/anime', {code: 0, data: data.anime}) // 动画

// export default ??? 不需要暴露任何东西，只需要能保证执行一次就可

