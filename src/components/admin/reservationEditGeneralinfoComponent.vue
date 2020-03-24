<template>
  <b-card class="mb-5 container">
    <div class="title">
      <h2>Reservering bijwerken</h2>
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
                  v-model="form.organisationName"
                  :fetch-suggestions="querySearch"
                  @select="handleSelect"
                  placeholder="Organisatie naam"
                  :trigger-on-focus="false"
                ></el-autocomplete>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="workshop_day">
          <span>
            <h5>Workshop dag</h5>
            <b-form-input v-model="form.date" type="date" class="defaultInput"></b-form-input>
          </span>
        </div>

        <div class="workshop_startdate">
          <h5>Inschrijf startdatum</h5>
          <span>
            <b-form-input v-model="form.start" type="date"></b-form-input>
          </span>
        </div>

        <div class="workshop_enddate">
          <h5>Inschrijf einddatum</h5>
          <span>
            <b-form-input v-model="form.end" id="type-date" type="date"></b-form-input>
          </span>
        

        <h5>Adres</h5>
          <span>
            <b-form-input v-model="form.address" id="type-date" type="text"></b-form-input>
        </span>

        <h5>Tijd</h5>
          <span>
            <b-form-input v-model="form.time" id="type-date" type="time"></b-form-input>
        </span>
        </div>
        <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
      </div>

      <div class="col-5" id="left_column">
        <b-form-group class="radio_buttons" label="Rollen">
          <b-form-radio-group
            id="radio-group-1"
            :checked="defaultRoll"
            :options="rolls"
            name="rolls"
            stacked
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="radio_buttons" label="Organisatie opslaan">
          <b-form-radio-group
            id="radio-group-2"
            :options="save"
            :checked="defaultSave"
            name="save-organisation"
            stacked
          ></b-form-radio-group>
        </b-form-group>

        <b-input class="contactcode" placeholder="Contactcode"></b-input>
        <b-input class="deelnemerscode" placeholder="Deelnemerscode"></b-input>
      </div>
    </div>

    <div class="row" id="bottom_buttons">
      <button class="btn-cancel">Annuleren</button>

      <button class="btn" v-on:click="onNextClicked()">Verder</button>
    </div>
  </b-card>
</template>


<script>
export default {
  data() {
    let reservationById = this.$dao.getReservationById(this.$route.params.index);
    let reservationDataById = reservationById;
    return {
      form: {
        organisationName: reservationDataById.title,
        date: reservationDataById.period,
        start: reservationDataById.start,
        end: reservationDataById.end,
        address: reservationDataById.address,
        time: reservationDataById.time
      },
      links: [],
      state: "",
      label: "label",
      defaultRoll: "first",
      defaultSave: "yes",
      rolls: [
        { value: "second", text: "kan klassenlijst importren" },
        { value: "first", text: "kan inschrijvingen inzien" }
      ],
      save: [{ value: "yes", text: "ja" }, { value: "no", text: "nee" }]
    };
  },
  methods: {
    onNextClicked() {
      this.$emit("nextClicked");
    },
    onBackClicked() {
      this.$emit("backClicked");
    },
    querySearch(query, cb) {
      var links = this.links;
      var results = query ? links.filter(this.createFilter(query)) : links;
      var top3 = results.slice(0, 3);
      cb(top3); // number of things returned
    },
    createFilter(query) {
      return link => {
        return link.value.toLowerCase().includes(query.toLowerCase());
      };
    },
    loadAll() {
      // console.log(this.$dao.getReservationById(this.$route.params.id))
      //return this.$dao.getReservationById(this.$route.params.index);
    },
    handleSelect(item) {
      this.label = item.value;
    }
  },
  mounted() {
    this.links = this.loadAll();
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
  margin-top: 85px;
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
