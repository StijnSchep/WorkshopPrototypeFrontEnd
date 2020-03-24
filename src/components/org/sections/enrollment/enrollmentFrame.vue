<template>
    <div class='root-item'>
        <available />
        <hr />
        <p>De volgende deelnemers hebben zich nog niet ingeschreven:</p>
        <missing v-bind:data='participants'/>
    </div>
</template>

<script>
import available from './viewParticipation';
import missing from './participantList';

export default {
    name: 'enrollment-section',
    data() {
        return {
            participants: []
        }
    },
    components: {
        available, missing
    },

    created() {
        this.$dao.getNotEnrolledParticipants(localStorage.getItem('token'), (message, firstname, lastname, groupName) => {
            if(message === 'SUCCESS'){
                const newPart = {
                    name: firstname + ' ' + lastname,
                    group: groupName
                }
                this.participants.push(newPart)
            } 
            if(message === 'ERROR'){
                alert('Iets is mis gegaan bij het laden van niet ingeschreven deelnemers')
            }
        })
    }
}
</script>

<style scoped>
    .root-item {
        margin: 20px;
    }
</style>


