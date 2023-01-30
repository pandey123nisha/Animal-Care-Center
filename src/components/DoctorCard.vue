<template>
    <div>
        <vs-card type="5">
            <template #title>
              <h3>{{doctor.first_name}} {{doctor.last_name}}</h3>
            </template>
            <template #img>
              <img :src="doctor.image" alt="">
            </template>
            <template #text>
              <p>
                {{doctor.specialist }}
              </p>
              <p>
                <i class="fa-solid fa-square-phone"></i> {{doctor.phone}}
               
                </p>
                <p><i class="fa-solid fa-envelope"></i> {{ doctor.email }}</p>
            </template>
          </vs-card>
        
    </div>
</template>

<script>

    export default {
        name: "DoctorCard",
        props: ['doctor']
    }
</script> 

<style  scoped>

</style>
