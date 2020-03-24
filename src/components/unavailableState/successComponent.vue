<template>
  <div class="panel">
    <div class="expiredContent">
    <h4>De inschrijving wordt verwerkt.</h4>
    <hr/>
    </div>

  </div>
</template>

<script>
export default {
  name: "successComponent"
};
</script>

<style scoped>

.panel {
  padding: 15px;
  height: 60vh;
  box-shadow: 0 1px 6px 0 rgba(51,51,51,.25);
  margin-bottom: 200px;
  background-color: white;
}

.expiredContent{
    margin-top: 3%;
}

hr{
  background-color: #f1991e;
  width: 50px;
  height: 1.5px;
  margin-top: 30px;
}

</style>
