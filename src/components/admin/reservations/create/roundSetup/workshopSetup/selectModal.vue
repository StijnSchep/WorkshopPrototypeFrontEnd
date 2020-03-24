<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Workshop selecteren</h3>
                </div>

                <div class="modal-body">
                    <div class='row'>
                        <div class='col-6'>
                            <el-autocomplete
                            v-model="input"
                            :fetch-suggestions="querySearch"
                            @select="handleChange"
                            placeholder="Workshopnaam"
                            :trigger-on-focus="false"
                            ></el-autocomplete>
                        </div>

                        <div class='col-6'>
                            <b-input v-model="maxParticipants" type='number' placeholder="Aantal plaatsen"></b-input>
                        </div>

                    </div>
                </div>

          <div class="modal-footer">
              <button class="btn btn-cancel" @click="$emit('cancel')">
                    Annuleren
              </button>
              <button class="btn" @click="handleSelection" :disabled='disable'>
                Selecteren
              </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import uuid from 'uuid/v1';

export default {
    props: ['selectedWorkshops'],
    data() {
        return {
            workshops: [],
            workshop: null,
            input: "",
            disable: true,
            maxParticipants: null
        }
    },
    methods: {
        querySearch(query, cb) {
            this.handleChange();
            let workshops = this.workshops;
            let results = query ? workshops.filter(this.createFilter(query)) : workshops;
            let top3 = results.slice(0, 3);
            cb(top3); // number of things returned
        },
        createFilter(query) {
            return workshop => {
                workshop.value = workshop.Name
                return workshop.Name.toLowerCase().includes(query.toLowerCase());
            };
        },
        handleSelection() {
            if(!this.disable) {
                this.workshop.Key = uuid()
                this.workshop.groups = []
                this.workshop.maxParticipants = Number(this.maxParticipants)
                this.$emit('selection', this.workshop);
            }
        },
        handleChange() {

            let isWorkshop = false;
            let isSelected = false;
            let workshopObject = null;

            this.workshops.forEach(workshop => {
                if(this.input === workshop.Name) {
                    isWorkshop = true;
                    workshopObject = workshop;

                    this.selectedWorkshops.forEach(sWorkshop => {
                        if(sWorkshop.Name === workshop.Name) {
        
                            isSelected = true;
                        }
                    })
                }
            })

            if(isWorkshop && isSelected) {
                this.disable = true;
            } else if (isWorkshop && !isSelected) {
                this.workshop = workshopObject;

                if(Number(this.maxParticipants) > 0) {
                    this.disable = false;
                } else {
                    this.disable = true;
                }
            } else if (!isWorkshop) {
                this.disable = true;
            }

            
        }
    },
    mounted() {
        this.$dao.getAllWorkshopsCallback(localStorage.getItem('token'), (err, result) => {
            if(err !== "ERROR") {
                this.workshops = result;
            }
        })
    },
    watch: {
        maxParticipants(newVal, oldVal) {
            this.handleChange();
        }
    }
}
</script>

<style scoped>
    .el-autocomplete {
        width: 100%;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 600px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
