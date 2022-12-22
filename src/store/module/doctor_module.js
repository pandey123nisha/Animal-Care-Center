
import axios from "axios";

 export const state = {
    doctor : {}
}
 export const getters = {
    get_doctor : (state)=>state.doctor
}
 export const mutations = {
    set_doctor :(state,data) => state.doctor = data
}
 export const actions = {
    async fetchDoctor({commit}){
        try{
            var response = await axios.get("http://localhost:3000/doctor")
        if(response.status==200){
            console.warn(response.data)
            commit('set_doctor',response.data)
        }
        } catch(e){
            console.warn(e)
        }
    }
}
