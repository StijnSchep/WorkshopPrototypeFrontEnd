<template>
  <div>
    <div class="workshops">
      <WorkshopBox
        class="workshop-box"
        v-for="round in rounds"
        :selections='selections'
        :signature='signature'
        v-bind:key="round.ID"
        v-bind:round="round"
        v-on:openModal="openModal(round)"
      />
    </div>

    <div class="button-box col-lg-12">
      <a class="btn submit" role="button" @click="validateSelectedWorkshops">Inschrijven</a>
      <a class="btn" role="button">Annuleren</a>
    </div>
  </div>
</template>

<script>
import workshopBox from "./workshop-box";

export default {
  name: "WorkshopSelection",
  props: ["rounds", "userInfo", "selections", "signature"],
  components: {
    WorkshopBox: workshopBox
  },
  methods: {
    /* eslint-disable */
    logChoices() {
      console.log("logging choices...");
      console.log("Type of selected class:", typeof this.userInfo.class);
      console.log("Selected class:", this.userInfo.class.name);
      console.log("Type of selected user:", typeof this.userInfo.participant);
      console.log("Selected participant", this.userInfo.participant.name);
      console.log("Type of selected class:", typeof this.userInfo.email);
      console.log("Selected email", this.userInfo.email);
    },

    validateSelectedWorkshops() {
      let status = "success";
      for (let i = 0; i < this.rounds.length - 1; i++) {
        if (this.rounds[i].SelectedWorkshop === null) {
          status = "null";
          break;
        }
        for (let a = 0; a < this.rounds.length - 1 && i + a + 1 < this.rounds.length; a++) {
          if (
            this.rounds[i].SelectedWorkshop.WorkshopName ===
            this.rounds[i + a + 1].SelectedWorkshop.WorkshopName
          ) {
            status = "match";
            break;
          }
        }
      }

      if (status === "null") {
        alert("Selecteer voor elke ronde een workshop");
      }
      if (status === "match") {
        alert("Niet toegestaan om dezelfde workshop meerdere keren te kiezen.");
      }
      if (status === "success") {
        const body = {
          RegistreeId: this.userInfo.participant.RegistreeId,
          RoundWorkshops: []
        }

        this.rounds.forEach(round => {
          body.RoundWorkshops.push({
            RoundWorkshopId: round.SelectedWorkshop.RoundWorkshopID
          })
        })

        this.$router.push('/inschrijfsysteem/klaar');
          
        
      }
      
    },

    openModal(round) {
      this.$emit("openModal", round);
    }
  }
};
</script>

<style scoped>
.submit {
  margin-right: 10px;
}

.button-box {
  text-align: center;
}

.workshop-box {
  display: inline-block;
  margin: 20px;
  margin-bottom: 50px;
}

@media only screen and (min-width: 600px) {
  .workshops {
    width: 75%;
    min-height: 500px;
    margin: auto;
    padding: 0;
  }
}
</style>