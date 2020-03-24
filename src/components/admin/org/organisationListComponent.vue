<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Filter" class="mb-1">
          <b-input-group>
            <b-form-input class="defaultInput" v-model="filter" placeholder="Typ om te zoeken"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="3" class="my-1">
        <b-form-group label-cols-sm="4" label="Per pagina" class="mb-1">
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
    >
      <template slot="name" slot-scope="row">{{ row.value.first }} {{ row.value.last }}</template>

      <template slot="editdelete" slot-scope="row">
        <el-button size="mini" v-on:click="handleEdit(row.item, row.index, $event.target)">Bijwerken</el-button>
        <el-button
          size="mini"
          type="danger"
          v-on:click="handleDelete(row.item, row.index, $event.target)"
        >Verwijderen</el-button>
      </template>
    </b-table>

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

    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      @hide="resetInfoModal"
      @ok="handleOk(infoModal.OrganisationId)"
    ></b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      fields: [
        //{ key: 'id', label: 'ID', sortable: true},
        {
          key: "Name",
          label: "Organisatie naam",
          sortable: true,
          prop: "organisatie",
          class: "text-left"
        },
        {
          key: "editdelete",
          label: "",
          class: "text-right"
        }
      ],
      totalRows: null,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      }
    };
  },
  computed: {
    rows() {
      return this.items.length;
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
      this.$dao.getAllOrganisationsCallback((err, result) => {
        if (result) {
          this.items = result;
        } else {
          console.log("error");
        }
      });
  },
  methods: {
    handleEdit(item, index) {
      document.location.assign(
        "/inschrijfsysteem/admin/dashboard/organisaties/bijwerken/" + item.ID
      );
    },
    handleDelete(item, index, button) {
      this.infoModal.title = `Weet u zeker dat u ${
        item.Name
      } wilt verwijderen?`;
      this.infoModal.OrganisationId = item.ID;
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    handleOk(id) {
      this.$dao.deleteOrganisation(
        id,
        localStorage.getItem("token"),
        (message, result) => {
          if (message === "SUCCESS") {
            window.location.reload();
          } else {
            alert("Iets is verkeerd gegaan");
          }
        }
      );
    }
  }
};
</script>

<style scoped>
table {
  width: 1180px !important;
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
  margin-left: -150px;
}
</style>
