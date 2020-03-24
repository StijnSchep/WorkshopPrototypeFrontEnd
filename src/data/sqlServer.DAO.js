let token = "";
const axios = require('axios');
axios.default.withCredentials = true;
const url = 'http://node.studyhost.nl:4787';

let reservations = [
    {
        ID: 1,
        title: 'Avans Hogeschool',
        start: '2019-06-15',
        end:   '2019-06-16',
        period: '2019-03-18',
        address: 'Lovensdijkstraat 61',
        time: '15:45'
    },
    {
        ID: 2,
        title: 'Hogeschool Nijmegen',
        start: '2019-06-18',
        end:   '2019-06-19',
        period: '2099-03-18',
        address: 'Nijmegsestraat 1',
        time: '13:45'
    },
    {
        ID: 3,
        title: 'Tijl Uilenspiegel',
        start: '15-05-2029',
        end:   '17-03-2030',
        period: '18-03-2030',
        address: 'Mozartstraat 5',
        time: '10:15'
    },
    {
        ID: 4,
        title: 'Avans Hogeschool',
        start: '15-11-2019',
        end:   '17-12-2019',
        period: '18-03-2019',
        address: 'Hogeschoollaan 5',
        time: '12:30'
    },
    {
        ID: 5,
        title: 'Avans Hogeschool',
        start: '15-05-2019',
        end:   '17-03-2019',
        period: '18-03-2019',
        address: 'Lovensdijkstraat 61',
        time: '15:45'
    },
    {
        ID: 5,
        title: 'Avans Hogeschool',
        start: '15-05-2019',
        end:   '17-03-2019',
        period: '18-03-2019',
        address: 'Lovensdijkstraat 61',
        time: '15:45'
    }]

