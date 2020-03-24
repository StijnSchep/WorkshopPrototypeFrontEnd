<template>
    <div class='box'>
        <participant v-for='participant in data' v-bind:key='participant' v-bind:data='participant' />
    </div>
</template>

<script>
import participant from './participantItem'

export default {
    props: ['data'],
    data() {
        return {
            
        }
    },
    components: {
        participant
    }
}
</script>

<style scoped>
    .box {
        overflow-y: auto;
        box-shadow: 0 1px 6px 0 rgba(51,51,51,.25);
        height: 30vh;
    }
</style>
