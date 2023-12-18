<template>
  <div class="mobile-button-container">
    <button :class="[showOverview ? this.$route.params.name + '-mobile-active' : '']" @click="activateOverview">
      OVERVIEW</button>
    <button :class="[showInternal ? this.$route.params.name + '-mobile-active' : '']" @click="activateInternal">
      STRUCTURE</button>
    <button :class="[showGeology ? this.$route.params.name + '-mobile-active' : '']"
      @click="activateGeology">SURFACE</button>
  </div>

  <hr class="mobile-hr">



  <div class="planet-container">

    <PlanetPicture :overview="showOverview" :image-src-overview="Data[this.currentIndex].images.planet"
      :internal="showInternal" :image-src-internal="Data[this.currentIndex].images.internal"
      :geology="showGeology" :image-src-geology-upper="Data[this.currentIndex].images.planet"
      :image-src-geology-below="Data[this.currentIndex].images.geology" />

    <div class="info-container">

      <div class="title-and-facts">
        <PlanetInfo :name="Data[currentIndex].name" :overview="showOverview"
          :overview-content="Data[currentIndex].overview.content" :overview-source="Data[currentIndex].overview.source"
          :internal="showInternal" :internal-content="Data[currentIndex].structure.content"
          :internal-source="Data[currentIndex].structure.source" :geology="showGeology"
          :geology-content="Data[currentIndex].geology.content" :geology-source="Data[currentIndex].structure.source" />
      </div>

      <div class="web-button-container">
        <button :class="[showOverview ? this.$route.params.name + '-active' : '']" @click="activateOverview">
          <span>01 </span> OVERVIEW</button>
        <button :class="[showInternal ? this.$route.params.name + '-active' : '']" @click="activateInternal">
          <span>02 </span> INTERNAL STRUCTURE</button>
        <button :class="[showGeology ? this.$route.params.name + '-active' : '']" @click="activateGeology"> <span>03
          </span>SURFACE GEOLOGY</button>
      </div>


    </div>
  </div>

  <PlanetFactCards :rotation="Data[currentIndex].rotation" :revolution="Data[currentIndex].revolution"
    :radius="Data[currentIndex].radius" :temperature="Data[currentIndex].temperature" />

   <div class="invisible">
  //  You only need this component so that npm run build uploads pictures with the code as well
  <ImgGallery />
  </div>

</template>


<script>

import Data from "../../data.json";
import PlanetPicture from "./PlanetPicture.vue";
import PlanetInfo from "./PlanetInfo.vue";
import PlanetFactCards from "./PlanetFactCards.vue";
import ImgGallery from "./ImgGallery.vue"

export default {

  components: {
    PlanetFactCards,
    PlanetPicture,
    PlanetInfo,
    ImgGallery
  },


  data() {
    return {
      currentIndex: "",
      showOverview: true,
      showInternal: false,
      showGeology: false,
      Data
    }
  },

  methods: {
    getThisPlanet(route) {
      const array = Data;
      const name = route.params.name;
      let newArr = [];
      for (let i = 0; i < array.length; i++) {
        newArr.push(array[i].name);
      }
      this.currentIndex = newArr.indexOf(name);
    },

    activateOverview() {
      this.showOverview = true;
      this.showInternal = false;
      this.showGeology = false;
    },

    activateInternal() {
      this.showOverview = false;
      this.showInternal = true;
      this.showGeology = false;
    },

    activateGeology() {
      this.showOverview = false;
      this.showInternal = false;
      this.showGeology = true;
    }

  },

  watch: {
    $route(newRoute) {
      this.getThisPlanet(newRoute);
    }
  },

  created() {
    this.getThisPlanet(this.$route);

  }


}

</script>

<style scoped>
.planet-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}

.mobile-button-container {
  display: none;
}

.invisible{
  display: none;
}

.mobile-hr {
  display: none;
}

.info-container {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.web-button-container {
  width: 100%;
}

button {
  display: block;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  line-height: 25px;
  letter-spacing: 2.6px;
  border: 1px solid #38384F;
  margin: 10px 0;
  padding: 2% 2% 2% 5%;
  text-align: left;
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}

button:hover {
  background-color: #38384F;
}

button span {
  color: #838391;
  padding: 0 15px;
}


.Saturn-active {
  background-color: #CD5120
}

.Mercury-active {
  background-color: #419EBB;
}

.Venus-active {
  background-color: #EDA249;
}

.Earth-active {
  background-color: #6f2ed6;
}

.Mars-active {
  background-color: #D14C32;
}

.Jupiter-active {
  background-color: #D83A34;
}

.Uranus-active {
  background-color: #1EC1A2;
}

.Neptune-active {
  background-color: #2D68F0;
}

/* Css media queries start */

@media screen and (max-width: 1225px) {
  .info-container {
    width: 30%;
  }

}

@media screen and (max-width: 900px) {

  .planet-container {
    flex-direction: column;
    justify-content: normal;
  }

  .info-container {
    flex-direction: row;
    width: 90%;
    align-items: center;
  }

  .title-and-facts {
    width: 90%;
  }

  .web-button-container {
    padding-left: 10%;
    width: 80%;
  }
}


@media screen and (max-width: 495px) {
  .web-button-container {
    display: none;
  }

  .mobile-button-container {
    display: block;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 9px;
    width: 100%;
    text-align: center;
  }

  .mobile-hr {
    display: block;
  }

  .mobile-button-container button {
    text-align: center;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    line-height: 0;
  }

  .planet-container {
    height: auto;
  }

  .info-container {
    display: block;
    width: 100%;
    text-align: center;
  }


  .title-and-facts {
    width: 100%;
  }

  .Saturn-mobile-active,
  .Mercury-mobile-active,
  .Venus-mobile-active,
  .Earth-mobile-active,
  .Mercury-mobile-active,
  .Mars-mobile-active,
  .Jupiter-mobile-active,
  .Uranus-mobile-active,
  .Neptune-mobile-active {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 16px;

  }

  .Saturn-mobile-active {
    text-decoration-color: #CD5120;
  }

  .Mercury-mobile-active {
    text-decoration-color: #419EBB;
  }

  .Venus-mobile-active {
    text-decoration-color: #EDA249;
  }

  .Earth-mobile-active {
    text-decoration-color: #6f2ed6;
  }

  .Mars-mobile-active {
    text-decoration-color: #D14C32;
  }

  .Jupiter-mobile-active {
    text-decoration-color: #D83A34;
  }

  .Uranus-mobile-active {
    text-decoration-color: #1EC1A2;
  }

  .Neptune-mobile-active {
    text-decoration-color: #2D68F0;
  }
}
</style>