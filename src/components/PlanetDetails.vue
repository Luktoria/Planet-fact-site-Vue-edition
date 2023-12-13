<template>
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
            <div>
            <img :src="'/src/' + Data[this.currentIndex].images.planet" alt="image of planet"  class="planet-img">
            </div>
            <div class="top-img">
            <img :src="'/src/' +  Data[this.currentIndex].images.geology"  class="planet-geology">
            </div>
        </div>

        <div class="info-container">
            <h1>{{ Data[currentIndex].name }}</h1>

            <div class="overview"  v-if="showOverview" >
            <p> {{ Data[currentIndex].overview.content }}</p>
            <p>{{ Data[currentIndex].overview.source }}</p>
            </div>

            <div class="structure" v-if="showInternal">
                <p> {{ Data[currentIndex].structure.content }} </p>
                <p> {{ Data[currentIndex].structure.source  }}</p>
            </div>

            <div class="geology" v-if="showGeology">
                <p> {{ Data[currentIndex].geology.content }} </p>
                <p> {{ Data[currentIndex].geology.source }} </p>
            </div>

            <div>
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
    height: 700px;
}

.info-container{
    width: 40%;
    /* padding-top: 10%; */
}

.image-container-for-geology,
.image-container-for-overview,
.image-container-for-internal
{
    
    width: 50%;
    text-align: center;
    /* padding-top: 5%; */
}

.top-img{
    position: relative;
    bottom: 25%;
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
    width: 50%;
    line-height: 25px;
    letter-spacing: 2.6px;
    border: 1px solid #38384F;
    margin: 10px 0;
    padding: 2% 2% 2% 5%;
    text-align: left;
}

button:hover{
    background-color: #38384F;
}

button span{
    color: #838391;
    padding: 0 15px;
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

</style>