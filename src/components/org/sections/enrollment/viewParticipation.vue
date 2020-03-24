<template>
    <div class='row'>

        <div class='col-md-3'>
            <roundSelector v-bind:data='rounds'/>
        </div>

        <div class='col-md-5'>
            <workshopSelector v-bind:data='workshops' />
        </div>

        <div class='col-md-4'>
            <participantList v-bind:data='availableParticipants'/>
        </div>

    </div>
</template>

<script>
import roundSelection from './roundSelection/roundSelection';
import workshopSelection from './workshopSelection/workshopSelection';
import participantList from './participantList';

export default {
    name: 'participation-info',
    props: ['data'],
    data() {
        return {
            rounds: [
                {
                    id: 1,
                    name: 'Ronde 1'
                },
                {
                    id: 2,
                    name: 'Ronde 2'
                },
                {
                    id: 3,
                    name: 'Ronde 3'
                }
            ],
            workshops: [
                {
                    id: 1,
                    name: 'Workshop Breakdance'
                },
                {
                    id: 2,
                    name: 'Workshop Rap'
                },
                {
                    id: 3,
                    name: 'Workshop Dance-Fit'
                }
            ],
            availableParticipants: [
                {
                    name: 'Guus Lieben',
                    group: 'A2'
                }
            ]
        }
    },
    components: {
        roundSelector: roundSelection,
        workshopSelector: workshopSelection,
        participantList
    }
}
</script>

<style scoped>

</style>
