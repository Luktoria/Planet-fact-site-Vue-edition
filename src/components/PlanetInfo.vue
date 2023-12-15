<template>
            
                <h1>{{ name }}</h1>

                <div class="overview option" v-if="overview">
                    <p> {{ overviewContent }}</p>
                    <span>Source: </span>
                    <a :href="overviewSource">Wikipedia <img src="../assets/icon-source.svg"
                            alt="link-anchor-icon"></a>
                </div>

               <div class="structure option" v-if="internal">
                    <p> {{ internalContent }} </p>
                    <span>Source: </span>
                    <a :href="internalSource">Wikipedia <img src="../assets/icon-source.svg"
                            alt="link-anchor-icon"></a>
                </div>

                <div class="geology option" v-if="geology">
                    <p> {{ geologyContent }} </p>
                    <span>Source: </span>
                    <a :href="geologySource">Wikipedia <img src="../assets/icon-source.svg"
                            alt="link-anchor-icon"></a>
                </div> 
        

</template>

<script>

export default{
    props:['name', 'overview', 'overviewContent', 'overviewSource', 'internal', 'internalContent', 'internalSource', 'geology', 'geologyContent', 'geologySource' ]
}

</script>

<style scoped>

h1{
    font-family: 'Antonio', sans-serif;
    font-size: 80px;
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
}

p {
    font-family: 'League Spartan', sans-serif;
    font-size: 14px;
    line-height: 25px;
    color: #bfbfc7;
    height: 110px;
    margin-bottom: 40px;
}

.option {
    margin: 25px 0;
}

.option span,
.option a {
    color: #838391;
    font-family: 'League Spartan', sans-serif;
}

.option a {
    font-weight: 600;
}

@media screen and (max-width: 900px) {
    .title-and-facts {
        width: 100%;
        padding-right: 20px;
    }

    h1{
        font-size: 40px;
    }
}

@media screen and (max-width: 650px){
     p {
        height: auto;
    }
}


</style>