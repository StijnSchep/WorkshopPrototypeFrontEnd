<template>
    <div>
        <i class="far fa-clock fa-5x centered"></i>
        <p> Rapporten zijn pas beschikbaar na de workshops </p>
    </div>
</template>

<script>
export default {
    name: 'no-download-content',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .centered {
        display: inline-block;
        margin-left: 50%;
        transform: translateX(-50%);
    }

    p {
        width: 100%;
        text-align: center;
    }
</style>
