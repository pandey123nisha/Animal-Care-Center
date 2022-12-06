<template>
  <div id="app">
    <vue-facebook-page data-href="https://www.facebook.com/codeit.np" link-text="Code IT" />
    <router-view/>
  </div>
</template>

<style>
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
  background-color: #7F0000;
  color: white;
  text-align: center;
}
.care-img{
  position: relative;
  height: auto;
  width: 50%;
  min-width: 880px;
}
.wel-text{
  padding-top: 130px;
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
  color: #7F0000;
}
.care_title span::before {
  background: #7f0000;
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
  background-color: #7F0000;
  color: white;
}
</style>
