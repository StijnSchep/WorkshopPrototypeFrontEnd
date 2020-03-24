let token = 'token';

const organisations = [
    {
        ID: 1,
        Name: 'Avans Hogeschool',
        Logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNupphk-cvypbjeo_7hWf8TiDugn6AI_hfhx9ugBNAc_7sPNt'
     },
     {
        ID: 2,
        Name: 'De Prins',
        Logo: 'http://www.messy.nl/wp-content/uploads/2013/05/bloem.gif'
     }
]

let organisationCount = 2;


let idCounter = 0;
let workshops =  [           
     {
    id: 0,
    workshop: 'Zumba met Tessa',
    desc: 'Zumba met Tessa is het leukste wat er is, lekker de heupen los en swingen met die tantoe antiliaanse billen swa.',
    url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
}, 
{
    id: 1,
    workshop: 'Vuurtje stoken met Stijn',
    desc: 'Heb jij altijd Avatar willen worden? Begin nu je gloednieuwe carriére als Zuko de vuurmeester bij Stijn de Vuurkonijn. Hij beheerst al zijn vuurkrachten van binnen en van buiten. Wees er snel bij want de workshop is erg populair!',
    url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
}, 
{
    id: 2,
    workshop: 'Politie-Roleplay met Romano',
    desc: 'Ben jij altijd geintereseerd geweest in SM? Dit is nu je kans. Pak de handboeien maar en zet je kontje klaar want Romano kan niet wachten om zijn wapens uit de kast te halen!',
    url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
}, 
{
    id: 3,
    workshop: 'Jointje met Stefan',
    desc: 'Vroeger altijd wezen dromen over barbiepoppen of raceautos? Dan is dromenland voor jou! De limited edition workshop is vanaf nu verkrijgbaar op Skoolworkshop.nl totdat de wietvoorraad op is! Wees er snel bij, anders smoked Stefan alle green!',
    url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
}, 
{
    id: 4,
    workshop: 'Pillenslikken met Luc',
    desc: 'Vind jij pillenslikken ook altijd zo naar? Nu niet meer! Luc de meester krijger van het slikken van de grootste, dikste, sappigste pillen staat op het lijstje om een workshop te geven. Dit is je ultieme kans om voor eens en voor altijd die dikke sappige lekkere XTC te slikken!',
    url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
}, 
{
    id: 5,
    workshop: 'Feyenoorder met Anjuli',
    desc: 'Heb jij Ajax ook altijd zo whack gevonden? Dit is je ultieme kans om alle joden dood te stampen, schieten, slicen. Bij deze workshop leer je hoe je accuraat je jood cruciaal in de hoofd moet raken.',
    url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
}, 
{
    id: 6,
    workshop: 'Karate Kung-Fu met Winson',
    desc: 'Heb jij altijd die dikke oom van Avatar gewaardeerd? Dan ben je hier op het juiste addres. Winson de enige echte look-a-like van die Avatar zijn dikke oom is hier om jou een lesje Ching chong KA ping pong te leren. Al snel ben je die pestkoppen te slim af en kunnen ze niks meer zien..... Letterlijk.',
    url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
}, 
{
    id: 7,
    workshop: 'Treintje koppen met Guus',
    desc: 'Waardeer jij ook al het harde werk van die lieve conducteuren die je altijd storen met de vraag, vervoersbewijs aub? Dan is dit nu je kans om je medelevenis te tonen door je bloed af te geven aan de voorkant van een trein. Het koppen van een voetbal is nog simpel maar dit is de ultieme uitdaging voor elke Thrillseeker!',
    url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
}


];

