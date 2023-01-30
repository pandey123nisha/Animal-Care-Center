
import axiosApi from "@/config/config";

export const state = {
   abouts : []
}
export const getters = {
   get_abouts : (state)=>state.abouts
}
export const mutations = {
   set_abouts :(state,data) => state.abouts = data
}
export const actions = {
   async fetchAbout({commit}){
       try{
           var response = await axiosApi.get("abouts")
       if(response.status==200){
           console.warn(response.data)
           commit('set_abouts',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }
   }
}
