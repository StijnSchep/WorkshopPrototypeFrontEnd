<template>
    <div class='workshopList'>
        <div class='workshopItem addWorkshop' @click='showModal = true'>
            <p class='addWorkshopText'><i class="fas fa-plus"></i> Workshop toevoegen</p>
        </div>

        <workshopModal 
            :selectedWorkshops='workshops'
            v-if='showModal'
            @cancel='showModal = false'
            @selection='addWorkshop'/>

        <div class='scrollbox'>
            <div class='workshopItem' v-for='workshop in workshops' :key='workshop.WorkshopID'>
                <span @click='selectWorkshop(workshop)'>{{ workshop.Name }} [{{ workshop.maxParticipants }}]</span>
                <i class="fas fa-trash" @click='deleteWorkshop(workshop)'></i>
            </div>
        </div>

    </div>
</template>

<script>
import workshopModal from './selectModal';

export default {
    props: ['workshops'],
    data() {
        return {
            index: 1,
            showModal: false
        }
    },
    methods: {
        addWorkshop(workshop) {
            this.showModal = false;
            this.workshops.push(workshop);
        },
        selectWorkshop(workshop) {
            this.$emit('selection', workshop);
        },
        deleteWorkshop(workshop) {
            this.$emit('removed', workshop);
            for(let i = 0; i < this.workshops.length; i++) {
                if(this.workshops[i].Name === workshop.Name) {
                    this.workshops.splice(i, 1)
                }
            }

            this.$forceUpdate();
        }
    },
    components: {
        workshopModal
    }
}
</script>

<style scoped>
    .fa-trash {
        line-height: 50px;
        margin-right: 10px;
        float:right;
    }


    .scrollbox {
        overflow: auto;
        height: calc(25vh - 50px)
    }

    .workshopItem {
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 2px solid #999;
    }

    .addWorkshop {
        border-bottom: 2px solid #333;
        background-color: #eee;
    }

    .workshopItem:hover {
        background-color: #eee;
        cursor: pointer;
    }
 
    .addWorkshop:hover {
        background-color: #F1991E;
        color: #fff!important;
        cursor: pointer;
        opacity: 1;
    }

    .workshopList {
        border: 2px solid #333;
        height: 25vh;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
</style>
