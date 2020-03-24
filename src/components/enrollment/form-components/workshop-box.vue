<template>
<div>
    <div class='main-box'>
        <h5 v-if='round.StartTime && round.EndTime'>{{ round.Name }} ({{round.StartTime}} - {{round.EndTime}})</h5>
        <h5 v-else>{{ round.Name }}</h5>

        <div class='workshop-card'>

            <div v-if="round.SelectedWorkshop">
                <img src='../../../assets/checkmark.png' />
            </div>

            <div v-if="!round.SelectedWorkshop">
                <img src='' />
            </div>

            <h6 class='title' v-if='round.SelectedWorkshop'>{{ round.SelectedWorkshop.WorkshopName }}</h6>
            <h6 class='title' v-if='!round.SelectedWorkshop'>Geen selectie</h6>

            <button class='btn btn-primary' id="show-modal" @click="openModal()">AANPASSEN</button>
        </div>
    </div>
     
</div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        openModal() {
            this.$emit("openModal", this.round);
        }
    },
    watch: {
        signature(newVal, oldVal) {
            console.log('signature changed');
            this.selections.forEach(selection => {
                if(selection.RoundID === this.round.RoundID) {
                    this.round.SelectedWorkshop = selection.workshop
                    this.$forceUpdate();
                }
            })
        }
    },
    name: 'workshop-box',
    props: ['round', 'selections', 'signature']
}
</script>

<style scoped>
    .main-box {
        width:300px;
        height: 400px;
        display: inline-block
    }

    .workshop-card {
        box-shadow: 0 1px 6px 0 rgba(51,51,51,.25);
        width: 300px;
    }

    .workshop-card:hover {
        box-shadow: 0 1px 10px 0 rgba(51,51,51,.50);
        cursor: pointer;
    }

    img {
        padding: 0;
        margin: 0;
        width: 300px;
        height: 250px;
    }

    h4, h3, h5, h6{
        margin-top: 10px;
        text-align: center;
    }

    .btn-primary {
        margin-left: 50%;
        margin-bottom: 20px;
        margin-top: 20px;
        transform: translateX(-50%);
        background-color: white;
        border: 2px solid #555;
        color: #555;
        border-radius: 0;
        font-weight: bold;
    }
</style>


