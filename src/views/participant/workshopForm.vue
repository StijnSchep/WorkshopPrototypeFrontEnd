<template>
<div>
      <header class="header sticky-top">
        <div class="topHeader">

        </div>
        <div class="bottomHeader">
        <img class="headerLogo" src="https://skoolworkshop.nl/wp-content/uploads/2017/05/logo.png" alt="Skoolworkshop.nl">        
        </div>
    </header>
    <div class='root'>
        <div class='formTop'>
            <InformationForm 
                v-bind:groups="groups" 
                v-on:selectedParticipant="onParticipantSelection" 
                v-on:emailChanged="onEmailChange"
                class='centered-x'/>
            <WorkshopInformation/>
        </div>
        <hr>

        <WorkshopSelection 
            class='selection'
            :selections="selections"
            :signature='signature'
            v-bind:rounds="rounds"
            v-bind:userInfo="userInfo"
            v-on:openModal="openModal"
            />
    </div>
     <modal v-if="showModal" >
        <modalContent 
        class='pushedDown'
        v-on:cancelModal="cancelModal"
        :workshops="selectedRound.AvailableWorkshops"
        @workshopSelected="workshopSelected"></modalContent>
    </modal>
    </div>  
    
</template>

<script>
    import InformationForm from '../../components/enrollment/form-components/informationForm';
    import WorkshopInformation from '../../components/enrollment/form-components/workshopInformation';
    import WorkshopSelection from '../../components/enrollment/form-components/workshopSelection';
    import modalContent from '../participant/enrollWorkshop';
    import uuid from 'uuid/v1';
 

    export default {
        name: 'workshopForm',
        components: {
            InformationForm: InformationForm,
            WorkshopInformation: WorkshopInformation,
            WorkshopSelection: WorkshopSelection,
            modalContent: modalContent

        },
        data() {
            return {
                groups: [],
                rounds: [],
                selections: [],
                selectedRound: null,
                userInfo: {},
                showModal: false,
                signature: uuid()
            }
        },
        mounted() {
        this.$dao.getGroupsByOrganisationId(this.$route.params.organisationId, localStorage.getItem('token'), (err, result) => {
        if (result) {
            console.log(result)
          this.groups = result;
        } else {
          console.log(err);
        }
      });
        },
        methods: {
            openModal(round) {
                this.selectedRound = round;
                this.showModal = true
            },
            cancelModal() {
                this.showModal = false;
            },
            onGroupChange(val) {
                this.userInfo.group = val;
                this.rounds = []
            },

            onParticipantSelection(val) {
                this.userInfo.participant = val
                this.rounds = this.$dao.getRoundDataByUserId(localStorage.getItem('token'), val.RegistreeId, (err, result) => {
                    this.rounds = result.data.result;
                })
            },

            onEmailChange(val) {
                this.userInfo.email = val
            },

            workshopSelected(workshop) {
                this.signature = uuid();
                this.showModal = false;
                let overwrite = false;

                this.selections.forEach(selection => {
                    if(selection.RoundID === this.selectedRound.RoundID) {
                        overwrite = true;
                        selection.workshop = workshop
                     }
                })

                if(!overwrite) {
                    const selection = {
                        RoundID: this.selectedRound.RoundID,
                        workshop: workshop
                    }

                    this.selections.push(selection);
                }
            }
        }
    }
</script>

<style scoped>
modal {
  position: absolute;
  background: rgba(0,0,0,0.5);
  color: #fff;
  overflow: hidden;
  text-align: center;
  /* fix text transition issue for .left and .right but need to overwrite left and right properties in .right */
  width: 100%; 
  height: 150%;
  margin-top: -100vh;
}

    @media only screen and (min-width: 600px) {
        .root {
            margin-top: 50px;
        }

        .formTop {
            display: grid;
            grid-template: "a b"
        }

        .centered-x {
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }

    @media only screen and (max-width: 600px) {
        .formTop {
            display: block
        }
    }
</style>


