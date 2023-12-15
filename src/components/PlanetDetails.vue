<template>

<div class="mobile-button-container">
            <button :class="[showOverview ? this.$route.params.name + '-mobile-active' : '']" @click="activateOverview"> OVERVIEW</button>
            <button :class="[showInternal ? this.$route.params.name + '-mobile-active' : '']" @click="activateInternal"> STRUCTURE</button>
            <button :class="[showGeology ? this.$route.params.name + '-mobile-active' : '']" @click="activateGeology">SURFACE</button>
        </div>

        <hr class="mobile-hr">


    <div class="planet-container">

        <div class="image-container-for-overview" v-if="showOverview">
            <div>
            <img :src="'/src/' + Data[this.currentIndex].images.planet" alt="image of planet" class="planet-img">
            </div>
        </div>
        <div class="image-container-for-internal" v-if="showInternal">
            <img :src="'/src/' + Data[this.currentIndex].images.internal" alt="image of planet" class="planet-img">
        </div>

        <div class="image-container-for-geology" v-if="showGeology">
            <div class="below-img">
            <img :src="'/src/' + Data[this.currentIndex].images.planet" alt="image of planet"  class="planet-img">
            </div>
         <div class="top-img">
            <img :src="'/src/' +  Data[this.currentIndex].images.geology"  class="planet-geology">
            </div>
        </div>

        <div class="info-container">
            <div class="title-and-facts">
            <h1>{{ Data[currentIndex].name }}</h1>

            <div class="overview option"  v-if="showOverview" >
            <p> {{ Data[currentIndex].overview.content }}</p>
            <span>Source: </span>
            <a :href="Data[currentIndex].overview.source">Wikipedia <img src="../assets/icon-source.svg" alt="link-anchor-icon"></a>
            </div>

            <div class="structure option" v-if="showInternal">
                <p> {{ Data[currentIndex].structure.content }} </p>
                <span>Source: </span>
            <a :href="Data[currentIndex].structure.source">Wikipedia <img src="../assets/icon-source.svg" alt="link-anchor-icon"></a>
            </div>

            <div class="geology option" v-if="showGeology">
                <p> {{ Data[currentIndex].geology.content }} </p>
                <span>Source: </span>
            <a :href="Data[currentIndex].geology.source">Wikipedia <img src="../assets/icon-source.svg" alt="link-anchor-icon"></a>
            </div>
        </div>


            <div class="web-button-container">
            <button :class="[showOverview ? this.$route.params.name + '-active' : '']" @click="activateOverview"> <span>01 </span> OVERVIEW</button>
            <button :class="[showInternal ? this.$route.params.name + '-active' : '']" @click="activateInternal"> <span>02 </span> INTERNAL STRUCTURE</button>
            <button :class="[showGeology ? this.$route.params.name + '-active' : '']" @click="activateGeology"> <span>03 </span>SURFACE GEOLOGY</button>
        </div>

       
        </div>
    </div>

    <div class="planet-facts-cards">
        <div class="card-item">
            <h4>ROTATION TIME</h4>
            <h2>{{ Data[currentIndex].rotation }}</h2>
        </div>

        <div class="card-item">
            <h4>REVOLUTION TIME</h4>
            <h2>{{ Data[currentIndex].revolution }}</h2>
        </div>

        <div class="card-item">
            <h4>RADIUS</h4>
            <h2>{{ Data[currentIndex].radius }}</h2>
        </div>

        <div class="card-item">
            <h4>AVERAGE TEMP.</h4>
            <h2>{{ Data[currentIndex].temperature }}</h2>
        </div>

    </div>


</template>

<script>

import Data from "../../data.json";

