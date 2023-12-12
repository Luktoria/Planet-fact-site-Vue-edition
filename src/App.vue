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



