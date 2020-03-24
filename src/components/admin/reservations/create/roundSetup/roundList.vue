<template>
    <div class='roundList'>
        <div class='roundItem addRound' @click='addRound()'>
            <p class='addRoundText'><i class="fas fa-plus"></i> Nieuwe Ronde</p>
        </div>

        <div 
            class='roundItem'
            v-for='round in rounds' 
            :key='round.Index' 
            @click='selectRound(round)'
        >
            <p class='round'>{{ round.Name }}</p>
        </div>
    </div>
</template>

<script>
import uuid from 'uuid/v1';

export default {
    props: ['rounds'],
    data() {
        return {
            index: 1
        }
    },
    methods: {
        addRound() {
            const newRound = {
                Index: uuid(),
                Name: 'Ronde ' + this.index,
                AvailableWorkshops: []
            }

            this.index++;
            this.rounds.push(newRound);
        },

        selectRound(round) {
            this.$emit('roundSelected', round);
        }
    }

}
</script>

<style scoped>
    .roundItem {
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 2px solid #999;
    }

    .addRound {
        border-bottom: 2px solid #333;
        background-color: #eee;
    }

    .roundItem:hover {
        background-color: #eee;
        cursor: pointer;
    }
 
    .addRound:hover {
        background-color: #F1991E;
        color: #fff!important;
        cursor: pointer;
        opacity: 1;
    }

</style>
