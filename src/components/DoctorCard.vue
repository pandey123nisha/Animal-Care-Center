<template>
    <div>
        <vs-card type="3">
            <template #title>
              <h3>{{doctor.name}}</h3>
            </template>
            <template #img>
              <img :src="doctor.photo" alt="">
            </template>
            <template #text>
              <p>
                {{doctor.education }}
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  54
                </span>
              </vs-button>
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
