<template>


<div class="planet-facts-cards">
        <div class="card-item">
            <h4>ROTATION TIME</h4>
            <h2>{{ rotation }}</h2>
        </div>

        <div class="card-item">
            <h4>REVOLUTION TIME</h4>
            <h2>{{ revolution }}</h2>
        </div>

        <div class="card-item">
            <h4>RADIUS</h4>
            <h2>{{ radius }}</h2>
        </div>

        <div class="card-item">
            <h4>AVERAGE TEMP.</h4>
            <h2>{{ temperature }}</h2>
        </div>

    </div>

</template>

<script>

export default{

    props: ['rotation', 'revolution',  'radius', 'temperature'],

}

</script>

<style scoped>

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

@media screen and (max-width: 900px) {

.card-item h2{
    font-size: 24px;
}
}


@media screen and (max-width: 495px){
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