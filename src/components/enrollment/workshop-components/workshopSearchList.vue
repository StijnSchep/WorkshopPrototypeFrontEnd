<template>
  <div class="search">
    <input type="text" class="defaultInput searchInput" v-model="workshopInput" placeholder="Workshop zoeken...">
    <div class="organisationList">
      <workshopListItem
        v-for="workshop in filteredWorkshopList"
        v-bind:key="workshop.WorkshopID"
        v-bind:workshop="workshop"
        v-on:workshopClicked="onWorkshopClicked"
      />
    </div>
  </div>
</template>

<script>
import workshopListItem from "./workshopListItem";
export default {
  name: "workshopSearchList",
  props: ["workshops"],
  data() {
    return {
      workshopInput: "",
      filteredWorkshopList: this.workshops
    };
  },
  components: {
    workshopListItem: workshopListItem
  },
  methods: {
    onWorkshopClicked(workshop) {
      this.$emit("workshopClicked", workshop);
    }
  },
  watch: {
    workshopInput: function(val) {
      this.filteredWorkshopList = this.workshops.filter(function checkWorkshopName(
        workshop
      ) {
        return workshop.name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.search {
  height: 80vh;
}

.searchInput{
  width: 90%;
}

.organisationList{
  overflow-y: auto;
  overflow-x: hidden;
  position:relative;
  height: calc(100% - 51px);
  box-shadow: 0 1px 6px 0 rgba(51,51,51,.25);
  padding: 10px;
  margin-top: 20px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f5f5f5; 
}
 
::-webkit-scrollbar-thumb {
  background: #dddddd; 
}

::-webkit-scrollbar-thumb:hover {
  background: #777; 
}

</style>


