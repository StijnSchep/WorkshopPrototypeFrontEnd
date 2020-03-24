<template>
<div id="workshopcreate" v-if="visible">
    <el-container>
        <el-aside width="230px">
            <div class="logo-container">
                <img src="../../../assets/SkoolOrangeLogo.jpg" alt="Skoolworkshop.nl" style="width:160px">
        </div>
                <subtab></subtab>
        </el-aside>
        <el-container>
            <el-main>
                <el-breadcrumb separator="/" class="breadcrumb-container">
                    <el-breadcrumb-item> <i class="el-icon-s-home"></i><a href="/inschrijfsysteem/admin/dashboard"> Dashboard</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/inschrijfsysteem/admin/dashboard/reserveringen">Reserveringen</a></el-breadcrumb-item>
                    <el-breadcrumb-item>Aanmaken</el-breadcrumb-item>
                </el-breadcrumb>

                <div v-if="error" class="alert alert-danger alert-dismissible">
                    <a href="#" @click='error = false' class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Error: </strong> {{ errorMessage }}
                </div>

                <div v-if="success" class="alert alert-success alert-dismissible">
                    <a href="#" @click='success = false' class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    Reservering is aangemaakt!
                </div>
                
                <reservationGeneralinfoComponent 
                v-if="firstStage" 
                :reservation="reservation.generalData"
                v-on:nextClicked="toSecondStage" 
                v-on:backClicked="toFirstStage"/>

                <reservationGroupinfoComponent 
                v-if="secondStage" 
                :importData="reservation.importData"
                v-on:skipImport="skipImport"
                v-on:nextClicked="toThirdStage" 
                v-on:backClicked="toFirstStage" />

                <reservationRoundsComponent 
                :rounds='reservation.rounds'
                :groups='reservation.groups'
                @finish='finishReservation'
                v-if="thirdStage" 
                v-on:back="toSecondStage" />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<style scoped src="../../../assets/css/dashStyle.css"></style>

<script>
import Personalinfo from "../../../components/admin/personalComponent.vue";
import reservationGeneralinfoComponent from "../../../components/admin/reservations/create/reservationGeneralinfoComponent.vue";
import reservationGroupinfoComponent from "../../../components/admin/reservations/create/reservationGroupinfoComponent.vue";
import reservationRoundsComponent from "../../../components/admin/reservations/create/reservationRoundsComponent.vue";
import Subtab from "../../../components/admin/subtabComponent.vue";

export default {
    data() {
        return {
            error: false,
            errorMessage: null,
            success: false,
            firstStage: true,
            secondStage: false,
            thirdStage: false,
            visible: false,
            reservation: {
                generalData: {
                    permissions: 4,
                    save: 0
                },

                importData: {
                    
                },

                rounds: [],
                groups: []
            }
        };
    },
    methods: {
        toFirstStage() {
            this.firstStage = true
            this.secondStage = false;
            this.thirdStage = false;
        },
        toSecondStage() {
            this.reservation.importData.skipped = false;
            this.firstStage = false
            this.secondStage = true;
            this.thirdStage = false;
        },
        toThirdStage() {
            this.firstStage = false;
            this.secondStage = false
            this.thirdStage = true;
        },
        skipImport() {
            this.reservation.importData.skipped = true;
            this.toThirdStage();
        },
        finishReservation() {
            this.reservation.generalData.minEnrollments = Number(this.reservation.generalData.minEnrollments);
            this.reservation.generalData.maxEnrollments = Number(this.reservation.generalData.maxEnrollments);

            this.$reservationdao.handleReservation(localStorage.getItem('token'), this.reservation, err => {
                 if(err) {
                     this.error = true;
                     this.errorMessage = err
                     return;
                 } else {
                     this.success = true;
                 }
            })
        }
    },
    components: {
        reservationGeneralinfoComponent: reservationGeneralinfoComponent,
        reservationGroupinfoComponent: reservationGroupinfoComponent,
        reservationRoundsComponent: reservationRoundsComponent,
        subtab: Subtab
    },
    created: function loadPage() {
        if (localStorage.getItem('token')) {
            this.$dao.validateToken(localStorage.getItem('token'), (err, role) => {
                if(err){
                    err.message
                }
                if(role === 'ADMIN'){
                    this.visible = true;
                } else {
                    this.$router.push({
                    path: '/inschrijfsysteem/admin/login'
            })
                } 
            })
            
            
        } else {
            this.$router.push({
                path: '/inschrijfsysteem/admin/login'
            })
        }
    }
};
</script>
