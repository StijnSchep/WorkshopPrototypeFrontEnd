<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    overflow-x: hidden;
  }

  .btn {
    border: 2px solid #555 !important;
    border-radius: 0px !important;
    opacity: 0.8;
    transition: 0.8s;
  }

  .btn:hover {
    background-color: #F1991E;
    color: #fff!important;
    cursor: pointer;
    opacity: 1;
  }

  .btn-cancel {
    border: 2px solid #555;
    background-color: #fff;
    border-radius: 0px;
    opacity: 0.8;
    transition: 0.8s;   
  }

  .btn-cancel:hover {
    background-color: #d9534f;
    color: #fff;
    cursor: pointer;
    opacity: 1;
  }

  .defaultInput {
    border-radius: 0;
  }

  .topHeader {
    width: 100%;
    height: 40px;
    background-color: #000;
}

.headerLogo {
    margin: 10px;
    height: 50px;
}

.bottomHeader {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.33), 0 7px 5px 3px rgba(0,0,0,.11);
    border-bottom: 3px solid #f49600;
}

.el-autocomplete-suggestion {
        z-index:9999 !important
    }
    .fc-content, .fc-event, .fc-button, .page-item.active .page-link {
   background-color: #F1991E !important;
   border-color: #F1991E !important;
}
.fc-unthemed td.fc-today {
  background-color: rgb(247, 212, 165) !important;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover, .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link, .el-breadcrumb__inner {
  color: rgb(245, 163, 48) !important;
}
.el-button--danger {
  background-color: #F1991E !important;
}
.el-button--danger:hover {
  background-color: rgb(224, 119, 87) !important;
}
</style>

