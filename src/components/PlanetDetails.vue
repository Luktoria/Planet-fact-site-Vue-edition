<template>
    <div class="planet-container">
        <div class="image-container">
            <div>
            <img :src="'/src/' + Data[this.currentIndex].images.planet" alt="image of planet" v-if="showPlanet" class="planet-img">
            </div>
            <div class="top-img">
            <img :src="'/src/' +  Data[this.currentIndex].images.geology" v-if="showPlanet && showGeology" class="planet-geology">
            </div>

        </div>

        <div class="info-container">
            <h1>{{ Data[currentIndex].name }}</h1>

            <p> {{ Data[currentIndex].overview.content }}</p>

         

            <p>{{ Data[currentIndex].overview.source }}</p>
        </div>
    </div>


</template>

<script>

import Data from "../../data.json";

export default {


    data() {
        return {
            currentIndex: "",
            showPlanet: true,
            showInternal: false,
            showGeology: true,
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
    height: 800px;
}

.info-container{
    width: 40%;
    padding-top: 10%;
}

.image-container{
    width: 50%;
    text-align: center;
    padding-top: 5%;
}

.top-img{
    position: relative;
    bottom: 25%;
}

.planet-geology{
    width: 150px;
   
} 

</style>