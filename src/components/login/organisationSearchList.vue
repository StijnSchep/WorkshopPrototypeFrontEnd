<template>
  <div class="searchContent">
    <input type="text" class="defaultInput searchInput" v-model="organisationInput" placeholder="Organisatie zoeken...">
    <div class="organisationList">
      <organisationListItem
        v-for="organisation in filterList"
        v-bind:key="organisation.ID"
        v-bind:organisation="organisation"
        v-on:organisationClicked="onOrganisationClicked"
      />
    </div>
  </div>
</template>

<script>
import organisationListItem from "./organisationListItem";
export default {
  name: "organisationSearchList",
  props: ["organisations"],
  data() {
    return {
      organisationInput: '',
      hasChanged: false,
      filteredOrganisationList: ''
    };
  },
    computed: {
    filterList() {
      if(this.hasChanged === false) {
        return this.organisations
      } else {
        return this.filteredOrganisationList
      }
    }
  },
  components: {
    organisationListItem: organisationListItem
  },
  methods: {
    onOrganisationClicked(organisation) {
      this.$emit("organisationClicked", organisation);
    }
  },
  watch: {
    organisationInput: function(val) {
      this.hasChanged = true
      this.filteredOrganisationList = this.organisations.filter(function checkOrganisationName(
        organisation
      ) {
        return organisation.Name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.searchContent {
  height: 70vh;
  margin-bottom: 10px;
}

.searchInput{
  width: 100%;
  height: 30px;
}

.organisationList{
  overflow-y: auto;
  overflow-x: hidden;
  position:relative;
  height: calc(100% - 50px);
  box-shadow: 0px 1px 6px 0px rgba(51,51,51,.25);
  padding: 10px;
  margin-top: 20px;
  background-color: white;
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

@media only screen and (max-width: 767px) {
.searchContent{
  margin-bottom: 0px;
}
}

</style>


