import axiosApi from "@/config/config"

export const state = {
    images : [],
}
export const getters = {
    get_images : (state) => state.images
}
export const mutations = {
    set_images : (state,data) => state.images = data
}
export const actions = {
    async fetchImages({commit}){
        try{
            var response = await axiosApi.get("carousel")
            if(response.status == 200){
                commit('set_images',response.data.data)
            }
        }catch(e){
            console.warn(e)
        }
    }
}