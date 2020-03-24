<template>
  <div class="listItem row" v-on:click="itemClicked">
    <div class="col-2"> 
    </div>
    <div class="col-10">
    <h3>{{workshop.WorkshopName}}</h3>
   </div>
  </div>
</template>

<script>
export default {
  name: "workshopListItem",
  props: ["workshop"],
  methods: {
    itemClicked() {
      this.$emit("workshopClicked", this.workshop);
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
  height: 72.5px;  
}

img{
  height: 75px;
  width: 75px;
  padding: 5px;
}

h3{
  padding-left: 30px;
  margin-top: 20px;
}

</style>


