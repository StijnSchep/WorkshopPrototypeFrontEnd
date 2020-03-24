const axios = require('axios');
axios.default.withCredentials = true;
const url = 'http://node.studyhost.nl:4787';
const reservationValidator = require('../business/reservation.validator');

function postReservation(token, registration, callback) {
    const fixedRegistration = {
        OpeningDate: registration.openingDate,
        EndDate: registration.endDate,
        WorkshopDate: registration.workshopDate,
        ContactCode: registration.contact,
        RegistreeCode: registration.entree,
        MinEnrollments: registration.minEnrollments,
        MaxEnrollments: registration.maxEnrollments,
        ContactPermissionsId: registration.permissions,
        Address: registration.address,
        StartTime: registration.workshopDate + " " + registration.startTime,
        EndTime: registration.workshopDate + " " + registration.endTime
    }
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
    }
    axios.post(url + "/api/registrations", fixedRegistration)
    .then(result => {
        callback(null, result.data.result[0].ReservationId)
    })
    .catch((error) => {
        console.log(error);
        callback(error, null)
    })
}

function postGroups(i, token, groups, OrganisationID, RegistrationID, callback) {
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
    }
    axios.post(url + "/api/groups", {
        Name: groups[i].Name,
        OrganisationID: OrganisationID,
        RegistrationID: RegistrationID
    })
    .then(result => {
        console.log('group was added, ID: '  + result.data.result[0].GroupId);
        groups[i].GroupId = result.data.result[0].GroupId;
        const newI = i + 1;
        if(newI >= groups.length) {
            callback(null)
        } else {
            postGroups(newI, token, groups, OrganisationID, RegistrationID, callback)
        }
    })
    .catch((error) => {
        console.log(error);
        callback(error)
    })

}

function postRounds(roundCount, token, registration, RegistrationID, callback) {
    const rounds = registration.rounds

    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
    }
    axios.post(url + "/api/rounds", {
        Name: rounds[roundCount].Name,
        StartTime: registration.generalData.workshopDate + " " + rounds[roundCount].startTime,
        EndTime: registration.generalData.workshopDate + " " + rounds[roundCount].endTime,
        RegistrationID: RegistrationID
    })
    .then(result => {
        const RoundId = result.data.result[0].RoundId
        postRoundWorkshop(0, token, registration, rounds[roundCount].AvailableWorkshops, RoundId, rwError => {
            if(rwError) {
                callback(rwError);
            } else {
                const newRoundCount = roundCount + 1;
                if(newRoundCount === rounds.length) {
                    callback(null);
                } else {
                    postRounds(newRoundCount, token, registration, RegistrationID, callback);
                }
            }
        })

    })
    .catch((error) => {
        console.log(error);
        callback(error, null)
    })
}

function postRoundWorkshop(workshopCount, token, registration, workshops, RoundId, callback) {
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
    },
    axios.post(url + "/api/rounds/workshop", {
        RoundId: RoundId,
        WorkshopId: workshops[workshopCount].WorkshopID,
        MaxParticipants: workshops[workshopCount].maxParticipants
    })
    .then(result => {
        const RoundWorkshopId = result.data.result[0].RoundWorkshopId;
        postRoundWorkshopGroups(0, token, registration, RoundWorkshopId, workshops[workshopCount].groups, rwgError => {
            if(rwgError) {
                callback(rwgError);
            } else {
                const newWorkshopCount = workshopCount + 1;
                if(newWorkshopCount === workshops.length) {
                    callback(null);
                } else {
                    postRoundWorkshop(newWorkshopCount, token, registration, workshops, RoundId, callback);
                }
            }
        })
    })
    .catch((error) => {
        console.log(error);
        callback(error)
    })
}

function postRoundWorkshopGroups(rwgCount, token, registration, RoundWorkshopId, groups, callback) {
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
    }
    axios.post(url + "/api/rounds/workshop/group", {
        RoundWorkshopId: RoundWorkshopId,
        GroupId: getGroupId(registration, groups[rwgCount])
    })
    .then(result => {
        const rwgCountNew = rwgCount + 1;
        if(rwgCountNew === groups.length) {
            callback(null);
        } else {
            postRoundWorkshopGroups(rwgCountNew, token, registration, RoundWorkshopId, groups, callback);
        }
    })
    .catch((error) => {
        console.log(error);
        callback(error)
    })
}

function getGroupId(registration, group) {
    console.log(JSON.stringify(registration))
    console.log(JSON.stringify(group))
    const groupsWithIds = registration.groups;
    for(let i = 0; i < groupsWithIds.length; i++) {
        if(groupsWithIds[i].Name === group.Name) {
            return groupsWithIds[i].GroupId
        }
    }
}

function addRegistrees(regCount, token, registration, registrees, callback) {
    const group = {
        Name: registrees[regCount].Groep
    }
    console.log(JSON.stringify(group));
    console.log(getGroupId(registration, group))
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
    }
    axios.post(url + "/api/registrees", {
        Firstname: registrees[regCount].Voornaam,
        Lastname: registrees[regCount].Achternaam,
        GroupId: getGroupId(registration, group)
    })
    .then(result => {
        const newRegCount = regCount + 1;
        
        if(newRegCount === registrees.length) {
            callback(null);
        } else {
            addRegistrees(newRegCount, token, registration, registrees, callback);
        }
    })
    .catch((error) => {
        console.log(error);
        callback(error)
    })
}

module.exports = {
    
    handleReservation: (token, registration, callback) => {
        reservationValidator.validate(registration, (err) => {
            if(err) {
                callback(err, null);
                return;
            }

            postReservation(token, registration.generalData, (err, result) => {
                if(err) {
                    callback(err);
                    return;
                }
                const OrganisationID = registration.generalData.organisationID;
                const RegistrationID = result;

                postGroups(0, token, registration.groups, OrganisationID, RegistrationID, (error) => {
                    if(error) {
                        callback(error);
                        return;
                    }

                    postRounds(0, token, registration, RegistrationID, roundError => {
                        if(roundError) {
                            callback(roundError);
                        } else {
                            addRegistrees(0, token, registration, registration.importData.participants, (regError) => {
                                if(regError) {
                                    callback(regError);
                                } else {
                                    callback(null);
                                }
                            })
                        }
                    })
                })
            })

            
        })
    }
}