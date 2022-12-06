<template>
  <template-view>
   <!-- banner section -->
   <div class="container">
    <div class="row">
      <div class="col-md-12">
        <carousel-component/>
      </div>
    </div>
   </div>

   <!-- wellcare section -->
   <div class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/Dental-Care-Section (1).jpg" class="care-img">
        </div>
        <div class="col-md-6">
          <div class="care-text">
            <h2  class="care_title">Complete Wellness Care</h2>
            <h5>Routine wellness exams are a critical part of your pet’s healthcare routine to maintain 
              their wellbeing and detect any medical issues before they progress. 
              During your pet’s wellness exam, we will conduct an in-depth, nose to tail 
              examination and advise you on all aspects of your pet's care.</h5>
              <h3 class="care_title">Comprehensive Care</h3>
              <div class="row">
                <div class="col-md-4">
                  <div>
                    <h6>+ Preventative Services</h6>
                  </div>
                </div>
                <div class="col-md-4">
                  <div>
                    <h6>+ Surgical Services</h6>
                  </div>
                </div>
                <div class="col-md-4">
                  <div>
                    <h6>+ Diagnostics</h6>
                  </div>
                </div>
              </div>
              <div class="py-3">
                <button type="button" class="btn ">View Our services</button>
              </div>
          </div>
          
        </div>
      </div>
    </div>
   </div>

   <!-- pet must have -->
   <div class="py-5">
    <div class="container">
      <h2 style="text-align:center ;">Pets Must Haves</h2>
      <div class="row">
        <div class="col-md-2">
          <img src="../assets/hemp oil.jpg" alt="" class="pet-img">
          <h6>Hemp Oil For Pets</h6>
        </div>
        <div class="col-md-2">
          <img src="../assets/BrushySticks.jpg" alt="" class="pet-img">
          <h6>Pet Hip & Joint Supplements</h6>
        </div>
        <div class="col-md-2">
        <img src="../assets/allergyitch-pouch-1.jpg" alt="" class="pet-img">
        <h6>Pets Allergy Supplements</h6>
        </div>
        <div class="col-md-2">
          <img src="../assets/SeniorDog.jpg" alt="" class="pet-img">
          <h6>Pets Dental Care</h6>
        </div>
        <div class="col-md-2">
          <img src="../assets/HipJoint-1.jpg" alt="" class="pet-img">
          <h6>Senior Pet Care & Pain Relief</h6>
        </div>
        <div class="col-md-2">
          <img src="../assets/FoodTopper.jpg" alt="" class="pet-img">
          <h6>All Natural Pet Food Toppers</h6>
        </div>
      </div>
    </div>
   </div>

   <!-- welcome section -->
   <div class="py-5">
    <div class="wellcome-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
           <div class="wel-text">
            <h2>Welcome New Clients</h2>
            <div>
              <h5>(+977) 9478594577</h5>
            </div>
            <div>
              <h5>Our Animal Care Center welcomes you and your pet! Here at animal care center, 
                we always welcome new clients and patients to our full-service veterinary hospital. 
                We encourage you to explore our services and call with any questions.</h5>
            </div>
           </div>
          </div>
          <div class="col-md-6">
            <img src="../assets/dog_meow-removebg-preview.png" alt="" >
          </div>
        </div>
      </div>
    </div>
   </div>

   <!-- learn more -->
   <div class="py-3">
    <h2 style="text-align:center ;">Learn more about Animal Care Center</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/cat dog.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/img2.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/img3.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/img1.jpg" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   
  </template-view>
</template>

<script>
// @ is an alias to /src
import CarouselComponent from '@/components/CarouselComponent.vue';
import TemplateView from '@/views/TemplateView'

export default {
  name: 'HomeView',
  components: {
    TemplateView,
    CarouselComponent,
  }
}
</script>
