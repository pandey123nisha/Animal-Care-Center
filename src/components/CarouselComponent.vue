<template>
  <div>
    <vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
      <flux-pagination slot="pagination"></flux-pagination>
</vue-flux>

    
 
  </div>
</template>

<script>
import { VueFlux, FluxPagination, Transitions } from "vue-flux";
import { mapGetters } from 'vuex';

export default {
  name: "CarouselComponent",
  components: {
    VueFlux,
    FluxPagination,
  },

  computed:{
    ...mapGetters({
      images : 'get_images'
    }),

    fluxImages(){
      return this.images.map((d) => d.image);
    }
  },

  data: () => ({
    fluxOptions: {
      autoplay: true,
      height: "600px"
    },
   
    fluxTransitions: {
      transitionBook: Transitions.transitionKenburn,
    },
  }),
};
</script>

<style lang="scss" scoped></style>
