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
                    <el-breadcrumb-item>Aanpassen</el-breadcrumb-item>
                </el-breadcrumb>
                <reservationEditGeneralinfoComponent v-if="firstStage" v-on:nextClicked="toSecondStage" v-on:backClicked="toFirstStage" />
                <reservationEditGroupinfoComponent v-if="secondStage" v-on:nextClicked="toThirdStage" v-on:backClicked="toFirstStage" />
                <reservationEditRoundsComponent v-if="thirdStage" v-on:nextClicked="toThirdStage" v-on:backClicked="toSecondStage" />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<style scoped src="../../../assets/css/dashStyle.css"></style>

<script>
import reservationEditGeneralinfoComponent from "../../../components/admin/reservationEditGeneralinfoComponent.vue";
import reservationEditGroupinfoComponent from "../../../components/admin/reservationEditGroupinfoComponent.vue";
import reservationEditRoundsComponent from "../../../components/admin/reservationEditRoundsComponent.vue";
import Subtab from "../../../components/admin/subtabComponent.vue";

export default {
    data() {
        return {
            firstStage: true,
            secondStage: false,
            thirdStage: false,
            visible: false
        };
    },
    methods: {
        toFirstStage() {
            this.firstStage = true
            this.secondStage = false;
            this.thirdStage = false;
        },
        toSecondStage() {
            this.firstStage = false
            this.secondStage = true;
            this.thirdStage = false;
        },
        toThirdStage() {
            this.firstStage = false;
            this.secondStage = false
            this.thirdStage = true;
        }
    },
    components: {
        reservationEditGeneralinfoComponent: reservationEditGeneralinfoComponent,
        reservationEditGroupinfoComponent: reservationEditGroupinfoComponent,
        reservationEditRoundsComponent: reservationEditRoundsComponent,
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
