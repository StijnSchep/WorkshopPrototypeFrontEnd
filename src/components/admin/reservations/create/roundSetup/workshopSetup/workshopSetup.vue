<template>
    <div class='row'>
        <div class='col-md-6' >
            <p>Workshops voor deze ronde:</p>
            <workshopList 
                :workshops='workshops'
                @selection='workshopSelected'
                @removed='checkGroupDisplay'
            />
        </div>

        <div class='col-md-6'>
            <p>{{ addGroupText }}</p>
            <groupList
                v-if="showGroupList"
                :groups="selectedWorkshop.groups"
                :distinctGroups='distinctGroups'
            />
        </div>

    </div>
</template>

<script>
import workshopList from './workshopList'
import groupList from '../groupSetup/groupList'

export default {
    props: ['workshops', 'distinctGroups', 'update'],
    data() {
        return {
            selectedWorkshop: null
        }
    },
    components: {
        workshopList,
        groupList
    },
    computed: {
        addGroupText() {
            if(this.selectedWorkshop) {
                return 'Groepen voor ' + this.selectedWorkshop.Name.toLowerCase()
            } else {
                return 'Selecteer een workshop'
            }
        },
        showGroupList() {
            return this.selectedWorkshop !== null
        }
    },
    methods: {
        workshopSelected(workshop) {
            this.selectedWorkshop = workshop;
            this.showGroupList = true;
        },
        checkGroupDisplay(workshop) {
            if(this.selectedWorkshop.Name === workshop.Name) {
                this.selectedWorkshop = null;
                this.$forceUpdate();
            }
        }
    },
    watch: {
        update(newVal, oldVal) {
            this.selectedWorkshop = null;
            this.update = false;
        }
    }
}
</script>

<style scoped>
    .col-md-6 {
        padding-left: 50px;
        padding-right: 50px;
    }

    .row {
        height: 30vh;
    }

</style>
