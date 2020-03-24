<template>
  <div>
      <header class="header sticky-top">
        <div class="topHeader">
        </div>
        <div class="bottomHeader">
        <img class="headerLogo" src="https://skoolworkshop.nl/wp-content/uploads/2017/05/logo.png" alt="Skoolworkshop.nl">        
        </div>
    </header>
    <div class="bg-image"></div>
    <div class="textwidget custom-html-widget">
      <link href="https://fonts.googleapis.com/css?family=Raleway:400%2C800%2C500" rel="stylesheet" property="stylesheet" type="text/css" media="all">
  <div class="mainHead" >
        <h1>SELECTEER DE ORGANISATIE</h1>
      </div>
    <div class="mainPanel">
      
      <div class="row">
        <div class="col-md-6 col-12">
        <organisationSearchList
          class="organisationSearchList"
          v-bind:organisations="organisations"
          v-on:organisationClicked="onOrganisationClicked"
        />
        </div>
        <div class="col-md-6 col-12" >
        <loginCode class="loginCode" v-bind:selectedOrganisation="selectedOrganisation"/>
        </div>
      </div>
    </div>
  </div>
   </div>
</template>

<script>
import loginCode from "../../components/login/loginCode";
import organisationSearchList from "../../components/login/organisationSearchList";

export default {
  name: "organisations",
  data() {
    return {
      organisations: [],
      selectedOrganisation: ""
    }
  },
  created() {
    this.$dao.getAllOrganisationsCallback((err, result) => {
            if(result) {
                this.organisations = result
            } else {
                console.log('krijg geen organisaties binnen')
            }
        })
  },
  components: {
    loginCode: loginCode,
    organisationSearchList: organisationSearchList
  },
  methods: {
    onOrganisationClicked(organisation) {
      this.selectedOrganisation = organisation;
    }
  }
};
</script>

<style scoped>
.bg-image {
  position: fixed;
  z-index: -1;
  background-image: url('https://skoolworkshop.nl/wp-content/uploads/2019/05/Workshop-Streetdance.jpg');
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px); 
}

.mainHead {
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
  z-index: 0; 
  color: white;
  font-family: Raleway;
}

h1{
font-size: 60px;
font-weight: 700;
margin: 20px;
}

.mainPanel {
  width: 65%;
  height: 80vh;
  margin: auto;
  margin-top: 30px;
  z-index: 0;
}

@media only screen and (max-width: 767px) {
.mainPanel {
  width: 85%;
}

h1{
font-size: 40px;
font-weight: 700;
margin: 20px;
}
}

</style>
