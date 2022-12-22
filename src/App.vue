<template>
  <div id="app">
    <vue-facebook-page data-href="https://www.facebook.com/codeit.np" link-text="Code IT" />
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  methods :{
    ...mapGetters(['fetchDoctor'])
  },
  created (){
    this.fetchDoctor()
  }
}

</script>
<style>
:root{
  --primaryColor : #7F0000;
  --secondaryColor: #140005;
}
.topNavBar{
  background-color: var(--primaryColor);
}
.nav-link{
  color: black;
  font-weight: bold;
  margin: 0px 15px 0px 15px;
}
.feat-img{
  width: 100%;
  height: 600px;
}
.pet-img{
  width: 100%
}
h6{
  text-align: center;
  font-weight: bold;
  padding: 4px;
}
.wellcome-sec{
  background-color: var(--primaryColor);
  color: white;
  text-align: center;
}

.care-text{
  position: relative;
  height: auto;
  width: 50%;
  min-width: 680px;
  margin-top:170px;
}
.care_title {
  position: relative;
  margin: 20px 0;
  color: var(--primaryColor);
}

.care_title span::before {
  background: var(--primaryColor);
  transition-duration: 0.3s;
  transition-property: all;
  content: "";
  position: absolute;
  left: 38%;
  top: 50px;
  width: 50px;
  height: 2px;
  display: block;
}
.btn{
  background-color: var(--primaryColor);
  color: white;
}

.bgPrimary{
  background-color: var(--primaryColor);
}
</style>
