<template>
    <b-card class="mb-5 container">
    <div class="title">
      <h2>Reservering aanmaken</h2>
      <h4>Rondes aanmaken</h4>
    </div>

    <roundSetup 
        :rounds='rounds'
        :groups='groups'
    />

    
    <screenChangeOptions 
        class='centered'
        v-on:cancel="cancel()"
        v-on:back="back()"
        v-on:finish="finish()"
    />
  </b-card>
</template>

<script>
import screenChangeOptions from './screenChangeOptions';
import roundSetup from './roundSetup/roundSetup';

export default {
    name:'round-creation-component',
    props: ['rounds', 'groups'],
    components: {
        screenChangeOptions,
        roundSetup
    },
    methods: {
        cancel() {
            this.$emit('cancel');
        },
        back() {
            this.$emit('back');
        },
        finish() {
            this.$emit('finish');
        }
    }
}
</script>

<style scoped>
    div.title {
        text-align: center;
    }

    h2 {
        font-size: 25px;
    }

    h4 {
        font-size: 15px;
    }

    .centered {
        display: inline-block;
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>
