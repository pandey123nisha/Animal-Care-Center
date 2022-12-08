<template>
  <div>
    <!-- head header -->
    <div class="topNavBar py-2">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="text-white">Animal Care Center (+977-9862130505)</div>
        <div class="mx-md-5">
          <vs-button
        warn
        gradient
        :active="active == 3"
        @click="active = 3"
      >
        <i class="bx bxs-bell-ring"></i> Book an Appointment
      </vs-button>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img
            src="../assets/logo (1).png"
            alt="Max-width 100%"
            style="height: 45px"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'home' })"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'about' })"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'contact' })"
                >Contact</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'service' })"
                >Service</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'doctors' })"
                >Doctors</a
              >
            </li>
            <div class="input-group rounded">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
.appointment {
  color: #7f0000;
  background-color: white;
  font-weight: bold;
  padding: 0px 10px 0px 10px;
}
</style>
