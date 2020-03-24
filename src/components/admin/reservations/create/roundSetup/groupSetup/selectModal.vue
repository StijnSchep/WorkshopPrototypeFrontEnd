<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h3>Groep aanmaken</h3>
          </div>

          <div class="modal-body">
                <el-autocomplete
                    class='col-6'
                    v-model="input"
                    :fetch-suggestions="querySearch"
                    placeholder="Groepnaam"
                    :trigger-on-focus="false"
                    ></el-autocomplete>
          </div>

          <div class="modal-footer">
              <button class="btn btn-cancel" @click="$emit('cancel')">
                    Annuleren
              </button>
              <button class="btn" @click="handleSelection" :disabled='disabled'>
                Selecteren
              </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import uuid from 'uuid/v1'

export default {
    props: ['distinctGroups', 'selectedGroups'],
    data() {
        return {
            input: ""
        }
    },
    methods: {
        querySearch(query, cb) {
            let groups = this.distinctGroups;
            let results = query ? groups.filter(this.createFilter(query)) : groups;
            let top3 = results.slice(0, 3);
            cb(top3); // number of things returned
        },
        createFilter(query) {
            return group => {
                group.value = group.Name
                return group.Name.toLowerCase().includes(query.toLowerCase());
            };
        },
        handleSelection() {
            if(!this.disabled) {
                const group = {
                    Name: this.input,
                    Key: uuid()
                }
                this.$emit('selection', group);
            }
        }
    },
    computed: {
        disabled() {
            let exists = false;
            if(this.input === "") {
                return true;
            } else {
                this.selectedGroups.forEach(group => {
                    if(group.Name === this.input) {
                        exists = true;
                    }
                })

                return exists
            }
        }
    },
    mounted() {
        this.$dao.getAllWorkshopsCallback(localStorage.getItem('token'), result => {
            this.workshops = result;
        })
    }
}
</script>

<style scoped>

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
