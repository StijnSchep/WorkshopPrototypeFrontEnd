<template>
    <div class='roundBox'>
        <roundItem v-for='round in data' v-bind:key='round' v-bind:round='round' />
    </div>
</template>

<script>
    import item from './roundItem';

    export default {
        name: 'round-selector',
        props: ['data'],
        data() {
            return {

            }
        },
        components: {
            roundItem: item
        }
    }
</script>

<style scoped>
    .roundBox {
        box-shadow: 0 1px 6px 0 rgba(51,51,51,.25);
        display: inline-block;
        height: 30vh;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
