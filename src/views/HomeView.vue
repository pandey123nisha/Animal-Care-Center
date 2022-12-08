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
              class="img-fluid rounded-2"
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
                    @click="active = 2"
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
      <h2 style="text-align: center">Pets Must Haves</h2>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-2">
            <img src="../assets/hemp oil.jpg" alt="" class="pet-img" />
            <h6>Hemp Oil For Pets</h6>
          </div>
          <div class="col-md-2">
            <img src="../assets/BrushySticks.jpg" alt="" class="pet-img" />
            <h6>Pet Hip & Joint Supplements</h6>
          </div>
          <div class="col-md-2">
            <img
              src="../assets/allergyitch-pouch-1.jpg"
              alt=""
              class="pet-img"
            />
            <h6>Pets Allergy Supplements</h6>
          </div>
          <div class="col-md-2">
            <img src="../assets/SeniorDog.jpg" alt="" class="pet-img" />
            <h6>Pets Dental Care</h6>
          </div>
          <div class="col-md-2">
            <img src="../assets/HipJoint-1.jpg" alt="" class="pet-img" />
            <h6>Senior Pet Care & Pain Relief</h6>
          </div>
          <div class="col-md-2">
            <img src="../assets/FoodTopper.jpg" alt="" class="pet-img" />
            <h6>All Natural Pet Food Toppers</h6>
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
                <p class="text-white">
                 We offers high quality, comprehensive vet care in locations near you. Anticipate Your Pets' Health Needs and Avoid Costly Treatments. Affordable Rates. Online Booking. Same Day Appointments. High Tech Clinics. Top Customer Service. Low Cost Pricing.
                </p>
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

export default {
  name: "HomeView",
  components: {
    TemplateView,
    CarouselComponent,
    LearnMore,
  },
};
</script>