module.exports = {


    getAllOrganisation: () => {
        return organisations;
    },

    createOrganisation: (organisation) => {
        organisationCount++;
        organisation.ID = organisationCount;

        organisations.push(organisation);

        return true;
    },



    postEnrollmentCode: (organisationID, code) => {
        if(organisationID === 1 && code === 'avans') {
            token = 'TOKEN'
            return 'SUCCESS'
        }

        if(organisationID === 2 && code === 'prins') {
            token = 'TOKEN'
            return 'SUCCESS'
        }

        return 'CODE_INVALID'
    },

    getGroupsByOrganisationId: (organisationID) => {
        if(token === '') {
            return 'NO_TOKEN_PROVIDED'
        }

        if(organisationID === 1) {
            return [
                {
                    ID: 1,
                    Name: 'Groep A1'
                },
                {
                    ID: 2,
                    Name: 'Groep A2'
                },
                {
                    ID: 3,
                    Name: 'Groep A3'
                }
            ]
        }

        if(organisationID === 2) {
            return [
                {
                    ID: 4,
                    Name: 'Groep 8'
                }
            ]
        }
    },

    getParticipantsByGroupId: (groupID) => {
        if(token === '') {
            return 'NO_TOKEN_PROVIDED'
        }

        if(groupID === 1) {
            return [
                {
                    ID: 1,
                    Firstname: 'Tim',
                    Lastname: 'van Wouwe'
                },
                {
                    ID: 2,
                    Firstname: 'Dylan',
                    Lastname: 'Mulder'
                }
            ]
        }

        if(groupID === 2) {
            return [
                {
                    ID: 3,
                    Firstname: 'Stijn',
                    Lastname: 'Schep'
                },
                {
                    ID: 4,
                    Firstname: 'Guus',
                    Lastname: 'Lieben'
                },
                {
                    ID: 5,
                    Firstname: 'Tessa',
                    Lastname: 'Numan'
                }
            ]
        }

        if(groupID === 3) {
            return [
                {
                    ID: 6,
                    Firstname: 'Ties',
                    Lastname: 'Mulders'
                }
            ]
        }

        if(groupID === 4) {
            return [
                {
                    ID: 7,
                    Firstname: 'Erik',
                    Lastname: 'Kuiper'
                }
            ]
        }
    },

    getRoundDataByGroupId: (groupID) => {
        if(token === '') {
            return 'NO_TOKEN_PROVIDED'
        }

        if(groupID === 1) {
            return [
                {
                    ID: 1,
                    Name: 'Ronde 1',
                    StartTime: '11:00',
                    EndTime: '12:00',
                    AvailableWorkshops: [
                        {
                            ID: 1,
                            Name: 'Workshop rap',
                            Description: 'wraps eten',
                            VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2017/10/Beatbox-1.jpg'
                        },
                        {
                            ID: 2,
                            Name: 'Workshop soap acteren',
                            Description: 'Zeep maken met lijm',
                            VimeoURL: 'https://player.vimeo.com/video/218614868?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-Soap-acteren.jpg'
                        }
                    ]
                },
                {
                    ID: 2,
                    Name: 'Ronde 2',
                    StartTime: '12:00',
                    EndTime: '13:00',
                    AvailableWorkshops: [
                        {
                            ID: 1,
                            Name: 'Workshop rap',
                            Description: 'wraps eten',
                            VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2017/10/Beatbox-1.jpg'
                        },
                        {
                            ID: 2,
                            Name: 'Workshop soap acteren',
                            Description: 'Zeep maken met lijm',
                            VimeoURL: 'https://player.vimeo.com/video/218614868?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-Soap-acteren.jpg'
                        }
                    ]
                }
            ]
        }

        if(groupID === 2) {
            return [
                {
                    ID: 1,
                    Name: 'Ronde 1',
                    StartTime: '11:00',
                    EndTime: '12:00',
                    AvailableWorkshops: [
                        {
                            ID: 1,
                            Name: 'Workshop rap',
                            Description: 'wraps eten',
                            VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2017/10/Beatbox-1.jpg'
                        },
                        {
                            ID: 2,
                            Name: 'Workshop soap acteren',
                            Description: 'Zeep maken met lijm',
                            VimeoURL: 'https://player.vimeo.com/video/218614868?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-Soap-acteren.jpg'
                        }
                    ]
                }
            ]
        }

        if(groupID === 3) {
            return [
                {
                    ID: 1,
                    Name: 'Ronde 1',
                    StartTime: '11:00',
                    EndTime: '12:00',
                    AvailableWorkshops: [
                        {
                            ID: 1,
                            Name: 'Workshop rap',
                            Description: 'wraps eten',
                            VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2017/10/Beatbox-1.jpg'
                        },
                        {
                            ID: 2,
                            Name: 'Workshop soap acteren',
                            Description: 'Zeep maken met lijm',
                            VimeoURL: 'https://player.vimeo.com/video/218614868?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-Soap-acteren.jpg'
                        }
                    ]
                }
            ]
        }
    },

    getRoundDataByUserId: (userID) => {
        if(userID === 1) {
            return [
                {
                    ID: 1,
                    Name: 'Ronde 1',
                    StartTime: '11:00',
                    EndTime: '12:00',
                    AvailableWorkshops: [
                        {
                            ID: 1,
                            Name: 'Workshop rap',
                            Description: 'wraps eten',
                            VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2017/10/Beatbox-1.jpg'
                        },
                        {
                            ID: 2,
                            Name: 'Workshop soap acteren',
                            Description: 'Zeep maken met lijm',
                            VimeoURL: 'https://player.vimeo.com/video/218614868?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-Soap-acteren.jpg'
                        }
                    ],
                    SelectedWorkshop: {
                        ID: 1,
                        Name: 'Workshop rap',
                        Description: 'wraps eten',
                        VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                        ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-rap.jpg'
                    }
                },
                {
                    ID: 2,
                    Name: 'Ronde 2',
                    StartTime: '12:00',
                    EndTime: '13:00',
                    AvailableWorkshops: [
                        {
                            ID: 1,
                            Name: 'Workshop rap',
                            Description: 'wraps eten',
                            VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2017/10/Beatbox-1.jpg'
                        },
                        {
                            ID: 2,
                            Name: 'Workshop soap acteren',
                            Description: 'Zeep maken met lijm',
                            VimeoURL: 'https://player.vimeo.com/video/218614868?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-Soap-acteren.jpg'
                        }
                    ],
                    SelectedWorkshop: null
                }
            ]
        } else if(userID < 6){
            return [
                {
                    ID: 1,
                    Name: 'Ronde 1',
                    StartTime: '11:00',
                    EndTime: '12:00',
                    AvailableWorkshops: [
                        {
                            ID: 1,
                            Name: 'Workshop rap',
                            Description: 'wraps eten',
                            VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2017/10/Beatbox-1.jpg'
                        },
                        {
                            ID: 2,
                            Name: 'Workshop soap acteren',
                            Description: 'Zeep maken met lijm',
                            VimeoURL: 'https://player.vimeo.com/video/218614868?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-Soap-acteren.jpg'
                        }
                    ],
                    SelectedWorkshop: null
                },
                {
                    ID: 2,
                    Name: 'Ronde 2',
                    StartTime: '12:00',
                    EndTime: '13:00',
                    AvailableWorkshops: [
                        {
                            ID: 1,
                            Name: 'Workshop rap',
                            Description: 'wraps eten',
                            VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2017/10/Beatbox-1.jpg'
                        },
                        {
                            ID: 2,
                            Name: 'Workshop soap acteren',
                            Description: 'Zeep maken met lijm',
                            VimeoURL: 'https://player.vimeo.com/video/218614868?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-Soap-acteren.jpg'
                        }
                    ],
                    SelectedWorkshop: null
                }
            ]
        } else {
            return [
                {
                    ID: 1,
                    Name: 'Ronde 1',
                    StartTime: '11:00',
                    EndTime: '12:00',
                    AvailableWorkshops: [
                        {
                            ID: 1,
                            Name: 'Workshop rap',
                            Description: 'wraps eten',
                            VimeoURL: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2017/10/Beatbox-1.jpg'
                        },
                        {
                            ID: 2,
                            Name: 'Workshop soap acteren',
                            Description: 'Zeep maken met lijm',
                            VimeoURL: 'https://player.vimeo.com/video/218614868?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=',
                            ImageURL: 'https://skoolworkshop.nl/wp-content/uploads/2014/10/Button-Soap-acteren.jpg'
                        }
                    ],
                    SelectedWorkshop: null
                }
            ]
        }
    },

    postAdminCredentials: (user, pass) => {
        if(user === 'test@test.nl' && pass === 'password') {
            return 'SUCCESS'
        } 

        return 'INVALID_CREDENTIALS';
    },

    getAllReservations: () => {
        return [ 
            { title: "Bernardschool", start:  "2019-05-25", end: "2019-05-25", name: { first: 'John', last: 'Lennen' }, period:"2019-05-27 - 2019-05-30", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "Cooleschool", start:  "2019-04-29", end: "2019-04-29", name: { first: 'bob', last: 'Lennen' }, period:"2019-05-15 - 2019-05-22", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "Dommeschool", start:  "2019-05-22", end: "2019-05-22", name: { first: 'dad', last: 'Lennen' }, period:"2019-05-24 - 2019-05-31", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "Ahahahahahaa", start:  "2019-05-1", end: "2019-05-1", name: { first: 'erar', last: 'Lennen' }, period:"2019-05-23 - 2019-05-14", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "dadadadadada", start:  "2019-05-4", end: "2019-05-4", name: { first: 'wrrw', last: 'Lennen' }, period:"2019-05-26 - 2019-05-52", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "fafafafafaf", start:  "2019-05-6", end: "2019-05-68", name: { first: 'qrqr', last: 'Lennen' }, period:"2019-05-29 - 2019-05-14", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "gagagagagagag", start:  "2019-05-5", end: "2019-05-5", name: { first: 'ytaya', last: 'Lennen' }, period:"2019-05-27 - 2019-05-30", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "Avans Hogeschool", start:  "2019-05-15", end: "2019-05-15", name: { first: 'baba', last: 'Lennen' }, period:"2019-05-27 - 2019-05-30", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "Julianaschool", start:  "2019-05-25", end: "2019-05-25", name: { first: 'sbs', last: 'Lennen' }, period:"2019-05-27 - 2019-05-30", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "jajajjjaj", start:  "2019-05-29", end: "2019-05-29", name: { first: 'dbda', last: 'Lennen' }, period:"2019-05-27 - 2019-05-30", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "kertrtetre", start:  "2019-05-24", end: "2019-05-24", name: { first: 'rna', last: 'Lennen' }, period:"2019-05-27 - 2019-05-30", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "yayayayayayaya", start:  "2019-05-21", end: "2019-05-21", name: { first: 'anan', last: 'Lennen' }, period:"2019-05-27 - 2019-05-30", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" },
            { title: "kazkjakaska", start:  "2019-05-26", end: "2019-05-26", name: { first: 'wnwn', last: 'Lennen' }, period:"2019-05-27 - 2019-05-30", address: "Lovensdijkstraat 72", time: "10.00 - 16.30" }, 
        ]
    },
    getAllWorkshops: () => {
        return [
            {
                period: '2016-05-03',
                workshop: 'Zumba met Tessa',
                org: 'St. Peters B.V.',
                group: '3A',
                round: '1',
                value: '32'
            }, {
                period: '2016-05-02',
                workshop: 'Breakdance met Guus',
                org: 'Avans Hogeschool',
                group: '4A',
                round: '1',
                value: '40'
            }, {
                period: '2016-05-04',
                workshop: 'Fluiten met Anjuli',
                org: 'Yo mama Basisschool',
                group: '9E',
                round: '1',
                value: '20'
            }, {
                period: '2016-05-01',
                workshop: 'Politie-Roleplay met Romano',
                org: 'School vdb. B.V.',
                group: '1B',
                round: '1',
                value: '35'
            }
        ]
    },
    
    getWorkshopData: () =>{
        return [
            {
                id: 0,
                workshop: 'Zumba met Tessa',
                desc: 'Zumba met Tessa is het leukste wat er is, lekker de heupen los en swingen met die tantoe antiliaanse billen swa.',
                url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
            }, 
            {
                id: 1,
                workshop: 'Vuurtje stoken met Stijn',
                desc: 'Heb jij altijd Avatar willen worden? Begin nu je gloednieuwe carriére als Zuko de vuurmeester bij Stijn de Vuurkonijn. Hij beheerst al zijn vuurkrachten van binnen en van buiten. Wees er snel bij want de workshop is erg populair!',
                url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
            }, 
            {
                id: 2,
                workshop: 'Politie-Roleplay met Romano',
                desc: 'Ben jij altijd geintereseerd geweest in SM? Dit is nu je kans. Pak de handboeien maar en zet je kontje klaar want Romano kan niet wachten om zijn wapens uit de kast te halen!',
                url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
            }, 
            {
                id: 3,
                workshop: 'Jointje met Stefan',
                desc: 'Vroeger altijd wezen dromen over barbiepoppen of raceautos? Dan is dromenland voor jou! De limited edition workshop is vanaf nu verkrijgbaar op Skoolworkshop.nl totdat de wietvoorraad op is! Wees er snel bij, anders smoked Stefan alle green!',
                url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
            }, 
            {
                id: 4,
                workshop: 'Pillenslikken met Luc',
                desc: 'Vind jij pillenslikken ook altijd zo naar? Nu niet meer! Luc de meester krijger van het slikken van de grootste, dikste, sappigste pillen staat op het lijstje om een workshop te geven. Dit is je ultieme kans om voor eens en voor altijd die dikke sappige lekkere XTC te slikken!',
                url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
            }, 
            {
                id: 5,
                workshop: 'Feyenoorder met Anjuli',
                desc: 'Heb jij Ajax ook altijd zo whack gevonden? Dit is je ultieme kans om alle joden dood te stampen, schieten, slicen. Bij deze workshop leer je hoe je accuraat je jood cruciaal in de hoofd moet raken.',
                url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
            }, 
            {
                id: 6,
                workshop: 'Karate Kung-Fu met Winson',
                desc: 'Heb jij altijd die dikke oom van Avatar gewaardeerd? Dan ben je hier op het juiste addres. Winson de enige echte look-a-like van die Avatar zijn dikke oom is hier om jou een lesje Ching chong KA ping pong te leren. Al snel ben je die pestkoppen te slim af en kunnen ze niks meer zien..... Letterlijk.',
                url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
            }, 
            {
                id: 7,
                workshop: 'Treintje koppen met Guus',
                desc: 'Waardeer jij ook al het harde werk van die lieve conducteuren die je altijd storen met de vraag, vervoersbewijs aub? Dan is dit nu je kans om je medelevenis te tonen door je bloed af te geven aan de voorkant van een trein. Het koppen van een voetbal is nog simpel maar dit is de ultieme uitdaging voor elke Thrillseeker!',
                url: 'https://player.vimeo.com/video/192128311?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=,'
            }
        ]
    },

    getOrganisations: () => {
        return [
                { value: "Avans Hogeschool", text: "Avans Hogeschool" },
                { value: "Fontys Hogeschool", text: "Fontys Hogeschool" },
                { value: "NHTV Breda", text: "NHTV Breda" },
                { value: "Erasmus Rotterdam", text: "Erasmus Rotterdam" },
                { value: "ROC ter aa", text: "ROC ter aa" },
                { value: "Haagse Hogeschool", text: "Haagse Hogeschool" }
        ] 
    },
    
    getWorkshopById: (workshopId) => {  
       for (var i = 0; i < workshops.length; i++){
                if(workshops[i].id == workshopId){
                    let workshopById = workshops[i];
                    return[workshopById]
                }
        } 
    },

    postNewWorkshop:(postworkshop, postdesc, posturl) => {
        idCounter++

        const newWorkshop = {
            workshop: postworkshop,
            desc: postdesc,
            url: posturl,
            id: idCounter
        }
        workshops.push(newWorkshop)
    },

    updateWorkshop: (workshop, desc, url) => {
        alert("Update workshop aangeroepen van de dummy data. Workshop genaamd: " + workshop + " met beschrijving: " + desc + " met url: " + url)
    },

    deleteWorkshop: (Id) => {
        alert("Delete workshop aangeroepen van de dummy data. Workshop met id " + Id + " wordt verwijderd.")
    }
    

}
