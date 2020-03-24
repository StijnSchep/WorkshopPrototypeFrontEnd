<template>
  <b-card class="mb-5 container">
    <div class="title">
      <h2>Reservering aanmaken</h2>
      <h4>Algemene gegevens</h4>
    </div>
    <div class="row">
      <div class="col-5" id="left_column">
        <!-- <b-form-select v-model="selectedDropboxItem" :options="options" class="mb-3 dropbox"> -->
        <div class="orgName">
          <el-row>
            <el-col class="flex-center">
              <div class="orgNameSug">
                <el-autocomplete
                  v-model="reservation.organisationName"
                  :fetch-suggestions="querySearch"
                  @select="handleChange"
                  placeholder="Organisatienaam"
                  :trigger-on-focus="false"
                ></el-autocomplete>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="workshop_day">
          <span>
            <h5>Workshop datum</h5>
            <b-form-input v-model="reservation.workshopDate" type="date" class="defaultInput"></b-form-input>
          </span>
        </div>

        <div class="workshop_startdate">
          <h5>Inschrijf startdatum</h5>
          <span>
            <b-form-input v-model="reservation.openingDate" type="date"></b-form-input>
          </span>
        </div>

        <div class="workshop_enddate">
          <h5>Inschrijf einddatum</h5>
          <span>
            <b-form-input v-model="reservation.endDate" id="type-date" type="date"></b-form-input>
          </span>
        

        <h5>Adres</h5>
          <span>
            <b-form-input v-model="reservation.address" id="type-date" type="text"></b-form-input>
        </span>

        <h5>Begintijd</h5>
          <span>
            <b-form-input v-model="reservation.startTime" id="type-date" type="time"></b-form-input>
        </span>

        <h5>EindTijd</h5>
          <span>
            <b-form-input v-model="reservation.endTime" id="type-date" type="time"></b-form-input>
        </span>
</div>
        <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
      </div>

      <div class="col-5" id="left_column">
        <b-form-group class="radio_buttons" label="Permissies">
          <b-form-radio-group
            id="radio-group-1"
            :options="rolls"
            name="rolls"
            v-model="reservation.permissions"
            stacked
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="radio_buttons" 
          :label="organisationSaveLabel">
          <b-form-radio-group
            id="radio-group-2"
            :options="save"
            name="save-organisation"
            stacked
            :disabled='organisationMatched'
            v-model="reservation.save"
          ></b-form-radio-group>
        </b-form-group>

        <b-input v-model="reservation.contact" class="contactcode" placeholder="Contactcode"></b-input>
        <b-input v-model="reservation.entree" class="deelnemerscode" placeholder="Deelnemerscode"></b-input>
        <br>

        <b-input v-model="reservation.minEnrollments" class="contactcode" type='number' placeholder="Minimale aantal gekozen workshops"></b-input>
        <b-input v-model="reservation.maxEnrollments" class="deelnemerscode" type='number' placeholder="Maximaal aantal gekozen workshops"></b-input>
      </div>
    </div>

    <div class="row" id="bottom_buttons">
      <button class="btn-cancel" v-on:click="onCancel()">Annuleren</button>

      <button class="btn" v-on:click="onNextClicked()">Verder</button>
    </div>
  </b-card>
</template>


<script>
export default {
  props: ['reservation'],
  data() {
    return {
      savedOrganisations: [],
      label: "label",
      rolls: [
        { value: 2, text: "Contact mag klassenlijst importeren" },
        { value: 3, text: "Contact mag inschrijvingen inzien" },
        { value: 1, text: "Contact mag importeren én inzien" },
        { value: 4, text: "Contact mag niet importeren en niet inzien" }
      ],
      save: [{ value: 1, text: "ja" }, { value: 0, text: "nee" }],
      organisationMatched: false
    };
  },
  methods: {
    onNextClicked() {
      this.$emit("nextClicked");
    },
    onCancel() {
      this.$emit("backClicked");
    },
    querySearch(query, cb) {
      this.handleChange();

      let organisations = this.savedOrganisations;
      let results = query ? organisations.filter(this.createFilter(query)) : organisations;
      let top3 = results.slice(0, 3);
      cb(top3); // number of things returned
    },
    createFilter(query) {
      return organisation => {
        organisation.value = organisation.Name
        return organisation.Name.toLowerCase().includes(query.toLowerCase());
      };
    },
    handleChange() {
      let matched = false;
      this.savedOrganisations.forEach(org => {
        if(org.Name === this.reservation.organisationName) {
          matched = true;
          this.organisationMatched = true;
          this.reservation.organisationID = org.ID
        }
      });
      
      if(!matched) {
        this.organisationMatched = false;
        this.reservation.organisationID = null
      }
    }
  },
  computed: {
    organisationSaveLabel() {
      if(this.organisationMatched) {
        return "Organisatie opslaan (Organisatie bestaat al!)"
      } else {
        return "Organisatie opslaan"
      }
    }
  },
  mounted() {
    this.$dao.getAllOrganisationsCallback((err, result) => {
      if(err) {
        console.log(err);
      } else {
        this.savedOrganisations = result;
      }
    })
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

body {
  margin: 0;
  padding: 0;
  background-color: #f3f5f7;
  font-family: "Open Sans", sans-serif;
}

.el-input__inner {
  width: 450px;
}

.el-autocomplete {
  width: 165%;
  border-radius: 0;
  border: 0.8px solid #000;
}

input.form-control {
  border-radius: 0;
  border: 0.8px solid #000;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

div.container {
  width: 80%;
}

div.title {
  text-align: center;
}

h2 {
  font-size: 25px;
}

h4 {
  font-size: 15px;
}

h5 {
  margin-top: 20px;
}

div.col-5#left_column {
  margin-top: 75px;
}

div.orgName {
  position: absolute;
  margin-left: 63px;
}

div.workshop_day {
  margin-top: 75px;
  margin-bottom: 40px;
}

div.workshop_day h5,
div.workshop_startdate,
div.workshop_enddate {
  padding-left: 65px;
  margin-top: 25px;
}

h5 {
  font-size: 15px;
}

div.workshop_day input {
  position: absolute;
  margin-left: 180px;
  margin-top: -40px;
  width: auto;
}

input.contactcode {
  margin-bottom: 30px;
}

input.contactcode,
input.deelnemerscode {
  margin-top: 0;
  margin-left: 100px;
}

.radio_buttons {
  margin-left: 100px;
  margin-top: -5px;
}

div#bottom_buttons {
  position: relative;
  margin-left: 300px !important;
  margin: 75px;
}

button.btn,
button.btn-cancel {
  margin-left: 20px;
  height: 40px;
  width: 100px;
}
</style>
