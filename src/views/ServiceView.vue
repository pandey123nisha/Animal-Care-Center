<template>
  <template-view>
      <section class="py-5">
        <div class="container">
          <h1>Our Services</h1>
          <p>Veterinary services refer to the medical and surgical care provided to animals, including both domestic pets and livestock. These services may include preventative care, such as vaccinations and routine check-ups, as well as diagnostic testing, treatment of illnesses and injuries, and surgery. Some veterinary clinics may also offer specialized services such as dental care, behavior counseling, and alternative therapies. In addition, many veterinary clinics also provide services such as grooming and boarding. It is important to find a reputable and qualified veterinarian to ensure the best care for your animal companion.</p>
          <div class="row g-2" v-for="(service,index) in services" :key="index">
              <div class="col-md-6 order-md-first" v-if="index % 2 == 0">
                  <img :src="service.image" class="img-fluid rounded w-100" alt="">
              </div>

                <div class="col-md-6 order-md-last" v-else>
                  <img :src="service.image" class="img-fluid w-100 rounded" alt="">
              </div>


              <div class="col-md-6 ">
                <div class="d-flex h-100 align-items-center">
                  <div>
                      <h1>{{ service.title }}</h1>
                      <div v-html="service.description"></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
  </template-view>
</template>

<script>
import TemplateView from "@/views/TemplateView";
import { mapGetters } from 'vuex';
export default {
  name: "ServiceView",
  components: {
    TemplateView,
  },

  computed:{
    ...mapGetters({
      services: 'get_services'
    })
  }
};
</script>

<style lang="scss" scoped></style>
