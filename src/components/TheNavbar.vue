<template>
  <nav>
    <div class="planet-heading">
      <h2>The Planets</h2>
    </div>
    <div class="list-container">
      <ul v-for="planet of Data" :key="planet.name" :id="planet.name">
        <router-link :to="{ name: 'name', params: { name: planet.name } }">
          <p>{{ planet.name }}</p>
        </router-link>
      </ul>
    </div>

<!------------ Mobile menu ------------>

    <div class="list-container-mobile">
      <img src="../assets/icon-hamburger.svg" alt="mobile-menu-icon" @click="showMobileMenu">
    </div>

  </nav>

<transition name="slide">
  <div class="list-mobile list"  v-if="mobileVisible" >
        <ul  class="mobile-planets">
          <router-link v-for="planet of Data" 
          :key="planet.name"  :id="planet.name" 
          :to="{ name: 'name', params: { name: planet.name } }">
            <li class='planet'>{{ planet.name }} 
            <span> > </span>
            </li>
            <hr>
          </router-link>
        </ul>
  </div>
  </transition> 


</template>

<script>
import Data from "../../data.json";

export default {

  data() {
    return {
      mobileVisible: false,
      seeButton: false,
      Data
    }
  },

  methods: {
    showMobileMenu() {
      this.mobileVisible = !this.mobileVisible
    },

    toggleButton() {
      this.seeButton = !this.seeButton;
    }
  }


}

</script>

<style scoped>
nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 0 2%;
  align-items: center;
}

.list-container-mobile {
  display: none;
}

h2 {
  display: inline-block;
  font-family: 'Antonio', sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  letter-spacing: -1.5px;
  font-weight: 400;
}

ul {
  display: inline-block;
  list-style-type: none;
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2.6px;
}

.list-container {
  grid-area: 1 / 2 / 2 / 4;
  text-align: right;
}

a {
  color: #bfbfc7;
  text-decoration: none;
}

a:hover {
  color: white;
}


@media screen and (max-width: 1225px) {

  nav {
    grid-template-columns: repeat(4, 1fr);
  }

  .list-container {
    grid-area: 1 / 2 / 2 / 5
  }

  ul {
    padding-left: 15px;
  }

}

@media screen and (max-width: 900px) {

  nav {
    display: block;
    text-align: center;
  }

  .list-container {
    text-align: center;
  }
}

@media screen and (max-width: 670px) {

  .list-container {
    display: none;
  }

  nav {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 0 auto;
  }


  .slide-enter-from{
    opacity: 0;
      transform: scaleY(0);
  }

  .slide-enter-active{
    transition: all 0.8s ease-in-out;
  }

  .slide-enter-to{
    opacity: 1;

  }
  
  .slide-leave-from{
    opacity: 1;
  }
  
    .slide-leave-active{
        transition: all 0.5s ease-in-out;
  }

  .slide-leave-to{
     transform: scaleY(0);
     opacity: 0;
  }


  .list{
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transform-origin: top;
  overflow: hidden;
  }
  .planet-heading {
    display: inline-block;
  }

  .list-container-mobile {
    display: inline-block;
  }

  .list-mobile ul {
    display: block;
    width: 80%;
    margin: 10px auto;

  }

  .planet::before {
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-right: 10px;
    content: ' ';
  }

  #Mercury li::before {
    background-color: #DEF4FC;
  }

  #Venus li::before {
    background-color: #F7CC7F;
  }

  #Earth li::before {
    background-color: #545BFE;
  }

  #Mars li::before {
    background-color: #FF6A45;
  }

  #Jupiter li::before {
    background-color: #ECAD7A;
  }

  #Saturn li::before {
    background-color: #FCCB6B;
  }

  #Uranus li::before {
    background-color: #65F0D5;
  }

  #Neptune li::before {
    background-color: #497EFA;
  }

}

@media screen and (max-width: 450px) {

  nav {
    width: 90%;
  }

  h2 {
    font-size: 28px;
  }

  span {
    float: right;
    color: #9797974f;
  }


  .list-mobile ul {
    font-size: 15px;
    width: 90%;
    margin: 5px auto;
    line-height: 15px;
  }
}
</style>