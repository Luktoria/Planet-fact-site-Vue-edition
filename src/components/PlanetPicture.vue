<template>

<div class="image-container-for-overview" v-if="overview">
            <div>
            <img :src="imageSrcOverview" alt="image of planet" class="planet-img">
            </div>
        </div>
        <div class="image-container-for-internal" v-if="internal">
            <img :src='imageSrcInternal' alt="image of planet" class="planet-img">
        </div>

        <div class="image-container-for-geology" v-if="geology">
            <div class="below-img">
            <img :src="imageSrcGeologyUpper" alt="image of planet"  class="planet-img">
            </div>
         <div class="top-img">
            <img :src="imageSrcGeologyBelow"  class="planet-geology">
            </div>
        </div>

</template>

<script>

export default{

    props: ['overview', 'imageSrcOverview', 'internal', 'imageSrcInternal', 'geology', 'imageSrcGeologyUpper','imageSrcGeologyBelow']
}

</script>

<style scoped>


.image-container-for-geology,
.image-container-for-overview,
.image-container-for-internal
{
    
    width: 60%;
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