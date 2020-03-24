<template>
  <div class="loginCodeContent">
    <div class="row selectedOrganisationName">
    <div class="col-10">
    <h3>{{selectedOrganisation.Name}}</h3>
   </div>
    </div>
    <hr/>
    <div class="codeForm">
      <form v-on:submit.prevent="onSubmitClicked">
        <label class="control-label">Code:</label>
        <br>
        <input type="text" class="defaultInput codeInput" v-model="code" name="code">
        <br>
        <input type="submit" value="Inloggen" class="btn">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginCode",
  data() {
    return {
      code: ""
    };
  },
  props: ["selectedOrganisation"],
  methods: {
    onSubmitClicked() {
     const role = ''

     this.$dao.postEnrollmentCode(this.selectedOrganisation.ID, this.code, (err, result) => {
       
       if(err){
         if (err.response.data.state) {
          if(err.response.data.state === 'PREPERIOD'){
            this.$router.push('/inschrijfsysteem/vroeg')
          } else if(err.response.data.state === 'BEFOREWORKSHOP' || 'AFTERWORKSHOP'){
            this.$router.push('/inschrijfsysteem/verlopen')
          }
         } else {
           alert('Code onjuist')
         }

       }
       
       if(result){
         this.role = result.data.role          
         if (this.role === "REGISTREE" || this.role === "CONTACT"){
           localStorage.setItem('token', result.data.token)

           const endpoint = this.role === "CONTACT" ? '/inschrijfsysteem/org' : '/inschrijfsysteem/inschrijven/' + this.selectedOrganisation.ID // Never assume contact first
           this.$router.push(endpoint);
          }        
        }

     })    
     }

 }

};

</script>

<style scoped>
.loginCodeContent {
  padding: 10px;
  height: 70vh;
  box-shadow: 0 1px 6px 0 rgba(51,51,51,.25);
  margin-bottom: 20px;
  background-color: white;
}


.codeForm {
  text-align: center;
  margin-top: 45%;
  transform: translateY(-50%);
}

.codeInput{
  margin-top: 15x;
  margin-bottom: 10px;
}

img{
    height: 75px;
  width: 75px;
}

h3{
  padding-left: 75px;
  margin-top: 23px;
   font-size: 2.0vw;
   text-align: center;
}

hr{
  background-color: #f1991e;
  width: 175px;
  height: 1.5px;
}

@media only screen and (max-width: 767px) {
.loginCodeContent{
  margin-top: 20px;
}

h3{
  font-size: 4.5vw;
}

.codeForm{
   margin-top: 40%;
}


}
</style>


