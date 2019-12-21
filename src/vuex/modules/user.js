import {reqAuto_login} from "../../api";

export default {
    state:{
        user:{},
        token: localStorage.getItem("token_key") || "",
    },
    mutations:{
        setUser(state,data){
            state.user = data
        },
        setToken(state,data){
            state.token = data
        }
    },
    actions:{
        async getUser({commit},user){
            localStorage.setItem("token_key",user.token)
            commit("setToken",user.token)

            delete user.token
            commit("setUser",user)
        },

        async autoLogin({commit,state}){
            if(state.token && !state.user._id){
                const result = await reqAuto_login()
                if(result.code === 0){
                    commit("setUser",result.data)
                }
            }
        },
        logout({commit}){
            localStorage.removeItem("token_key")
            commit("setUser",{})
        }
    },
    getters:{

    }
}