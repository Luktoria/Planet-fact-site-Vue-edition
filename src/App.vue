<template>
<TheNavbar/>
<hr>
<router-view v-slot="{ Component, route }">
<transition name="fade-button" mode="out-in">
  <component :is="Component" :key="route.path"></component>
  </transition>
</router-view>




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


.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.15s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.15s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

</style>



