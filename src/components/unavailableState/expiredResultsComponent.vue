<template>
  <div class="panel">
    <div class="expiredContent">
    <h4>De inschrijving is gesloten, bekijk hier het resultaat:</h4>
    <hr/>
    <form v-on:submit.prevent="onSubmitClicked">
            <input type="submit" value="Downloaden" class="btn">
    </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "expiredResultsComponent",
methods: {
    onSubmitClicked(){
       this.$dao.getResultsParticipant()
    }
  }
};
</script>

<style scoped>
.btn{
    margin: 10px;
    margin-top: 50px;
}

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
