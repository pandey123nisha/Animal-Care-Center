<template>
  <template-view>
      <section class="py-5">
        <div class="container">
          <div class="row" v-for="(about,index) in abouts" :key="index">
         
            <div class="col-md-6 order-first"  v-if="index %2 == 0">
              <img :src="about.image" class="img-fluid rounded" :alt="about.image">
            </div>

              <div class="col-md-6 order-first"  v-else>
              <img :src="about.image" class="img-fluid rounded" :alt="about.image">
            </div>
           
            
            <div class="col-md-6" >
              <h1>{{ about.title }}</h1>
              <div v-html="about.description"></div>
            </div>


          </div>
        </div>
      </section>
  </template-view>
</template>

<script>
import TemplateView from '@/views/TemplateView'
import { mapGetters } from 'vuex'
  export default {
    name : "AboutView",
    components:{
      TemplateView
    },

    computed:{
      ...mapGetters({
        abouts : 'get_abouts'
      }),
    }
  }
</script>

<style lang="scss" scoped>

</style>