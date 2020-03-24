<template>
<div>
    <p>Naam organisatie</p>
    <input
      v-model="organisationName"
      class="form-control defaultInput col-md-3"
      placeholder="Naam organisatie..."
    >
    <br>
    <button class='btn' @click='createOrganisation()'>Aanmaken</button>

</div>
</template>

<script>
export default {
    name: "organisation-form",
    data() {
        return {
            organisationName: '',
            file: 'http'
        };
    },
    methods: {
        createOrganisation() {
            if (this.organisationName === "") {
                alert("Voer een naam in voor de organisatie");
                return;
            } else {
                this.$dao.postOrganisation(this.organisationName, this.file);
                alert('Organisatie aangemaakt')
                document.location.assign('/inschrijfsysteem/admin/dashboard/organisaties');
            }
        }
    }
};
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
