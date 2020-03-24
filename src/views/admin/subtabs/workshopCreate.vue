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
                    <el-breadcrumb-item><a href="/inschrijfsysteem/admin/dashboard/workshops">Workshops</a></el-breadcrumb-item>
                    <el-breadcrumb-item>Aanmaken</el-breadcrumb-item>
                </el-breadcrumb>
                <workshopcreate></workshopcreate>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<style scoped src="../../../assets/css/dashStyle.css"></style>

<script>
import Workshopcreate from '../../../components/admin/workshopcreatecomponent.vue'
import Subtab from '../../../components/admin/subtabComponent.vue'

export default {
    name: 'admin-createworkshop',
    data() {
        return {
            visible: false
        }
    },
    methods: {

    },
    components: {
        'workshopcreate': Workshopcreate,
        'subtab': Subtab
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
}
</script>
