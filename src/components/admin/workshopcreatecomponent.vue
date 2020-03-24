<template>
<div>
    <b-form-group id="input-group-1" label="Workshop:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.workshop" required placeholder="Workshop naam"></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Beschrijving:" label-for="input-2">
        <b-form-textarea id="textarea" v-model="form.desc" placeholder="Workshop beschrijving" rows="3" max-rows="6"></b-form-textarea>
    </b-form-group>

    <b-form-group id="input-group-3" label="Video link:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.url" required placeholder="Workshop Video link"></b-form-input>
    </b-form-group>

    <button class="btn" type="submit" variant="primary" @click="onSubmit()">Aanmaken</button>

</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                workshop: null,
                desc: null,
                url: null,
                image: '',
                id: 1
            },
            show: true
        }
    },
    methods: {
        onSubmit() {
            this.$dao.postNewWorkshop(this.form.workshop, this.form.desc, this.form.url, localStorage.getItem('token'), message => {
            if(message === 'SUCCESS'){
                alert('Workshop toegevoegd')
                document.location.assign('/inschrijfsysteem/admin/dashboard/workshops');
            } else {
                alert('Workshop kon niet toegevoegd worden.')
            }
            })
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.workshop = ''
            this.form.desc = ''
            this.form.url = ''
            this.form.image = ''
            this.form.id = null
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    },
    components: {

    }
}
</script>

<style scoped>
.high-box {
    height: calc(12em + 1.5rem + 2px);
}
.btn {
    width: 120px;
}
.btn-cancel{
    height: 40px;
    width: 80px;
    margin-left: 15px!important;
    transform: translateY(2.5px)
}
</style>
