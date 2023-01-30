import axiosApi from "@/config/config"

export const state = {
    company : {}
    
}
export const getters = {
    get_company : (state) => state.company
}
export const mutations = {
    set_company : (state,data) => state.company = data
}
export const actions = {
    async fetchCompany({commit}){
        try{
            var response = await axiosApi.get("company-info")
            if(response.status == 200){
                console.warn(response.data.data)
                commit('set_company',response.data.data)
            }
        }catch(e){
            console.warn(e);
        }
    }
}
