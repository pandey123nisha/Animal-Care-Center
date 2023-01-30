
import axiosApi from "@/config/config";

export const state = {
   services : []
}
export const getters = {
   get_services : (state)=>state.services
}
export const mutations = {
   set_services :(state,data) => state.services = data
}
export const actions = {
   async fetchService({commit}){
       try{
           var response = await axiosApi.get("services")
       if(response.status==200){
           console.warn(response.data)
           commit('set_services',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }
   }
}
