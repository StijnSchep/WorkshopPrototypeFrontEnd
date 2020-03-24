<template>
    <div class='root'>
        <h5>{{ name }}</h5>
        <hr/>

        <component :is='content' v-bind:data='contentData'></component>

    </div>
</template>

<script>
export default {
    name: 'org-dashboard-section',
    props: [
        'name',
        'contentData',
        'content'
    ]
}
</script>

<style scoped>
    .root {
        background-color: white;
        box-shadow: 0 1px 6px 0 rgba(51,51,51,.25);
        margin: 10px;
    }

    h1, h2, h3, h4, h5, h6 {
        text-align: center;
        padding: 10px;
    }

    hr {
        background-color: #F1991E;
        color: #F1991E;
        border-color: #F1991E;
        height: 2px;
        width: 50px;
    }

</style>


