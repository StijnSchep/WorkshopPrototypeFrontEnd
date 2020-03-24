<template>
    <div v-if='show'>
        <div class='row'>
            <div class='col-md-5 padded'>
                <span>Naam:</span>
                <input class='form-control defaultInput' v-model='selectedRound.Name'>
            </div>

            <div class='col-md-3 padded'>
                <span>Begintijd:</span>
                <input class='form-control defaultInput' v-model='selectedRound.startTime' type='time'>
            </div>

            <div class='col-md-3 padded'>
                <span>Eindtijd:</span>
                <input class='form-control defaultInput' v-model='selectedRound.endTime' type='time'>
            </div>
        </div>

        <workshopSetup 
            :workshops='selectedRound.AvailableWorkshops'
            :distinctGroups='distinctGroups'
            :update='update'
        />


        <button class='btn btn-cancel' @click='deleteRound()'>Ronde verwijderen</button>
    </div>
</template>

<script>
import workshopSetup from './workshopSetup/workshopSetup';

export default {
    props: ['selectedRound', 'show', 'distinctGroups'],
    data() {
        return {
            update: false
        }
    },
    methods: {
        deleteRound() {
            this.$emit('deleteRound', this.selectedRound);
        }
    },
    components: {
        workshopSetup
    },
    watch: {
        selectedRound(newVal, oldVal) {
            if(oldVal !== null) {
                if(newVal.Index !== oldVal.Index) {
                    this.update = true;
                }
            }
    
        }
    }
}
</script>

<style scoped>
    .padded {
        padding: 20px;
        padding-left: 40px;
    }

    .btn-cancel {
        margin-top: 30px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>
