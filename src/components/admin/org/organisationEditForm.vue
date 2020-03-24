<template>
<div>
    <p>Naam organisatie</p>
    <input v-model='form.organisationName' class='form-control defaultInput col-md-3' placeholder='naam organisatie...'/>
    <br>

    <!-- <p>Logo organisatie (optioneel)</p>
    <b-form-file class='defaultInput col-md-3' :state="Boolean(file)" accept=".jpg, .png, .gif" placeholder="Kies een logo..." drop-placeholder="Plaats bestand hier..." />
    <div class="mt-3" >Geselecteerd bestand: {{ form.file ? form.file : '' }}</div>
    <br> -->

    <template>
        <b-form-file multiple placeholder="Kies een logo..." class="defaultInput col-4" accept=".jpg, .png, .gif" :state="Boolean(file)">
            <template slot="file-name" slot-scope="{ names }">
                <b-badge variant="dark">{{ names[0] }}</b-badge>
                <b-badge v-if="names.length > 1" variant="dark" class="ml-3">+ {{ names.length - 1 }} Meer bestanden</b-badge>
            </template>
        </b-form-file>
    </template>
    <br>
    <br>
    <button class='btn' @click='editOrganisation()'>Bijwerken</button>

</div>
</template>

<script>
export default {
    name: 'organisation-form',
    data() {
        return {
            form: {
                organisationName: '', // name behind the [.] can change depending on the database params
                file: ''
            }
        }
    },
    methods: {
        editOrganisation() {
            if (this.organisationName === '') {
                alert('Voer een naam in voor de organisatie');
                return;
            } else {
                this.$dao.updateOrganisation(this.$route.params.index, localStorage.getItem('token'), this.form.organisationName, this.form.file, (message, result) => {
                    if (message === 'SUCCESS') {
                        document.location.assign('/inschrijfsysteem/admin/dashboard/organisaties');
                    } else {
                        alert('Iets is mis gegaan bij het aanpassen van de organisatie')
                    }
                });

            }
        }
    },
    created() {
        this.$dao.getOrganisationById(this.$route.params.index, localStorage.getItem('token'), (message, result) => {
            if (message === 'SUCCESS') {
                this.form.organisationName = result.Name
                this.form.file = result.Logo
            } else {
                console.log('hi')
            }
        })
    }
}
</script>

<style scoped>
input {
    margin: 0;
    border-radius: 0;
}

.btn {
    width: 100px;
}
</style>
