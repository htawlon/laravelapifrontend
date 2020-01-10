<template>
  <div id="app" class="container my-5">
    <div id="nav" class="mb-5">
      <Navbar></Navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from'./views/Navbar'
  export default {
    components:{
      Navbar
    }
  }
</script>