<template>
    <nav>
        <div>
            <h2>The Planets</h2>
        </div>
        <div class="list-container">
            <ul v-for="planet of Data" :key="planet.name" :id="planet.name">
                <router-link :to="{ name: 'name', params: { name: planet.name } }">
                    <p>{{ planet.name }}</p>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
import Data from "../../data.json";

export default {
    data() {
        return {
            Data
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

h2 {
    display: inline-block;
    width: 30%;
}

ul {
    display: inline-block;
    list-style-type: none;
}

.list-container {
    grid-area: 1 / 2 / 2 / 4; 
    text-align: right;
}

a{
    color: white;
    text-decoration: none;
}
</style>