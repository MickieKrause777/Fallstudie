<template>
<Header></Header>
<router-view></router-view>
<Footer></Footer>

</template>

<script>
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"


export default {
    name: "App",
    components: { 
        Footer,
        Header,
    },
  }
</script>
