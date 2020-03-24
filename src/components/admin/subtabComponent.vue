<template>
<el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1">
        <template slot="title">
            <el-link href="/inschrijfsysteem/admin/dashboard" type="danger">
                <i class="el-icon-caret-right"></i>
                <span>Dashboard</span>
            </el-link>
        </template>
    </el-menu-item>

    <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-caret-right"></i>
            <span>Workshops</span>
        </template>
        <el-menu-item index="2">
            <el-link href="/inschrijfsysteem/admin/dashboard/workshops" type="danger">
                <i class="el-icon-tickets"></i>
                <span>Overzicht workshops</span>
            </el-link>
        </el-menu-item>
        <el-menu-item index="2">
            <el-link href="/inschrijfsysteem/admin/dashboard/workshop/aanmaken" type="danger">
                <i class="el-icon-plus"></i>
                Workshop aanmaken
            </el-link>
        </el-menu-item>
    </el-submenu>

    <el-submenu index="3">
        <template slot="title">
            <i class="el-icon-caret-right"></i>
            <span>Organisaties</span>
        </template>
        <el-menu-item index="1-1">
            <el-link href="/inschrijfsysteem/admin/dashboard/organisaties" type="danger">
                <i class="el-icon-tickets"></i>
                Overzicht organisaties
            </el-link>
        </el-menu-item>
        <el-menu-item-group>
            <el-menu-item index="1-1">
                <el-link href="/inschrijfsysteem/admin/dashboard/organisaties/aanmaken" type="danger">
                    <i class="el-icon-plus"></i>
                    Organisatie aanmaken
                </el-link>
            </el-menu-item>
        </el-menu-item-group>
    </el-submenu>

    <el-submenu index="4">
        <template slot="title">
            <i class="el-icon-caret-right"></i>
            <span>Reserveringen</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="1-1">
                <el-link href="/inschrijfsysteem/admin/dashboard/reserveringen" type="danger">
                    <i class="el-icon-tickets"></i>
                    Overzicht reserveringen
                </el-link>
            </el-menu-item>
            <el-menu-item index="1-2">
                <el-link href="/inschrijfsysteem/admin/dashboard/reserveringen/aanmaken" type="danger">
                    <i class="el-icon-plus"></i>
                    Reservering aanmaken
                </el-link>
            </el-menu-item>
        </el-menu-item-group>
    </el-submenu>
</el-menu>
</template>

<style scoped>
.el-link.el-link--danger {
    color: white;
}
</style>
