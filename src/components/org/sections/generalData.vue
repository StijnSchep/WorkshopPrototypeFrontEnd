<template>
    <div class='row'>
        <div class='col-md-7'>
            <p>Workshopdag:</p>
            <br>
            <p>Begin inschrijven:</p>
            <p>Eind inschrijven:</p>
            <br>
            <br>
            <p>Status reservering:</p>
            <p>Deelnemerscode:</p>

        </div>

        <div class='col-md-5'>
            <p>{{ data.workshopDay }}</p>
            <br>
            <p>{{ data.start }}</p>
            <p>{{ data.end }}</p>
            <br>
            <br>
            <p>{{ data.status }}</p>
            <p>{{ data.code }}</p>

        </div>

    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style scoped>
    .row {
        margin-left: 20px;
        line-height: 75%;
        margin-top: 30px;
    }
</style>


