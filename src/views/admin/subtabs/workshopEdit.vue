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
                    <el-breadcrumb-item>Aanpassen</el-breadcrumb-item>
                </el-breadcrumb>
                <workshopedit></workshopedit>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<style scoped src="../../../assets/css/dashStyle.css"></style>

<script>
import WorkshopEdit from '../../../components/admin/workshopEditComponent.vue'
import Subtab from '../../../components/admin/subtabComponent.vue'

export default {
    name: 'admin-editworkshop',
    data() {
        return {
            visible: false
        }
    },
    methods: {

    },
    components: {
        'workshopedit': WorkshopEdit,
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
