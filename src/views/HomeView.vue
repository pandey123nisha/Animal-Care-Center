<template>
  <template-view>
    <!-- Section 1 -->
    <div>
      <div class="row">
        <div class="col-md-12">
          <carousel-component />
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              src="../assets/Dental-Care-Section (1).jpg"
              class="img-fluid rounded-3"
            />
          </div>
          <div class="col-md-6">
            <div class="d-flex align-items-center h-100">
              <div class="">
                <h2 class="">Complete Wellness Care</h2>
                <p>
                  Routine wellness exams are a critical part of your pet’s
                  healthcare routine to maintain their wellbeing and detect any
                  medical issues before they progress. During your pet’s
                  wellness exam, we will conduct an in-depth, nose to tail
                  examination and advise you on all aspects of your pet's care.
                </p>
                <h3 class="">Comprehensive Care</h3>
                <div class="row">
                  <div class="col-md-4">
                    <h6>+ Preventative Services</h6>
                  </div>
                  <div class="col-md-4">
                    <h6>+ Surgical Services</h6>
                  </div>
                  <div class="col-md-4">
                    <h6>+ Diagnostics</h6>
                  </div>
                </div>
                <div class="py-3">
                  <vs-button
                    circle
                    color="#7F0000"
                    
                    :active="active == 2"
                    @click.prevent="$router.push({name:'service'})"
                  >
                    <i class="bx bxs-heart"></i> View Our services
                  </vs-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3 -->
    <div class="py-5">
      <h2 style="text-align: center">Our Services</h2>
      <div class="container py-5">
        <div class="row g-4">
          <div class="col-md-2" v-for="(service,index) in services" :key="index" @click.prevent="$router.push({name:'service'})">
            <img :src="service.image" alt="" class="pet-img" style="height:120px;objectFit:cover" />
            <span style="fontSize:14px">{{ service.title.substring(0,25) + "..." }}</span>
          </div>
         
        </div>
      </div>
    </div>

    <div class="bgPrimary py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex align-items-center h-100">
              <div>
                <h1 class="text-white">Greetings </h1>
                <div v-html="about.description" class="text-white"></div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <img
              src="../assets/dog_meow-removebg-preview.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Section 5 -->
    <div class="py-5">
      <h2 style="text-align: center">Learn more about Animal Care Center</h2>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-3">
            <learn-more />
          </div>
          <div class="col-md-3">
            <learn-more />
          </div>
          <div class="col-md-3">
            <learn-more />
          </div>
          <div class="col-md-3">
            <learn-more />
          </div>
        </div>
      </div>
    </div>
  </template-view>
</template>

<script>
// @ is an alias to /src
import CarouselComponent from "@/components/CarouselComponent.vue";
import TemplateView from "@/views/TemplateView";
import LearnMore from "@/components/LearnMore.vue";
import { mapGetters } from 'vuex';

export default {
  name: "HomeView",
  components: {
    TemplateView,
    CarouselComponent,
    LearnMore,
  },
  computed:{
    ...mapGetters({
      abouts: 'get_abouts',
      services : 'get_services'
    }),

    about(){
      return this.abouts.find((v) => v.slug == 'about-us')
    }
  }
};
</script>

<style scoped>
.pet-img{
  filter: grayscale();
  transition: 1s;
}


.pet-img:hover{
  filter: none;
  
}
</style>
