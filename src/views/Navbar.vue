<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#!"><router-link to="/"><i class="fas fa-user fa-2x"></i> Hospital</router-link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

                <li class="nav-item">
                    <a class="nav-link" href="#!"><router-link to="/patients"><i class="fab fa-accessible-icon fa-2x"></i> Patients </router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#!"><router-link to="/doctors"><i class="fas fa-briefcase-medical fa-2x"></i> Doctors </router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#!"><router-link to="/diseases"><i class="fas fa-biohazard fa-2x"></i> Diseases </router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#!"><router-link to="/patient/new"><i class="fas fa-plus-square fa-2x"></i> Add New </router-link></a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar.vue"
    }
</script>

<style scoped>

</style>