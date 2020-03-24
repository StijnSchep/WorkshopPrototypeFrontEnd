<template>
    <div class='roundBox'>
        <workshopItem v-for='workshop in data' v-bind:key='workshop' v-bind:workshop='workshop' />
    </div>
</template>

<script>
    import item from './workshopItem';

    export default {
        name: 'workshop-selector',
        props: ['data'],
        data() {
            return {

            }
        },
        components: {
            workshopItem: item
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
