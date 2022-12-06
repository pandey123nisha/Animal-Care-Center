<template>
    <div>
      <!-- head header -->
      <template>
        <div class="hidden">
            <vs-navbar shadow square center-collapsed class="navbar">
                <vs-navbar-item >
                    24/7 Animal Care Center: (+977) 9478594577
                </vs-navbar-item>
                <template>
                    <vs-button flat class="appointment">Book an Appointment</vs-button>
                </template>
            </vs-navbar>
        </div>
    </template>

        <!-- bottom header -->
        <div class="bottom-header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand"><img src="../assets/logo (1).png" class="logo-img"></a>
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/"  @click.prevent="$router.push({name:'home'})">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" @click.prevent="$router.push({name:'about'})">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Toxin Nails</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Service</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Our Doctors</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Contact</a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    </form>
                  </div>
                </div>
              </nav>
        </div>
       
    </div>
</template>

<script>
export default {
    name: "NavbarComponent",
    data:() => ({
      active: 'home',
      activeSidebar: false
    })
}
</script>

<style scoped>
.navbar{
    background-color: #7F0000;
    color: white;
}

.appointment{
    color: #7F0000;
    background-color: white;
    font-weight: bold;
    padding: 0px 10px 0px 10px
}
.logo-img{
    width: 50px;
}
.nav-item{
    font-weight: bold;
    padding: 0px 25px 0px 25px;
}
.bottom-header{
    padding: 50px 0px 0px 0px;
}
</style>