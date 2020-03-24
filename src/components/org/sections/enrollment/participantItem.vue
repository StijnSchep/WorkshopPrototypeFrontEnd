<template>
    <div class='row listbox inline'>
        <div class='col-5 inline glimit'>
            <p>{{ data.group }}</p>
        </div>
        <div class='col-8 inline limit'>
            <p>{{ data.name }}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'participantItem',
    props: ['data'],
    data() {
        return {
        
        }
    }
}
</script>

<style scoped>
    .listbox {
        display: inline-block;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 12px;
        max-width: 250px;
        min-width: 250px;
    }

    p {
        display: inline-block;
    }

    .listbox {
        /* line-height: 50%; */
    }

    .inline {
        display: inline-block;
    }

    .col-9 {
        border-left: 1px solid #333;
    }

    .glimit {
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 14ch;
    }

    .limit {
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: -20px;
        white-space: nowrap;
        max-width: 20ch;
        margin-left: -20px;
    }
</style>
