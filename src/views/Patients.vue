<template>
    <div>
        <i class="fab fa-accessible-icon fa-2x"></i> Patients
        <div class="dropdown-divider"></div>
        <div class="row" v-if="loading">
            <div class="col-2 offset-5 text-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div>fetching data from server....</div>
            </div>
        </div>
        <div v-for="(p,i) in patients" :key="i">
            <div class="card shadow-sm mb-2">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <h6> Patients Details</h6>
                            <hr>
                            <table class="table-borderless small">
                              <tr>
                                  <td>Name : {{p.patients_name}}</td>
                              </tr>
                                <tr>
                                    <td> Age : {{p.age}}</td>
                                </tr>
                                <tr>
                                    <td> Address: {{p.address}}</td>
                                </tr>
                                <tr>
                                    <td> Bed No. : {{p.table_no}}</td>
                                </tr>
                                <tr>
                                    <td> Doctor : {{p.doctor.doctor_name}}</td>
                                </tr>
                                <tr>
                                    <td> Special : {{p.doctor.special}}</td>
                                </tr>
                                <tr>
                                    <td> Phone : {{p.doctor.phone}}</td>
                                </tr>
                                <tr>
                                    <td> Date:{{bTime(p.created_at)}}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-sm-3">
                            <h6> Doctors Details</h6>
                            <hr>
                            <table class="table-borderless small">
                                <tr>
                                    <td> Name:{{p.doctor.doctor_name}}</td>
                                </tr>
                                <tr>
                                    <td> Special:{{p.doctor.special}}</td>
                                </tr>
                                <tr>
                                    <td> Phone:{{p.doctor.phone}}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-sm-3">
                            <h6> Diseases Details</h6>
                            <hr>
                            <table class="table-borderless table-hover">
                                <tr>
                                    <td> Disease Type:{{p.category.category_name}} </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import moment from 'moment'
    export default {
        name: "Patients",
        data(){
            return{
                patients:[],
                loading:false,
            }
        },
        created(){
           this.fetchPatients();
        },
        methods:{
            bTime(t){
               return moment(t).format('LLL');
            },
            fetchPatients(){
                this.loading=true;
                axios.get("http://192.168.43.137:8000/api/patients")
                    .then((res)=>{
                        this.patients=res.data;
                        this.loading=false;
                        //console.log(res)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }
        }

    }
</script>

<style scoped>

</style>