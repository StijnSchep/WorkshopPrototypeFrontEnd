module.exports = {
    validate: (reservation, callback) => {
        if(typeof reservation.generalData.organisationName !== "string" ||
            reservation.generalData.organisationName === "") {
            const error = 'Vul een organisatienaam in';
            callback(error);
            return;
        }
        
        if(typeof(reservation.generalData.workshopDate) !== "string" ||
            reservation.generalData.workshopDate === "") {
            const error = 'Vul een datum in voor de workshopdag';
            callback(error);
            return;
        }

        if(typeof(reservation.generalData.openingDate) !== "string" ||
            reservation.generalData.openingDate === "") {
            const error = 'Vul een datum in waarop de inschrijfperiode begint';
            callback(error);
            return;
        }

        if(typeof(reservation.generalData.endDate) !== "string" || 
            reservation.generalData.endDate === "") {
            const error = 'Vul een datum in waarop de inschrijfperiode eindigt';
            callback(error);
            return;
        }

        if(typeof(reservation.generalData.address) !== "string" ||
            reservation.generalData.address === "") {
            const error = 'Vul een adres in voor de workshopdag';
            callback(error);
            return;
        }
        
        if(typeof(reservation.generalData.startTime) !== "string" ||
            reservation.generalData.startTime === "") {
            const error = 'Vul een tijd in waarop de workshopdag begint';
            callback(error);
            return;
        }

        if(typeof(reservation.generalData.endTime) !== "string" ||
            reservation.generalData.endTime === "") {
            const error = 'Vul een tijd in waarop de workshopdag eindigt';
            callback(error);
            return;
        }

        if(!reservation.generalData.minEnrollments) {
            const error = 'Vul een minimum aantal gekozen workshops in';
            callback(error);
            return;
        }

        if(!reservation.generalData.maxEnrollments) {
            const error = 'Vul een maximum aantal gekozen workshops in';
            callback(error);
            return;
        }

        if(typeof(reservation.generalData.contact) !== "string" ||
            reservation.generalData.contact === "") {
            const error = 'Vul een code in waarmee de contactpersoon kan inloggen';
            callback(error);
            return;
        }

        if(typeof(reservation.generalData.entree) !== "string" ||
            reservation.generalData.entree === "") {
            const error = 'Vul een code in waarmee de deelnemers kunnen inloggen';
            callback(error);
            return;
        }

        callback(null);
        
    }
}