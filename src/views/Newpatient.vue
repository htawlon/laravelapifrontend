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
            <div class="alert alert-success" v-if="err.message">
                {{message}}
            </div>
    </div>
        <div class="row bg-secondary">
            <div class="col-sm-4 offset-sm-4">
                <form @submit.prevent="savePatient" @keydown="clearError($event.target)">
                    <div class="form-group">
                        <label for="patient_name"> Name</label>
                        <input v-model="patient.name" type="text" id="patient_name" class="form-control">
                        <div class="text-danger" v-if="error.patient_name">{{error.patient_name}}</div>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input v-model="patient.age" type="number" id="age" class="form-control">
                        <div class="text-danger" v-if="error.age">{{error.age}}</div>
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                       <textarea v-model="patient.address" id="address" class="form-control"></textarea>
                        <div class="text-danger" v-if="error.address">{{error.address}}</div>
                    </div>
                    <div class="form-group">
                        <label for="table_no"> Bed No.</label>
                        <input v-model="patient.table_no" type="text" id="table_no" class="form-control">
                        <div class="text-danger" v-if="error.table_no">{{error.table_no}}</div>
                    </div>
                    <div class="form-group">
                        <label for="category_id"> Diseases </label>
                        <select v-model="patient.category_id" class="custom-select" id="category_id">
                            <option v-for="c in categories" :value="c.id" :key="c.id">{{c.category_name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="doctor_id"> Doctors</label>
                        <select v-model="patient.doctor_id" type="text" class="custom-select" id="doctor_id">
                            <option v-for="c in doctors" :value="c.id" :key="c.id">{{c.doctor_name}}</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-outline-primary btn-block">Save</button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from "axios"
    export default {
        name: "Newpatient",
        data(){
            return {
                loading:false,
                doctors:[],
                categories:[],
                patient:{
                    name:'',
                    age:'',
                    address:'',
                    table_no:'',
                    doctor_id:'',
                    category_id:''
                },
                error:{
                    patient_name:'',
                    age:'',
                    address:'',
                    table_no:'',
                    category_id:'',
                    doctor_id:''
                }
            }
        },
        created(){
            this.fetchDoctors();
            this.fetchCategories();
        },
        methods:{
            clearError(e){
                console.log(e) 
                if(e.id=="patient_name"){
                    this.error.patient_name="";
                }
                if(e.id=="age"){
                    this.error.age="";
                }
                if(e.id=="address"){
                    this.error.address="";
                }
                if(e.id=="table_no"){
                    this.error.table_no="";
                }
                if(e.id=="category_id"){
                    this.error.category_id="";
                }
                if(e.id=="doctor_id"){
                    this.error.doctor_id="";
                }
            },
            savePatient(){
                axios.post("http://192.168.43.137:8000/api/patient/new",{
                    patient_name:this.patient.name,
                    age:this.patient.age,
                    address:this.patient.address,
                    table_no:this.patient.table_no,
                    category_id:this.patient.category_id,
                    doctor_id:this.patient.doctor_id
                })
                    .then((res)=>{
                        console.log(res)
                        const err=res.data;
                        if(err.message){
                            this.message=err.message
                            this.patient.name="";
                            this.patient.age="";
                            this.patient.address="";
                            this.patient.table_no="";
                            this.patient.category_id="";
                        }
                        if(err.patient_name[0]){
                            this.error.patient_name=err.patient_name[0];
                        }
                        if(err.age[0]){
                            this.error.age=err.age[0];
                        }
                        if(err.address[0]){
                            this.error.addres=err.address[0];
                        }
                        if(err.table_no[0]){
                            this.error.table_no=err.table_no[0];
                        }
                        if(err.category_id[0]){
                            this.error.category_id=err.category_id[0];
                        }
                        if(err.doctor_id[0]){
                            this.error.doctor_id=err.doctor_id[0];
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            },
            fetchDoctors(){
                axios.get("http://192.168.43.137:8000/api/doctors")
                    .then((res)=>{
                        this.doctors=res.data;
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            },
            fetchCategories(){
                axios.get("http://192.168.43.137:8000/api/categories")
                    .then((res)=>{
                        console.log(res)
                        this.categories=res.data;

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