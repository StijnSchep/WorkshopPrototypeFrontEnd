<template>
    <div class="mainPanel">
      <div class="mainHead">
        <h1>Selecteer een workshop</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
        <workshopSearchList
          class="workshopSearchList"
          v-bind:workshops="workshops"
          v-on:workshopClicked="onWorkshopClicked"
        />
        </div>
        <div class="col-md-6" >
        <workshopDetails class="loginCode" 
          v-bind:selectedWorkshop="selectedWorkshop" 
          v-on:cancelModal="cancelModal"
          v-on:workshopSelected="workshopSelected"/>
        </div>
      </div>
    </div>
</template>


<script>
import workshopDetails from "../../components/enrollment/workshop-components/workshopDetails";
import workshopSearchList from "../../components/enrollment/workshop-components/workshopSearchList";

export default {
  name: "workshops",
  props: ["workshops"],
  data() {
    return {
      selectedWorkshop: ""
    };
  },
  components: {
    workshopDetails: workshopDetails,
    workshopSearchList: workshopSearchList
  },
  methods: {
    onWorkshopClicked(workshop) {
      this.selectedWorkshop = workshop;
    },
    cancelModal(){
      this.$emit('cancelModal')
    },
    workshopSelected(workshop) {
      this.$emit('workshopSelected', workshop);
    }
  }
};
</script>

<style scoped>
h1 {
    border-bottom: 3px solid #F1991E;
    
}

.mainHead {
    display: inline-block;
    margin: 0% 20%;
    margin-bottom: 30px;
}

.mainPanel {
  width: 80%;
  margin: auto;
  margin-top: 10%;
  /* margin-top: 0px; */
  background-color: #ffffff;
  color: #000;
}

</style>
