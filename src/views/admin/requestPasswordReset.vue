<template>
<div>
    <header class="header sticky-top">
        <div class="topHeader">

        </div>
        <div class="bottomHeader">
            <img class="headerLogo" src="https://skoolworkshop.nl/wp-content/uploads/2017/05/logo.png" alt="Skoolworkshop.nl">
        </div>
    </header>

    <div class='component-root centered-panel'>
        <div class='centered-panel main'>
            <h1 class='title'>Email link</h1>
            <h6>Geef uw email om uw wachtwoord te wijzigen</h6>
            <br>

            <div class="inner-addon left-addon">
                <i class="glyphicon fas fa-envelope"></i>
                <input type="email" class="form-control defaultInput" placeholder='email' v-model='email'/>
          </div>
                <button class='btn' @click='onSubmit()'>Verzenden</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        }
    },
    methods: {
        onSubmit() {
            this.$dao.checkEmail(this.email, (message) => {
                if (message === 'SUCCESS') {
                    alert('Verificatie email is gestuurd naar de desbetreffende email')
                } else {
                    alert('Email bestaat niet of is incorrect')
                }

            })

        }
    }
}
</script>

<style scoped>
.component-root {
    margin-top: 60px;
}

.main {
    display: inline-block;
    margin-top: 12.5%;
    text-align: center;
}

.centered-panel {
    margin-left: 50%;
    transform: translateX(-50%);
}

.title {
    display: inline-block;
    margin-bottom: 30px;
    padding-bottom: 5px;
    border-bottom: 2px solid #F1991E
}

/* enable absolute positioning */
.inner-addon {
    position: relative;
    margin-bottom: 10px;
}

/* style icon */
.inner-addon .glyphicon {
    position: absolute;
    padding: 10px;
    pointer-events: none;
}

/* align icon */
.left-addon .glyphicon {
    left: 0px;
}

/* add padding  */
.left-addon input {
    padding-left: 35px;
}

.forgot-password {
    margin-bottom: 50px;
}

.btn {
    margin-top: 75px;
}

@media only screen and (min-width: 1001px) {
    .component-root {
        width: 50%;
        height: 60vh;
        box-shadow: 0 1px 6px 0 rgba(51, 51, 51, .25);
    }

    .form-control {
        width: 400px;
    }
}

@media only screen and (max-width: 1000px) {
    .form-control {
        width: 350px;
    }
}
</style>
