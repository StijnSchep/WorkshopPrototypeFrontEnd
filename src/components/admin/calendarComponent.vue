<template>
<FullCalendar defaultView="dayGridMonth" :config="config" :locale="locale" :contentHeight="525" :firstDay="1" :eventLimit="4" :plugins="calendarPlugins" :weekends="true" :events="reservation" />
</template>

<style>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
</style>

<script src='fullcalendar/core/main.js'></script>
<script src='fullcalendar/core/locales-all.js'></script>
<script src='fullcalendar/daygrid/main.js'></script><script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import nlLocale from '@fullcalendar/core/locales/nl'

export default {
    components: {
        FullCalendar, // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarPlugins: [dayGridPlugin],
            locale: nlLocale,
            reservation: []
        }
    },

    created() {
        this.$dao.getCalendarData((err, name, starttime, endtime) => {
            if (name) {
                const newReg = {
                    title: name,
                    start: starttime,
                    end: endtime
                }
                this.reservation.push(newReg)
            } else {
                console.log('error ' + err)
            }
        })
    }
}
</script>

<style scoped>
.el-main[data-v-5fe4c28a] {
    display: inline;
    background-color: rgba(255, 255, 255, 0);
}

.fc-unthemed td.fc-today {
    background: rgba(63, 92, 120, 0.156);
}

.fc-event, .fc-event-dot{
border: 1px solid #ffaaaa;
    background: #ffaaaa;
}

.full-calendar-body .dates .week-row .day-cell.today {
    background: #4c6d8c3e
}
</style>
