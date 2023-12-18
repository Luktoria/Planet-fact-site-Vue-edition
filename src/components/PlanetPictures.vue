<template>
<!---------- Container for Mercury pictures ---------->

<div v-if="planet === 'Mercury'">
  <div class="image-container-for-overview" v-if="overview" >
    <div>
      <img src="../assets/planet-mercury.svg" alt="planet mercury"  class="planet-img">
    </div>
  </div>

  <div class="image-container-for-internal" v-if="internal" >
    <img src="../assets/planet-mercury-internal.svg" alt="planet mercury"  class="planet-img">
  </div>

  <div class="image-container-for-geology" v-if="geology">
    <div class="below-img">
      <img src="../assets/planet-mercury.svg" alt="image of planet" class="planet-img">
    </div>
    <div class="top-img">
      <img src="../assets/geology-mercury.png" class="planet-geology">
    </div>
  </div>
</div>

<!---------- Container for Venus pictures ---------->

<div v-if="planet === 'Venus'">
  <div class="image-container-for-overview" v-if="overview" >
    <div>
      <img src="../assets/planet-venus.svg" alt="planet venus"  class="planet-img">
    </div>
  </div>

  <div class="image-container-for-internal" v-if="internal" >
    <img src="../assets/planet-venus-internal.svg" alt="planet venus"  class="planet-img">
  </div>

  <div class="image-container-for-geology" v-if="geology">
    <div class="below-img">
      <img src="../assets/planet-venus.svg" alt="image of planet" class="planet-img">
    </div>
    <div class="top-img">
      <img src="../assets/geology-venus.png" class="planet-geology">
    </div>
  </div>
</div>



<!---------- Container for Earth pictures ---------->

<div v-if="planet === 'Earth'">
  <div class="image-container-for-overview" v-if="overview" >
    <div>
      <img src="../assets/planet-earth.svg" alt="planet earth"  class="planet-img">
    </div>
  </div>

  <div class="image-container-for-internal" v-if="internal" >
    <img src="../assets/planet-earth-internal.svg" alt="planet earth"  class="planet-img">
  </div>

  <div class="image-container-for-geology" v-if="geology">
    <div class="below-img">
      <img src="../assets/planet-earth.svg" alt="image of planet" class="planet-img">
    </div>
    <div class="top-img">
      <img src="../assets/geology-earth.png" class="planet-geology">
    </div>
  </div>
</div>

<!---------- Container for Mars pictures ---------->

<div v-if="planet === 'Mars'">
  <div class="image-container-for-overview" v-if="overview" >
    <div>
      <img src="../assets/planet-mars.svg" alt="planet mars"  class="planet-img">
    </div>
  </div>

  <div class="image-container-for-internal" v-if="internal" >
    <img src="../assets/planet-mars-internal.svg" alt="planet mars"  class="planet-img">
  </div>

  <div class="image-container-for-geology" v-if="geology">
    <div class="below-img">
      <img src="../assets/planet-mars.svg" alt="image of planet" class="planet-img">
    </div>
    <div class="top-img">
      <img src="../assets/geology-mars.png" class="planet-geology">
    </div>
  </div>
</div>

<!---------- Container for Jupiter pictures ---------->

<div v-if="planet === 'Jupiter'">
  <div class="image-container-for-overview" v-if="overview" >
    <div>
      <img src="../assets/planet-jupiter.svg" alt="planet jupiter"  class="planet-img">
    </div>
  </div>

  <div class="image-container-for-internal" v-if="internal" >
    <img src="../assets/planet-jupiter-internal.svg" alt="planet jupiter"  class="planet-img">
  </div>

  <div class="image-container-for-geology" v-if="geology">
    <div class="below-img">
      <img src="../assets/planet-jupiter.svg" alt="image of planet" class="planet-img">
    </div>
    <div class="top-img">
      <img src="../assets/geology-jupiter.png" class="planet-geology">
    </div>
  </div>
