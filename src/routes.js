const adminLogin = () => import('./views/admin/login');
const dashboard = () => import('./views/admin/dashBoard');
const workshops = () => import('./views/admin/workshops');
const participantForm = () => import('./views/participant/workshopForm');
const participantLogin = () => import('./views/participant/loginParticipant.vue');
const participantExpiredResult = () => import('./views/participant/expiredResultParticipant');
const participantExpired = () => import('./views/participant/expiredParticipant');
const createWorkshop = () => import('./views/admin/subtabs/workshopCreate.vue');
const editWorkshop = () => import('./views/admin/subtabs/workshopEdit.vue');
const reservations = () => import('./views/admin/subtabs/reserveringlijst.vue');
const createReservation = () => import('./views/admin/subtabs/createReservation.vue');
const editReservation = () => import('./views/admin/subtabs/editReservation.vue');
const createOrganisation = () => import('./views/admin/subtabs/adminCreateOrganisation');
const editOrganisation = () => import('./views/admin/subtabs/adminEditOrganisation');
const requestPasswordReset = () => import('./views/admin/requestPasswordReset');
const changePasswordReset = () => import('./views/admin/changePassword');
const getAllOrganisations = () => import('./views/admin/subtabs/getAllOrganisations');
const orgDashboard = () => import('./views/org/orgDashboard');
const earlyParticipant = () => import('./views/participant/earlyParticipant');
const successParticipant = () => import('./views/participant/successParticipant');

export default [
    {
        path: '*',
        redirect: '/inschrijfsysteem/login'
    },
    {
        path: '/inschrijfsysteem/admin/login',
        component: adminLogin
    },
    {
        path: '/inschrijfsysteem/admin/reset/request',
        component: requestPasswordReset
    },
    {
        path: '/inschrijfsysteem/admin/reset',
        component: changePasswordReset
    },
    {
        path: '/inschrijfsysteem/admin/dashboard',
        component: dashboard
    },
    {
        path: '/inschrijfsysteem/admin/dashboard/organisaties',
        component: getAllOrganisations
    },
    {
        path: '/inschrijfsysteem/admin/dashboard/workshop/aanmaken',
        component: createWorkshop
    },
    {
        path: '/inschrijfsysteem/admin/dashboard/reserveringen',
        component: reservations
    },
    {
        path: '/inschrijfsysteem/admin/dashboard/reserveringen/aanmaken',
        component: createReservation
    },
    {
        path: '/inschrijfsysteem/admin/dashboard/reserveringen/bijwerken/:index',
        component: editReservation
    },
    {
        path: '/inschrijfsysteem/admin/dashboard/workshops',
        component: workshops
    },    
    {
        path: '/inschrijfsysteem/admin/dashboard/workshops/aanpassen/:index',
        component: editWorkshop
    },
    {
        path: '/inschrijfsysteem/login',
        component: participantLogin
    },
    {
        path: '/inschrijfsysteem/inschrijven/:organisationId',
        component: participantForm
    },
    {
        path: '/inschrijfsysteem/verlopen/resultaat',
        component: participantExpiredResult
    },
    {
        path: '/inschrijfsysteem/verlopen',
        component: participantExpired
    },
    {
        path: '/inschrijfsysteem/vroeg',
        component: earlyParticipant
    },
    {
        path: '/inschrijfsysteem/admin/dashboard/organisaties/aanmaken',
        component: createOrganisation
    },
    {
        path: '/inschrijfsysteem/admin/dashboard/organisaties/bijwerken/:index',
        component: editOrganisation
    },
    {
        path: '/inschrijfsysteem/org',
        component: orgDashboard
    },
    {
        path: '/inschrijfsysteem/klaar',
        component: successParticipant
    }
]
