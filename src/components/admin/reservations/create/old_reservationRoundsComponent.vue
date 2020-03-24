<template>
  <b-card class="mb-5 container">
    <div class="title">
      <h2>Reservering aanmaken</h2>
      <h4>Rondes aanmaken</h4>
    </div>

    <b-row class="text-center">
      <!-- left column ---------------------------------------------------------------->

      <div class="col-4 round_column_left">
        <button class="btn add_round">+</button>
        <ul id="example-1">
          <div class="list_item">
            <li v-for="item in items" :key="item" v-bind:item="item">
              <p>{{ item.message }}</p>
            </li>
          </div>
        </ul>
        <button id="edit_button">
          <i class="fas fa-edit"></i>
        </button>
        <button id="delete_button">
          <i class="fas fa-ban"></i>
        </button>
      </div>

      <!-- right column ---------------------------------------------------------------->
      <div class="col-7 round_column_right">
        <div class="row">
          <div class="begin_time">
            <label>Begin tijd</label>
            <b-input id="time_input" type="time"/>
          </div>

          <div class="end_time">
            <label>Eind tijd</label>
            <b-input id="time_input" type="time"/>
          </div>
        </div>

        <div class="row mid_labels">
          <h6 id="available_workshops">Beschikbare workshops</h6>

          <h6 id="available_groups">Beschikbare groepen</h6>
        </div>

        <div class="row mid_lists">
          <div class="col-6">
            <button class="btn add_workshop">+</button>
            <ul id="example-2">
              <div class="list_item_workshops">
                <li v-for="item in items" :key="item" v-bind:item="item">
                  <p>{{ item.message }}</p>
                </li>
              </div>
            </ul>
          </div>
          <label id="next_icon">
            <i class="fas fa-chevron-right"></i>
          </label>
          <div class="col-6">
            <button class="btn add_group">+</button>
            <ul id="example-3">
              <div class="list_item_groups">
                <li v-for="item in items" :key="item" v-bind:item="item">
                  <p>{{ item.message }}</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </b-row>
    <div class="row" id="bottom_buttons">
      <button class="btn-cancel">Annuleren</button>
      <button class="btn" v-on:click="onBackClicked()">Terug</button>
      <button class="btn" v-on:click="onNextClicked()">Afronden</button>
    </div>
  </b-card>
</template>


<script>
export default {
  data() {
    return {
      links: [],
      state: "",
      label: "label",
      defaultRoll: "first",
      defaultSave: "yes",
      items: [
        { message: "Ronde 1" },
        { message: "Ronde 2" },
        { message: "Ronde 3" },
        { message: "Ronde 4" },
        { message: "Ronde 5" },
        { message: "Ronde 6" },
        { message: "Ronde 7" },
        { message: "Ronde 8" }
      ],
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

div.row {
  margin-left: 50px;
}

div.round_column_left {
  margin-top: 50px;
  height: 450px;
  border: 3px solid #555;
}

div.list_item {
  margin-top: 10px;
  font-size: 20px;
}

button#edit_button {
  margin-left: 5px;
  margin-right: 10px;
  height: 45px;
  width: 50px;
  background-color: #fff;
  opacity: 0.8;
  transition: 0.8s;
  border: 2px solid #555;
}

button#edit_button:hover {
  background-color: #f1991e;
  color: #fff;
  border: 2px solid #555;
  opacity: 1;
}

button#delete_button {
  margin-left: 5px;
  margin-right: 10px;
  height: 45px;
  width: 50px;
  background-color: #fff;
  opacity: 0.8;
  transition: 0.8s;
  border: 2px solid #555;
}

button#delete_button:hover {
  background-color: #d9534f;
  color: #fff;
  border: 2px solid #555;
  opacity: 1;
}

ul {
  width: 105%;
  height: 75%;
  overflow: scroll;
  overflow-x: hidden;
}

ul li {
  margin-top: 5px;
  margin-left: -40px;
  width: 115%;
  list-style: none;
  border: 3px solid #555;
}

ul li:hover {
  cursor: pointer;
  opacity: 0.6;
  background-color: #555;
  color: #fff;
}

ul li p {
  display: inline;
  text-align: center;
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

div.round_column_right {
  margin-top: 50px;
  margin-left: 25px;
  height: 450px;
  border: 3px solid #555;
}

div.end_time {
  position: absolute;
  margin-top: 15px;
  margin-left: 300px;
}

div.end_time label {
  position: absolute;
  margin-top: 7.5px;
  margin-left: -140px;
}

div.begin_time {
  position: absolute;
  margin-top: 15px;
  margin-left: 75px;
}

div.begin_time label {
  position: absolute;
  margin-top: 7.5px;
  margin-left: -140px;
}

h6#available_workshops {
  margin-top: 90px;
  margin-left: -45px;
}

h6#available_groups {
  margin-top: 90px;
  margin-left: 100px;
}

button.add_workshop {
  width: 95%!important;
  margin-left: -130px!important;
}

button.add_group {
  width: 95%!important;
  margin-left: -50px!important;
 }

 ul#example-2, ul#example-3 {
  width: 105%;
  height: 70%;
  margin-top: 5px;
  overflow: scroll;
  overflow-x: hidden;
}

#example-2 {
  margin-left: -60px;
}

#example-3 {
  margin-left: -20px;
}

#next_icon {
  position: absolute;
  margin-left: 35%;
  margin-top: 20%;
}

button.add_round {
  transform: translateX(-37.5px) !important;
  width: 113% !important ;
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
  width: 100px;
}
</style>
