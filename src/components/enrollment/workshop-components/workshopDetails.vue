<template>
  <div class="loginCodeContent">
    <div class="row">
      <!-- <div class="video embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" allowfullscreen="" :src="selectedWorkshop.VideoURL"></iframe>
      </div> -->
   <div class="col-10 workshopname">
    <h4>{{selectedWorkshop.Workshopname}}</h4>
   </div>
       <hr/>
      <div class="col"> 
      <p>{{selectedWorkshop.WorkshopDescription}}</p>
    </div>
    </div>

    <div class="codeForm">
        <button type="submit" class="btn" @click='enrollWorkshop'>Selecteren</button>
        <button type="submit" class="btn-cancel" @click='cancelModal'>Annuleren</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "workshopDetail",
  data() {
    return {
      code: ""
    };
  },
  props: ["selectedWorkshop"],
  methods: {
    cancelModal() {
      this.$emit('cancelModal')
    },
    enrollWorkshop(){
      this.$emit('workshopSelected', this.selectedWorkshop);
    }
  }
};
</script>

<style scoped>

.codeForm {
  padding-left: 100px;
  padding-right: 100px;
  margin: auto;
  text-align: center;
  margin-top: 10%;
  transform: translateY(-50%);
}

.codeInput{
  margin-top: 10px;
  margin-bottom: 10px;
}

.video {
  margin-left: 5px;
  width: 95%;
  height: auto;
  border: 5px solid #f1991e;
}

.btn-cancel {
  transform: translateY(2.5px);
  margin-left: 15px;
  margin-top: 4px;
  height: 40px;
}

.workshopname {
  text-align: center;
}

h4{
  margin-left: 20%;
  margin-top: 12.5%;
}

hr{
  background-color: #f1991e;
  width: 80%;
  margin: 0 10%;
  height: 1.5px;
  margin-bottom: 5%;
}

p {
  font-size: 0.9rem;
}
</style>


