<template>
    <div class='groupList'>
        <div class='groupItem addGroup' @click='showModal = true'>
            <p class='addGroupText'><i class="fas fa-plus"></i> Groep toevoegen</p>
        </div>

        <groupModal 
            :distinctGroups='distinctGroups'
            :selectedGroups='groups'
            v-if='showModal'
            @cancel='showModal = false'
            @selection='addGroup'/>

        <div class='scrollbox'>
            
            <div class='groupItem' v-for='group in groupsToShow' :key='group.Key'>
                <span>{{ group.Name }}</span>
                <i class="fas fa-trash" @click='deleteGroup(group)'></i>
            </div>
        </div>

    </div>
</template>

<script>
import groupModal from './selectModal'

export default {
    props: ['groups', 'distinctGroups'],
    data() {
        return {
            index: 1,
            showModal: false
        }
    },
    computed: {
        groupsToShow() {
            return this.groups
        }
    },
    methods: {
        addGroup(newGroup) {
            this.showModal = false;

            let exists = false;
            this.distinctGroups.forEach(group => {
                if(group.Name === newGroup.Name) {
                    exists = true;
                }
            })

            if(!exists) {
                this.distinctGroups.push(newGroup);
            }

            this.groups.push(newGroup);
        },
        
        deleteGroup(group) {
            for(let i = 0; i < this.groups.length; i++) {
                if(this.groups[i].Key === group.Key) {
                    this.groups.splice(i, 1)
                }
            }

            this.$forceUpdate();
        }
    },
    components: {
        groupModal
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

    .groupItem {
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 2px solid #999;
    }

    .addGroup {
        border-bottom: 2px solid #333;
        background-color: #eee;
    }

    .groupItem:hover {
        background-color: #eee;
        cursor: pointer;
    }
 
    .addGroup:hover {
        background-color: #F1991E;
        color: #fff!important;
        cursor: pointer;
        opacity: 1;
    }

    .groupList {
        border: 2px solid #333;
        height: 25vh;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
</style>
