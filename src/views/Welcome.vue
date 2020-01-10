<template>
<div class="row">
    <div class="col-sm-12 mb-4">
        <div class="card shadow">
            <div class="card-body bg-success">
                <h4>Patients</h4>
                <div class="dropdown-divider"></div>
                <router-link class="d-block text-center" to="/patients"> Details</router-link>
            </div>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card shadow">
            <div class="card-body bg-warning">
                <h4> Doctor</h4>
                <div class="dropdown-divider"></div>
                <router-link class="d-block text-center" to="/doctors"> Details</router-link>
            </div>
        </div>
    </div>
    <div class="col-sm-8">
    <div class="card shadow">
        <div class="card-body bg-secondary">
            <h4>Diseases</h4>
            <div class="dropdown-divider"></div>
            <router-link class="d-block text-center" to="/diseases"> Details</router-link>
        </div>
    </div>
</div>
</div>
</template>


<style scoped>

</style>