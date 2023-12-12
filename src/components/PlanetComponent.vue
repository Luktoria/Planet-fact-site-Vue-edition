<template>

<img :src="img" alt="">
<p>{{ '.' + img }}</p>

</template>

<script>
export default{
    props: ['img']
}

</script>