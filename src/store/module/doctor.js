
import axiosApi from "@/config/config";

 export const state = {
    doctors : []
}
 export const getters = {
    get_doctors : (state)=>state.doctors
}
 export const mutations = {
    set_doctors :(state,data) => state.doctors = data
}
 export const actions = {
    async fetchDoctor({commit}){
        try{
            var response = await axiosApi.get("doctors")
        if(response.status==200){
            console.warn(response.data)
            commit('set_doctors',response.data.data)
        }
        } catch(e){
            console.warn(e)
        }
    }
}