module.exports = {
    data: [],

    getAllOrganisationsCallback: (callback) => {
                // return organisatie;
                console.log('methode aangeroepen')
                
                axios.get(url + "/api/organisations")
                .then((result) => {
                    if(result.code === 404){
                        return []
                    } else {    
                        callback(null, result.data.result)
                    }
                })
                .catch((error) => {
                    console.log(error)
                    callback(error, null)
                })
        // return organisations
    },

    postEnrollmentCode: (organisationID, code, callback) => {
        console.log('postenrollmentcode aangeroepen')
 
        axios.defaults.headers = {
             'Content-Type': 'application/json'
        }        
        
        return axios.post(url + "/api/login/check", {
            OrganisationId: organisationID,
            Code: code
        })
        .then((result) => {
            console.log(result)
            callback(null, result)
        })
        .catch((error) => {
            callback(error, null)
        })    
    },

    getGroupsByOrganisationId: (organisationID, token, callback) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.get(url + "/api/organisations/registrees/" + organisationID, {
        })
        .then((result) => {
            console.log(result.code)
            if(result.code === 401){
                return []
            } else {
                console.log(result.data.result)
                callback(null, result.data.result)
            }
        })
        .catch((error) => {
            console.log(error)
            callback(error, null)
        })
    },

    getRoundDataByUserId: (token, userID, callback) => {
        console.log(url + "/api/rounds/registree");
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.post(url + "/api/rounds/registree", {
            RegistreeId: userID
        })
        .then((result) => {
            callback(null, result)
        })
        .catch((error) => {
            console.log(error, null)
        })

    },

    postAdminCredentials: (user, pass, callback) => {

        axios.post(url + "/api/login/auth", {
                Email: user,
                Password: pass
        })
        .then((result) => {
            if(result.data.token) {
                callback('SUCCESS', result.data.token);
            } else {
                callback('DENIED', null);
            }
        
        })
        .catch((error) => {
            callback('DENIED', error);
        })
    },
    
    checkEmail: (user, callback) => {
        axios.post(url + "/api/login/auth/email", {
                Email: user,
        })
        .then(() => {
            callback('SUCCESS');
        })
        .catch((error) => {
            callback('DENIED', error);
        })
    },

    postNewWorkshop: (workshop, desc, videourl, token, callback) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.post(url + "/api/workshops", {
                Name: workshop,
                Description: desc,
                URL: videourl
        }
)
        .then(() => {
            callback('SUCCESS', null);
        })
        .catch((error) => {
            callback('DENIED', error);
        })
    },

    validateToken: (token, callback) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
        axios.post(url + "/api/login/validate")
        .then(result => {
            callback(null, result.data.role)
        })
        .catch((error) => {
            console.log(error);
            callback(error, null)
        })
    },
    getAllReservationsCallback: (callback) => {
        // return reservations;
        console.log('methode aangeroepen')
                
        axios.get(url + "/api/registrations")
        .then((result) => {
            console.log(result)
            if(result.code === 404){
                return []
            } else {    
                console.log(result.data.result)
                callback(null, result.data.result)
            }
        })
        .catch((error) => {
            console.log(error)
            callback(error, null)
        })
    },

    getCalendarData: (callback) => {
        // return reservations;
        console.log('methode aangeroepen')
                
        axios.get(url + "/api/registrations")
        .then((result) => {
            if(result.code === 404){
                return []
            } else {    
                for (var i = 0; i < result.data.result.length; i++){
                    callback(null, result.data.result[i].Name, result.data.result[i].startTime, result.data.result[i].endTime)
                }
            }
        })
        .catch((error) => {
            console.log(error)
            callback(error, null, null, null)
        })



    },

    getAllReservations:() => {
        // return reservations;
        console.log('methode aangeroepen')
        
        axios.get(url + "/api/registrations")
        .then((result) => {
            if(result.code === 404){
                return []
            } else {    
                return result.data
            }
        })
        .catch((error) => {
            console.log(error)
        })

    },

    getReservationById: (reservationId) => {
        for (var i = 0; i < reservations.length; i++){
            if(reservations[i].ID == reservationId){
                let reservationById = reservations[i];
                return reservationById
            }
        } 
    },

    getAllWorkshops: (token) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.get(url + "/api/workshops", {
        })
        .then((result) => {
            if(result.code === 401){
                return []
            } else {
                this.data = result.data
                return result.data
            }
        })
        .catch((error) => {
            console.log(error)
        })

    },

    getAllWorkshopsCallback: (token, callback) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.get(url + "/api/workshops", {
        })
        .then((result) => {
            if(result.code === 401){
                callback('ERROR', null)
            } else {
                callback('SUCCESS', result.data)
            }
        })
        .catch((error) => {
                callback('ERROR', error)
        })
    },

    getWorkshopById: (workshopId, token, callback) => {  
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.get(url + "/api/workshops", {
        })
        .then((result) => {
            if(result.code === 401){
                callback('ERROR', null)
            } else {
                for (var i = 0; i < result.data.length; i++){
                    if(result.data[i].WorkshopID == workshopId){
                        let workshopById = result.data[i];
                        console.log(workshopById)
                        callback('SUCCESS', workshopById)
                    } else {
                        callback('ERROR', null)
                    }
            } 
            }
        })
        .catch((error) => {
                callback('ERROR', error)
        })
     }, 

     
    getIdWorkshop: (index, token, callback) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.get(url + "/api/workshops", {
        })
        .then((result) => {
            if(result.code === 401){
                callback('ERROR', null)
            } else {
                console.log(result.data[index].WorkshopID)
                callback('SUCCESS', result.data[index].WorkshopID)
            }
        })
        .catch((error) => {
                callback('ERROR', error)
        })
    },

     updateWorkshop: (Id, token, workshop, desc, videourl, callback) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.put(url + "/api/workshops/" + Id, {
            Name: workshop,
            Description: desc,
            URL: videourl
        })
        .then(() => {
            callback('SUCCESS', null)
            alert("Workshop geupdate")
        })
        .catch((error) => {
            callback('Error', error)
        })
    },

    deleteWorkshop: (Id, token, callback) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.delete(url + "/api/workshops/" + Id, {
        })
        .then(() => {
            alert("Delete workshop aangeroepen van de sqlserver data. Workshop met id " + Id + " wordt verwijderd.")
            callback('SUCCESS', null)
        })
        .catch((error) => {
            callback('ERROR', error)
        })

    },

    getOrganisationById: (orgId, token, callback) => {  
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.get(url + "/api/organisations", {
        })
        .then((result) => {
            if(result.code === 401){
                callback('ERROR', null)
            } else {
                for (var i = 0; i < result.data.result.length; i++){
                    if(result.data.result[i].ID == orgId){
                        let orgId = result.data.result[i];
                        callback('SUCCESS', orgId)
                    } else {
                        callback('ERROR', null)
                    }
            } 
            }
        })
        .catch((error) => {
                callback('ERROR', error)
        })
     },

    createOrganisation: (organisation) => {
        return organisation
    },

    updateOrganisation: (Id, token, organisation, logo, callback) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.put(url + "/api/organisations/" + Id, {
            Name: organisation,
            Logo: logo
        })
        .then(() => {
            callback('SUCCESS')
            alert("Organisation geupdate naar : " + organisation)
        })
        .catch(() => {
            callback('ERROR')
            alert("Iets is mis gegaan tijdens het updaten naar " + organisation)
        })
     },

     deleteOrganisation: (Id, token, callback) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.delete(url + "/api/organisations/" + Id, {
        })
        .then(() => {
            callback('SUCCESS', null)
        })
        .catch((error) => {
            callback('ERROR', error)
        })

    },


    postOrganisation: (name, file) => {
        axios.post(url + "/api/organisations", {
        headers: { 
            'Authorization': token,
            'Content-Type' : 'application/json'
        },
            Name: name,
            File: file
        })
        .then(() => {
            return 'SUCCESS'
        })
        .catch((error) => {
            return {
                Message: error
            }
        })
    },

    getResultsParticipant: () => {
        alert("GetResultsParticipant aangeroepen in dao.");
    },

    postEnrollments: (token, body, callback) => {
        console.log(token);
        console.log(JSON.stringify(body));

        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        axios.post(url + "/api/enroll", body)
        .then(result => {
            console.log(JSON.stringify(result));
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            callback(error);
        })
    },

    deleteReservation: (registrationId, token) => {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
            axios.delete(url + "/api/registrations/" + registrationId, {
                headers: { 
                    'Authorization': 'Bearer ' + token,
                    'Content-Type' : 'application/json'}
            })
            .then((result) => {
                if(result.code === 401){
                    return {
                        Message: 'U bent niet geautoriseerd om een reservering te verwijderen.',
                        code: 401
                    }
                } else if(result.code === 404) {
                    return {
                        Message: 'Er is niks gevonden, want er is geen resultaat om te verwijderen.',
                        code: 404
                    }
                } else if(result.code === 500) {
                    return {
                        Message: 'Neem contact op met de systeem beheerder.',
                        code: 500
                    }
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

