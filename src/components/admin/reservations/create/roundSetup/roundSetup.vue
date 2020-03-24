<template>
    <div class='row roundHolder'>
        <div class='col-md-4 bordered'>
            <roundList 
                :rounds='rounds'
                v-on:roundSelected='changeRound'
            />
        </div>

        <div class='col-md-8 bordered '>
            <roundDetails 
                :selectedRound='selectedRound'
                :distinctGroups='groups'
                v-on:deleteRound='deleteRound'
                :show='show'
            />
        </div>
    </div>
</template>

<script>
import roundList from './roundList';
import roundDetails from './roundDetails';

export default {
    name: 'round-setup',
    props: ['rounds', 'groups'],
    data() {
        return {
            selectedRound: null,
            show: false
        }
    },
    components: {
        roundList,
        roundDetails
    },
    methods: {
        changeRound(round) {
            this.selectedRound = round
            this.show = true;
        },
        deleteRound(round) {
            this.selectedRound = null;

            for(let i = 0; i < this.rounds.length; i++) {
                if(this.rounds[i].Index === round.Index) {
                    this.rounds.splice(i, 1)
                    this.show = false;
                }
            }
        }
    }
}
</script>

<style scoped>
    .bordered {
        border: 2px solid #333;
        padding: 0;
    }

    .roundHolder {
        height: 50vh;
        margin-bottom: 20px;
    }
</style>
