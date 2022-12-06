<template>
  <div class="footor">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img
            src="../assets/white-dog-paw-png-removebg-preview.png"
            alt=""
            class="logo-image"
          />
        </div>
        <div class="col-md-2">
          <h6 class="footer_title">
            <span> Learn </span>
          </h6>
          <div>
            <a href="">
              <p>Toxin Trends</p>
            </a>
            <a href="">
              <p>Poison List</p>
            </a>
            <a href="">
              <p>Owners Guide</p>
            </a>
            <a href="">
              <p>Veterinarians</p>
            </a>
            <a href="">
              <p>Emergency</p>
            </a>
          </div>
        </div>
        <div class="col-md-2">
          <h6 class="footer_title">
            <span> About </span>
          </h6>
          <div>
            <a href="">
              <p>News & Blog</p>
            </a>
            <a href="">
              <p>About Us</p>
            </a>
            <a href="">
              <p>Contact Us</p>
            </a>
            <a href="">
              <p>Privacy Policy</p>
            </a>
          </div>
        </div>
        <div class="col-md-2">
          <h6 class="footer_title">
            <span> Help </span>
          </h6>
          <div>
            <a href="">
              <p>Medical Assistance:</p>
            </a>
            <a href="">
              <p class="fot-color">(+977) 9478594577</p>
            </a>
            <a href="">
              <p>Non-medical Assistance:</p>
            </a>
            <a href="">
              <p class="fot-color">info@animalcarecenter.com</p>
            </a>
          </div>
        </div>
        <div class="col-md-3">
          <h6 class="footer_title">
            <span> Stay Connected </span>
          </h6>
          <div>
            <a href="">
              <p>Get the latest</p>
            </a>
            <form class="newsletter-subscribe">
              <div>
                <label>
                  <input
                    type="text"
                    name="add-email"
                    id="add-email"
                    placeholder="enter your email"
                  />
                </label>
              </div>
            </form>
            <a href="" class="button">
              <button type="button" class="btn">Sign Up</button>
            </a>
          </div>
          <div class="icons">
            <div class="d-flex">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
               <a href=""> <i class="fa-brands fa-instagram"></i></a>
                <a href=""> <i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FootorComponent",
};
</script>

<style scoped>
.logo-image{
  width: 80px;
 margin: 30px 0px 0px 110px;
}
.footor {
  background-color: #140005;
}
h6 {
  color: white;
  padding-top: 20px;
  text-transform: uppercase;
}
a {
  text-decoration: none;
  color: white;
  text-align: center;
}
.fot-color {
  color: #7f0000;
}
.btn {
    background-color: #7f0000;
  color: white;
}
.button {

  display: flex;
  justify-content: center;
  
}
.footer_title {
  position: relative;
  margin: 20px 0;
}
.footer_title span::before {
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

.newsletter-subscribe {
    font-size: 16px;
    max-width: 362px;
    padding: 16px 24px;
  }
  
  .newsletter-subscribe,
  .newsletter-subscribe input,
  .newsletter-subscribe button {
    font-familyXXX: Georgia;
  }
  
  .newsletter-subscribe div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  
  .newsletter-subscribe label {
    width: 80%;
    margin-left: 45px;
  }
  
  .newsletter-subscribe input {
    border: none;
    border-bottom: 1px solid #666666;
    background-color: transparent;
    width: 100%;
    padding: 8px 0;
  }
  
  .newsletter-subscribe input:hover,
  .newsletter-subscribe input:focus {
    border-bottom: 1px solid #0093ec;
  }
  
  .newsletter-subscribe input:focus {
    outline: none;
  }
  
  input::-webkit-input-placeholder {
    transition: color 0.4s ease-in-out;
  }
  
  input:hover::-webkit-input-placeholder,
  input:focus::-webkit-input-placeholder{
    color: #ccc;
  }
  
  .newsletter-subscribe button {
    font-size: 14px;
    line-height: 1;
    border: none;
    border-radius: 34px;
    height: 34px;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: background-color 0.4s ease-in-out,border-color 0.4s ease-in-out,color 0.4s ease-in-out;
  }
  
  .newsletter-subscribe button:hover, .newsletter-subscribe button:focus {
      background-color: #0073b9;
  }
  .icons{
    color: white;
    display: flex;
    justify-content: center;
    padding: 10px 0px 0px 0px;
  }
  .fa-brands{
    padding: 10px;
  }
</style>
