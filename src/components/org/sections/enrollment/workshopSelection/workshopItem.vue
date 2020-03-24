<template>
    <div class='row roundItem'>
        <div class='col-10'>
            <p class='inline margin-reset'>{{ workshop.name }}</p>
        </div>

        <div class='col-2'>
            <i class="fas fa-caret-right margin-reset"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: ['workshop']
}
</script>

<style scoped>
    .margin-reset {
        margin: 5px;
    }

    .inline {
        display: inline-block;
    }

    .roundItem {
        padding-left: 10px;
        padding-right: 10px;
        background-color: rgba(192, 86, 86, 0.1);
        border-bottom: 1px solid black
    }

    .roundItem:hover {
        cursor: pointer;
        background-color: rgba(192, 86, 86, 0.3);
    }
</style>
