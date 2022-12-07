<template>
    <vs-card>
    <template #title>
      <h3>Dog Treatment</h3>
    </template>
    <template #img>
      <img src="../assets/img2.jpg" alt="" class="img-fluid">
    </template>
    <template #text>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>mino
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">
          54
        </span>
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
    export default {
        name: "LearnMore",
       
    }
</script>

<style lang="scss" scoped>

</style>