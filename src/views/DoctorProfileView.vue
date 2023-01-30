<template>
  <template-view>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
                <div class="col-md-4">
                     <img :src="doctor.image" class="img-fluid rounded" alt="">
                </div>
                <div class="col-md-4">
                    <h5>{{doctor.first_name}} {{doctor.first_name}}</h5>
                    <address>
                        <i class="fa-solid fa-venus"></i> {{ doctor.gender }} <br>
                        <i class="fa-solid fa-user-doctor"></i> {{ doctor.specialist }} <br>
                        <i class="fa-solid fa-envelope"></i> {{ doctor.email }} <br>
                        <i class="fa-solid fa-square-phone"></i> {{ doctor.phone }} <br>
                        <i class="fa-solid fa-earth-americas"></i> {{ doctor.address }},{{ doctor.city }},{{ doctor.country }}, <br>
                        <i class="fa-solid fa-location-dot"></i> {{ doctor.state }} <br>
                        <i class="fa-solid fa-cake-candles"></i> {{ doctor.dob }} <br>
                    </address>
                   
                </div>

                <div class="col-md-4">
                        <h5>Short Biography</h5>
                        <p>{{ doctor.short_biography }}</p>
                </div>
            </div>
               
                
          </div>
          <div class="col-md-4">
                <h5>Schedule</h5>
                <table class="table">
                    <tr>
                        <th>Day</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Message</th>
                    </tr>

                    <tr v-for="(schedule,index) in doctor.schedules" :key="index">
                        <td>{{ schedule.day }}</td>
                        <td>{{ schedule.start_time }}</td>
                        <td>{{ schedule.end_time }}</td>
                        <td>{{ schedule.message }}</td>
                    </tr>
                </table>
          </div>
        </div>
      </div>
    </section>
  </template-view>
</template>

<script>
import { mapGetters } from 'vuex';
import TemplateView from "./TemplateView.vue";
export default {
name:"DoctorProfileView",
  components: { TemplateView },
  computed:{
    ...mapGetters({
        doctors : 'get_doctors',
    }),

    doctor(){
        return this.doctors.find((d) => d.id == this.id)
    }
  },

  props:['id']
};
</script>

<style lang="scss" scoped></style>
