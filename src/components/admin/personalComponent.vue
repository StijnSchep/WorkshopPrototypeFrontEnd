<template>
<div>
<!-- <div class='card'>
  <img src="https://media.licdn.com/dms/image/C5603AQFtz-38j_OWhw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=vrXTwgwZ1hcMFL8Ot_7HY_nS_uQHqfpM4kxXd72OfXw" class="card-img-top ">
  <div id='right'>
    <span class='username'>Clinten Pique</span><br>
    Administrator
  </div>
</div> -->
</div>
</template>

<script>
  export default {
    data() { 
      return {

      }
    }
  }
</script>

<style scoped>
.card {
   margin-top: -10px;
   margin-right: -10px;
   float:right;
   padding: 0.01em;
   padding-right: 20px;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
   background: white;
   width: auto;
   height: 3.5em;
   box-sizing: border-box;
   border-radius: 0.4em;
   cursor: pointer;
 }

 .card-img-top {
   flex: 1;
   width: 50px;
   height: 50px;
   border-radius: 100px;
   margin: 2px;
 }

 #right {
   flex: 1;
   margin-top: 18px;
   padding: 0.25vw;
   margin-left: 65px;
   border-left: 1px solid rgba(0, 0, 0, 0.15);
   padding-left: 1vw;
   transform: translateY(-65px);
   font-size: 12px;
 }

.username {
  text-shadow: 0 0 1px rgba(255, 0, 0, 0.4), 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: red;
  font-weight: 600;
  cursor: pointer;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.username:hover {
  color: #c80000;
}

.right {
  text-align: right;
  float: right;
}
</style>

