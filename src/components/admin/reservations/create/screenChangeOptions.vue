<template>
    <div class='buttonHolder'>
        <button class='btn cancel' v-on:click="cancel()">Annuleren</button>
        <button class='btn' v-on:click="back()">Terug</button>
        <button class='btn' v-on:click="finish()">Afronden</button>
    </div>
</template>

<script>
export default {
    name: 'screen-change-options',
    methods: {
        finish() {
            this.$emit('finish');
        },
        back() {
            this.$emit('back');
        },
        cancel() {
            this.$emit('cancel');
        }
    }
}
</script>

<style scoped>
    .btn {
        margin-left: 5px;
        margin-right: 5px;
    }

    .cancel:hover {
        background-color: red;
    }
</style>
