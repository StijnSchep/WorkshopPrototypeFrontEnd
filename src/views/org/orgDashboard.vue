<template>
    <div>
        <header class="header sticky-top">
            <div class="topHeader">

            </div>
            <div class="bottomHeader">
            <img class="headerLogo" src="https://skoolworkshop.nl/wp-content/uploads/2017/05/logo.png" alt="Skoolworkshop.nl">        
            </div>
        </header>
        <div class='root bg'>

            <div class='row'>
                <div class='col-md-3'>
                    <sectionTemplate class='full-height left-margin' name='Avans Hogeschool' :contentData='generalData' :content='generalDataComponent' />
                </div>
                <div class='col-md-6'>
                    <sectionTemplate class='full-height' name='Inschrijvingen Bekijken' :content='enrollment' />
                </div>
                <div class='col-md-3'>
                    <sectionTemplate class='height-4 right-margin' name='Groepen Importeren' :content='content' />
                    <sectionTemplate class='height-6 right-margin' name='Rapport Downloaden' :content='downloadFrame' :contentData='downloadContent' />
                </div>
            </div>

        </div>  
    </div>
</template>

<script>
import sectionTemplate from '../../components/org/sectionTemplate';
import gData from '../../components/org/sections/generalData';
import enrollment from '../../components/org/sections/enrollment/enrollmentFrame';
import downloadFrame from '../../components/org/sections/download/downloadFrame'

export default {
    name: 'organisation-dashboard',
    data() {
        return {
            generalDataComponent: 
            gData,
            enrollment,
            downloadFrame,
            generalData: {
                workshopDay: '1/1/2020',
                start: '1/1/2019',
                end: '1/2/2019',
                status: 'OPEN',
                code: 'Avans2019'
            },
            downloadContent: {
                status: 'UNAVAILABLE'
            }
        }
    },
    components: {
        sectionTemplate
    }
}
</script>

<style scoped>

    .col-md-3, .col-md-6 {
        padding: 0;
    }

    .left-margin {
        margin-left: 30px;
    }

    .right-margin {
        margin-right: 30px;
    }

    .full-height {
        height: calc(100vh - 135px);
    }

    .height-4 {
        height: calc(calc(100vh - 135px) * 0.4)
    }

    .height-6 {
        height: calc(calc(100vh - 150px) * 0.6)
    }

    .bg {
        background-color: rgba(192, 86, 86, 0.1);
    }
</style>


