import axios from "../utils/http"
import base from "./base"

const api = {
    login(params){
        /**
         * axios.post(url,{username:'',password:''})
         */
        return axios.post(base.baseUrl + base.login,params);
    }
}

export default api