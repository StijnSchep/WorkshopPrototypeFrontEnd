<template>
  <b-card class="mb-5 container">
    <div class="title">
      <h2>Reservering bijwerken</h2>
      <h4>Groepsinformatie importeren</h4>
    </div>
    <div class="row">
      <b-form-file
        v-model="file"
        class="defaultInput col-md-3"
        :state="Boolean(file)"
        accept=".jpg, .png, .gif"
        placeholder="Kies een logo..."
        drop-placeholder="Plaats bestand hier..."
      />
      <br>
    </div>
    <div class="mt-3">
      <div class="chosen_file">Geselecteerd bestand: {{ file ? file.name : '' }}</div>
      <br>
      <br>
      <button class="btn import">Importeren</button>
    </div>

    <div class="data_import">
      <h4>Te importeren data</h4>Groep 1 50 deelnemers
      <br>Groep 2 25 deelnemers
      <br>Groep 3 75 deelnemers
    </div>

    <button class="btn-cancel import_skip">Importeren overslaan</button>

    <div class="row" id="bottom_buttons">
      <button class="btn-cancel">Annuleren</button>
      <button class="btn" v-on:click="onBackClicked()">Terug</button>
      <button class="btn" v-on:click="onNextClicked()">Verder</button>
    </div>
  </b-card>
</template>


<script>
export default {
  data() {
    return {
      file: "",
      groep: "1",
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
      return this.$dao.getOrganisations();
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


div.row {
  margin-top: 32px !important;
  margin-left: 125px;
}

custom-file b-form-file.defaultInput.col-md-3.is-invalid {
  margin-left: 75px !important;
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

div.col-5#left_column {
  margin-top: 75px;
}

button.btn-cancel {
  width: auto !important;
}

button.import_skip {
  margin-left: 40% !important;
}

button.import,
div.chosen_file {
  margin-left: 125px !important;
}

div.data_import {
  margin-left: 60%;
  transform: translateY(-170px) !important;
}

button.import_skip {
  margin-top: 5px;
}

div#bottom_buttons {
  position: relative;
  margin-left: 280px !important;
  margin: 75px;
}

button.btn,
button.btn-cancel {
  margin-left: 20px;
  height: 40px;
  width: 110px;
}
</style>
