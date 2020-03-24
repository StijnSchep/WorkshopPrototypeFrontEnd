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

    <button class="btn" type="submit" variant="primary" @click="onSubmit()">Opslaan</button>
    <button class="btn-cancel" id="bt1" type="reset" variant="danger" @click="onReset()">Reset</button>
</div>
</template>

<script>
import { all } from 'q';
export default {
    data() {
        return {
            form: {
                workshop: '',
                desc: '',
                url: '',
                id: ''
            },
            show: true
        }
    },
    methods: {
        onSubmit() {
            this.$dao.updateWorkshop(this.$route.params.index , localStorage.getItem('token'), this.form.workshop, this.form.desc, this.form.url, (message, result) => {
                if(message === 'SUCCESS'){
                    document.location.assign('/inschrijfsysteem/admin/dashboard/workshops');
                } else {
                    alert('Update is niet gelukt')
                }
            });
            

        },
        onReset() {
            // Reset our form values
            this.form.workshop = ''
            this.form.desc = ''
            this.form.url = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    },
    created() {
        this.$dao.getWorkshopById(this.$route.params.index, localStorage.getItem('token'), (message, result) => {
            if (message === 'SUCCESS') {
                this.form.workshop = result.Name
                this.form.desc = result.Description
                this.form.url = result.WorkshopVideos[0].VideoUrl
                this.form.id = result.WorkshopId
            } else {
                this.tableData = null
            }
        });
    }
}
</script>

<style scoped>
.high-box {
    height: calc(12em + 1.5rem + 2px);
}

.btn {
    width: 80px;
}

.btn-cancel {
    height: 40px;
    width: 80px;
    margin-left: 15px !important;
    transform: translateY(2.5px)
}
</style>
