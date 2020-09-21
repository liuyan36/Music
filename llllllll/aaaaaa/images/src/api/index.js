import ajax from './ajax'

// // const BASE_URL = 'http://localhost:4000'
// const BASE_URL = '/api'

export const reqShopAcg = () => ajax('/acg')
export const reqShopImgs = () => ajax('/imgs')
export const reqShopScenery = () => ajax('/scenery')
export const reqShopAnime = () => ajax('/anime')
