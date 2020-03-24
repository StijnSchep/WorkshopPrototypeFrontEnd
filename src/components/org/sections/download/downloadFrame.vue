<template>
    <component class='lowered' :is='content'></component>
</template>

<script>
import noResultsAvailable from './noResultsAvailable';

export default {
    props: ['data'],
    data() {
        return {
            content: null
        }
    },
    created: function setContent() {
        if(this.data.status === 'UNAVAILABLE') {
            this.content = noResultsAvailable
        }
    }
}
</script>

<style scoped>
    .lowered {
        margin-top: 50px;
    }
</style>
