<template>
    <div>
        <h6>Vul hier je gegevens in</h6>
        <form>
            <div class="form-group">
                <label>Groep:</label>
                <select 
                    v-model="selectedGroup"
                    v-on:change="onGroupChange"
                    class="form-control input input-sm defaultInput">
                    <option v-for="group in groups" v-bind:key="group.ID" :value="group">{{ group.GroupName }}</option>
                </select>
            </div>

            <div class="form-group">
                <label class='control-label'>Naam:</label>
                <select 
                    class="form-control input input-sm defaultInput"
                    v-model="selectedParticipant"
                    v-on:change="onParticipantChange">
                    <option v-for="participant in participants" v-bind:key="participant.ID" :value="participant">{{ participant.Firstname }} {{ participant.Lastname }}</option>
                </select>
            </div>

            <div class="form-group">
                <label class='control-label'>Email:</label>
                <input 
                    type="email" 
                    class='form-control input input-sm defaultInput'  
                    v-on:keydown.enter.prevent="onEmailChange"
                    v-model="email" />
            </div>
        </form>
        
    </div>
</template>

<script>

export default {
    name: 'InformationForm',
    props: ['groups'],
    data() {
        return {
            selectedGroup: '',
            participants: [],
            selectedParticipant: '',
            email: ''
        }
    },
    methods: {
        onGroupChange() {
            this.participants = this.selectedGroup.Registrees
        },
        onParticipantChange() {
            this.$emit('selectedParticipant', this.selectedParticipant);
        },
        onEmailChange() {
            this.$emit('emailChanged', this.email);
        },
    }
}
</script>

<style scoped>
    .form-group {
        padding:0;
        margin:10px;
        display: grid;
        grid-template-columns: 20% 70%;
        grid-template-areas: 
            "a b" 
    }

    label {
        grid-area: a
    }

    .input {
        grid-area: b
    }
</style>


