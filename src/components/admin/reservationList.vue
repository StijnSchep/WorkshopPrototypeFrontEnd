<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input class="defaultInput" v-model="filter" placeholder="Typ om te zoeken"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="2d" label="Sorteren" class="mb-0">
          <b-input-group>
            <b-form-select class="defaultInput" v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- geen --</option>
            </b-form-select>
            <b-form-select
              class="defaultInput"
              v-model="sortDesc"
              :disabled="!sortBy"
              slot="append"
            >
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Per pagina" class="mb-0">
          <b-form-select class="defaultInput" v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    ></b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import moment from "moment";
export default {
  data() {
    return {
      items: [],
      fields: [
        {
          key: "Name",
          label: "Organisatie naam",
          sortable: true,
          class: "text-center"
        },
        {
          key: "OpeningDate",
          label: "Startdatum",
          sortable: true,
          class: "text-center",
          formatter: date => {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
          }
        },
        {
          key: "EndDate",
          label: "Einddatum",
          sortable: true,
          class: "text-center",
          formatter: date => {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
          }
        },
        {
          key: "WorkshopDate",
          label: "Workshopdatum",
          sortable: true,
          class: "text-center",
          formatter: date => {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
          }
        },
        {
          key: "location",
          label: "Adres",
          sortable: true,
          class: "text-center"
        },
        {
          key: "startTime",
          label: "Begintijd",
          sortable: false,
          class: "text-center",
          formatter: date => {
            return moment(date, "YYYY-MM-DDTHH:mm:ss.sss ").format("HH:mm");
          }
        },
        {
          key: "endTime",
          label: "Eindtijd",
          sortable: false,
          class: "text-center",
          formatter: datetime => {
            return moment(datetime, "YYYY-MM-DDTHH:mm:ss.sss ").format("HH:mm");
          }
        },
        { key: "actions", label: "" }
      ],
      totalRows: null,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
    };
  },
  computed: {
    rows() {
        return this.items.length
    },
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return {
            text: f.label,
            value: f.key
          };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    (this.totalRows = this.items.length),
      this.$dao.getAllReservationsCallback((err, result) => {
        if (result) {
          this.items = result;
        } else {
          console.log("error");
        }
      });
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style scoped>
table {
  width: 105% !important;
  font-size: 13.5px;
}

button {
  transform: scale(0.85);
}
button.deletebutton {
  margin-left: -10px !important;
  margin-right: 20px;
}

.btn,
.btn-cancel {
  display: block;
  float: left;
  width: 100px;
  height: 35px;
  text-align: center;
  line-height: 0px;
  margin-right: 30px;
}

.btn {
  margin-left: 50px;
}
</style>