export default {


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

        activateOverview(){
            this.showOverview = true;
            this.showInternal = false;
            this.showGeology = false;
        },

        activateInternal(){
            this.showOverview = false;
            this.showInternal = true;
            this.showGeology = false;
        },

        activateGeology(){
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
.planet-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
}

.mobile-button-container{
    display: none;
}

.mobile-hr{
    display: none;
}

.info-container{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info-container h1{
    font-family: 'Antonio', sans-serif;
    font-size: 80px;
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
}

.info-container p{
    font-family: 'League Spartan', sans-serif;
    font-size: 14px;
    line-height: 25px;
    color: #bfbfc7;
    height: 110px;
    margin-bottom: 25px;
}

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

button{
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

button:hover{
    background-color: #38384F;
}

button span{
    color: #838391;
    padding: 0 15px;
}

.option{
    margin: 25px 0;
}

.option span,
.option a {
    color: #838391;
    font-family: 'League Spartan', sans-serif;
}

.option a{
    font-weight: 600;
}


.planet-facts-cards{
    display: flex;
    width: 80%;
    margin: 0 auto;
}

.card-item{
    border: 1px solid #9797974d;
    width: 25%;
    margin: 10px;
    padding: 1% 1% 1% 2%;
}

.card-item h4{
    font-family: 'League Spartan', sans-serif;
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    color: #838391;
}

.card-item h2{
    font-family: 'Antonio', sans-serif;
    font-size: 40px;
    letter-spacing: -1.5px;
    text-transform: uppercase;
    margin: 0 0 5px 0;
}


.Saturn-active{
    background-color: #CD5120
}

.Mercury-active{
    background-color: #419EBB;
}

.Venus-active{
    background-color:#EDA249;
}

.Earth-active{
    background-color: #6f2ed6;
}

.Mars-active{
    background-color: #D14C32;
}

.Jupiter-active{
    background-color: #D83A34;
}

.Uranus-active{
    background-color: #1EC1A2;
}

.Neptune-active{
    background-color: #2D68F0;
}

/* Css media queries start */

@media screen and (max-width: 1225px) {

.planet-img{
    max-height: 400px;
}

.info-container {
    width: 30%;
}

}

@media screen and (max-width: 900px) {

.planet-container{
    flex-direction: column;
    justify-content: normal;
}

.info-container {
    flex-direction: row;
    width: 90%;
    align-items: center;
}

.title-and-facts{
    width: 50%;
    padding-right: 20px;
}

.info-container h1{
    font-size: 40px;
}

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

.card-item h2{
    font-size: 24px;
}
}

@media screen and (max-width: 650px) {

    .info-container p{
        height: auto;
    }
    .planet-img{
        max-height: 300px;
        width: auto;
    }

    .image-container-for-geology, .image-container-for-overview, .image-container-for-internal {
    height: 350px;
}

}

@media screen and (max-width: 495px){
    .web-button-container{
        display: none;
    }

    .mobile-button-container{
        display: block;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        font-size: 9px;
        width: 100%;
        text-align: center;
    }

    .mobile-hr{
    display: block;
}
    .mobile-button-container button{
        text-align: center;
        background: none;
	color: inherit;
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
    line-height: 0;
    }
    .planet-container{
    height: auto;
}
    .info-container{
        display: block;
        text-align: center;
    }

    .title-and-facts{
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
    .Neptune-mobile-active  {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 16px;
 
}
   

.Saturn-mobile-active{
    text-decoration-color: #CD5120;
}

.Mercury-mobile-active{
    text-decoration-color: #419EBB;
}

.Venus-mobile-active{
    text-decoration-color:#EDA249;
}

.Earth-mobile-active{
    text-decoration-color: #6f2ed6;
}

.Mars-mobile-active{
    text-decoration-color: #D14C32;
}

.Jupiter-mobile-active{
    text-decoration-color: #D83A34;
}

.Uranus-mobile-active{
    text-decoration-color: #1EC1A2;
}

.Neptune-mobile-active{
    text-decoration-color: #2D68F0;
}

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

.planet-facts-cards{
    width: 100%; 
    flex-direction: column;
}

.card-item{
    width: 90%;
}

.card-item h2,
.card-item h4{
    display: inline-block;
    padding: 3%;
}

.card-item h2{
    float: right;
    font-size: 20px;
    font-weight: 500;
}

.card-item h4{
    font-size: 10px;
    font-weight: 700;
}

}




</style>