</div>

<!---------- Container for Saturn pictures ---------->

<div v-if="planet === 'Saturn'">
  <div class="image-container-for-overview" v-if="overview" >
    <div>
      <img src="../assets/planet-saturn.svg" alt="planet saturn"  class="planet-img">
    </div>
  </div>

  <div class="image-container-for-internal" v-if="internal" >
    <img src="../assets/planet-saturn-internal.svg" alt="planet saturn"  class="planet-img">
  </div>

  <div class="image-container-for-geology" v-if="geology">
    <div class="below-img">
      <img src="../assets/planet-saturn.svg" alt="image of planet" class="planet-img">
    </div>
    <div class="top-img">
      <img src="../assets/geology-saturn.png" class="planet-geology">
    </div>
  </div>
</div>

<!---------- Container for Uranus pictures ---------->

<div v-if="planet === 'Uranus'">
  <div class="image-container-for-overview" v-if="overview" >
    <div>
      <img src="../assets/planet-uranus.svg" alt="planet uranus"  class="planet-img">
    </div>
  </div>

  <div class="image-container-for-internal" v-if="internal" >
    <img src="../assets/planet-uranus-internal.svg" alt="planet uranus"  class="planet-img">
  </div>

  <div class="image-container-for-geology" v-if="geology">
    <div class="below-img">
      <img src="../assets/planet-uranus.svg" alt="image of planet" class="planet-img">
    </div>
    <div class="top-img">
      <img src="../assets/geology-uranus.png" class="planet-geology">
    </div>
  </div>
</div>


<!---------- Container for Neptune pictures ---------->

<div v-if="planet === 'Neptune'">
  <div class="image-container-for-overview" v-if="overview" >
    <div>
      <img src="../assets/planet-neptune.svg" alt="planet neptune"  class="planet-img">
    </div>
  </div>

  <div class="image-container-for-internal" v-if="internal" >
    <img src="../assets/planet-neptune-internal.svg" alt="planet neptune"  class="planet-img">
  </div>

  <div class="image-container-for-geology" v-if="geology">
    <div class="below-img">
      <img src="../assets/planet-neptune.svg" alt="image of planet" class="planet-img">
    </div>
    <div class="top-img">
      <img src="../assets/geology-neptune.png" class="planet-geology">
    </div>
  </div>
</div>











</template>

<script>
export default {
  name: 'Earth',

  props: ['overview', 'internal', 'geology', 'planet']
}
</script>


<style scoped>


.image-container-for-geology,
.image-container-for-overview,
.image-container-for-internal
{
    
    /* width: 60%; */
    text-align: center;
    
    /* padding-top: 5%; */
}

.planet-img{
    max-height: 600px;
}
.below-img{
    margin-top: 187px;
}
.top-img{
    position: relative;
    z-index: 2;
    bottom: 150px;
}

.planet-geology{
    width: 150px;
} 



@media screen and (max-width: 1125px){
    .planet-img{
    max-height: 400px;
}
}

@media screen and (max-width: 900px) {
    .image-container-for-geology, .image-container-for-overview, .image-container-for-internal {
    height: 430px;
}

.below-img{
    margin-top: 0;

}

.top-img img{
    height: 100px;
    width: auto;
}

}

@media screen and (max-width: 650px){
    .planet-img{
        max-height: 300px;
        width: auto;
    }

    .image-container-for-geology, .image-container-for-overview, .image-container-for-internal {
    height: 350px;
}
}


@media screen and (max-width: 495px){

    .image-container-for-geology,
.image-container-for-internal,
.image-container-for-overview{
    height: 250px;
    width: 100%;
    padding-top: 50px;
}


.planet-img{
    max-height: 200px;
    width: auto;
}

.top-img{
    bottom: 50px;
}
.top-img img{
    max-height: 70px;
    width: auto;
}


}



</style>