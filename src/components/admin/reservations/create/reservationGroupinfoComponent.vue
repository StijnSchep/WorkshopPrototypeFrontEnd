<template>
  <b-card class="mb-5 container">
    <div class="title">
      <h2>Reservering aanmaken</h2>
      <h4>Groepsinformatie importeren</h4>
    </div>
    <div class="row">
      <b-form-file
        v-model="file"
        class="defaultInput col-md-3"
        :state="Boolean(file)"
        accept=".xlsx"
        @change='onFileChange'
        placeholder="Kies een bestand..."
        drop-placeholder="Plaats bestand hier..."
      />
      <br>
    </div>
    <div class="mt-3">
      <br>
      <br>
      <br>
      <br>
    </div>

    <div class="data_import">
      <h4><b>Te importeren data:</b></h4>
      <div v-for="group in groups" :key='group.Name'>
        <p class='no-margin'>{{group.Name}}: {{group.Count}} deelnemers</p>
      </div>
    </div>

    <div class="row" id="bottom_buttons">
      <button class="btn-cancel" v-on:click="cancel()">Annuleren</button>
      <button class="btn" v-on:click="onBackClicked()">Terug</button>
      <button class="btn" v-on:click="onNextClicked()">Verder</button>
    </div>
  </b-card>
</template>


<script>
XLSX = require('xlsx');

export default {
  props: ['importData'],
  data() {
    return {
      groups: []
    };
  },
  methods: {
    onNextClicked() {
      this.$emit("nextClicked");
    },
    onBackClicked() {
      this.$emit("backClicked");
    },
    skipImport() {
      this.$emit("skipImport");
    },
    onFileChange(e) {
      const vm = this;
      const files = e.target.files, f = files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        
        const json = XLSX.utils.sheet_to_json(workbook.Sheets["Deelnemers"]);
        vm.importData.participants = json;

        vm.parseGroups(json);

      };
      reader.readAsArrayBuffer(f);
    },
    parseGroups(json) {
      let groups = [];
      json.forEach(participant => {
        let groupExists = false;
        groups.forEach(group => {
          if(participant.Groep === group.Name) {
            groupExists = true;
            group.Count++;
          }
        })

        if(!groupExists) {
          const group = {
            Name: participant.Groep,
            Count: 1
          }

          groups.push(group);
        }
      })

      this.groups = groups;

    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

.no-margin {
  margin: 0;
}

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
