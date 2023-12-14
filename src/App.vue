<template>
<TheNavbar/>
<hr>
<router-view></router-view>




</template>

<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
    components: {
        TheNavbar
    }
}


</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Antonio:wght@400;500&family=League+Spartan:wght@400;600&display=swap");

body{
    margin: 0;
    box-sizing: border-box;
    background-color: #070724;
    background-image: url("./assets/background-stars.svg");
    color: white;
}

hr{
    border-color: #9797974f;
}

</style>



