<template>
  <div>
    <header class="header sticky-top">
      <div class="topHeader"></div>
      <div class="bottomHeader">
        <img
          class="headerLogo"
          src="https://skoolworkshop.nl/wp-content/uploads/2017/05/logo.png"
          alt="Skoolworkshop.nl"
        >
      </div>
    </header>

        <div class="bg-image"></div>
    <div class="textwidget custom-html-widget">
      <link href="https://fonts.googleapis.com/css?family=Raleway:400%2C800%2C500" rel="stylesheet" property="stylesheet" type="text/css" media="all">
  <div class="mainHead" >
        <h1>DE INSCHRIJVING IS NOG NIET BEGONNEN!</h1>
      </div>
      
      <div class="componentPanel">
    <earlyComponent class="component"/>
    </div>
  </div>
  </div>
</template>

<script>
import earlyComponent from "../../components/unavailableState/earlyComponent.vue";
export default {
  name: "expiredParticipant",
   components: {
    earlyComponent
  }
}
</script>

<style scoped>
.componentPanel{
    width: 65%;
    margin: auto;
    margin-top: 30px;
    text-align: center;
    z-index: 0; 
}

.bg-image {
  position: fixed;
  z-index: -1;
  background-image: url('https://skoolworkshop.nl/wp-content/uploads/2019/05/Cultuurdag-BS.jpg');
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


@media only screen and (max-width: 767px) {
.componentPanel {
  width: 85%;
}

h1{
font-size: 40px;
font-weight: 700;
margin: 20px;
}
}
</style>
