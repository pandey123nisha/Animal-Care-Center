<template>
    <template-view>
      <div class="container py-5">
        <div class="row" style="padding-bottom: 20px;">
          <div class="col-md-3" v-for="(doctor,index) in doctors" :key="index">
              <div @click.prevent="$router.push({name:'doctor-profile',params:{id:doctor.id}})">
                  <doctor-card :doctor="doctor" />
              </div>
        </div>
      </div>
     </div>
    </template-view>
  </template>
  
  <script>
  import TemplateView from '@/views/TemplateView'
 import DoctorCard from '@/components/DoctorCard'
import { mapGetters } from 'vuex';
    export default {
      name : "DoctorsView",
      components:{
        TemplateView,
        DoctorCard
      },
      computed:{
        ...mapGetters({
            doctors : 'get_doctors'
        })
    }
    }
  </script>
  
  <style  scoped>
  .carousel-item{
    width: 100%;
    max-height: 600px;
  }

  .carousel-item img{
    width: 100%;
    max-height: 350px;
    object-fit: cover;
  }
  .doct-img{
    width: 100px;
  }
  </style>
