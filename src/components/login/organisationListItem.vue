<template>
  <div class="listItem row" v-on:click="itemClicked">
    <div class="col-10">
    <h4>{{organisation.Name}}</h4>
   </div>
  </div>
</template>

<script>
export default {
  name: "organisationListItem",
  props: ["organisation"],
  methods: {
    itemClicked() {
      this.$emit("organisationClicked", this.organisation);
    }
  }
};
</script>

<style scoped>
.listItem:hover {
  background-color: #dddddd;
  cursor: pointer;
}

.listItem{
  height: 75px;  
}

img{
  height: 75px;
  width: 75px;
  padding: 5px;
}

h4{
  padding-left: 30px;
  margin-top: 20px; 

  font-size: 1.5vw;
}

@media only screen and (max-width: 767px) {
h4{
  font-size: 4.5vw;
}

}

</style>
