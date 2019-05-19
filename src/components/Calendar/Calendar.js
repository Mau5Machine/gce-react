import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  Container
} from 'reactstrap';
const localizer = BigCalendar.momentLocalizer(moment)


const Calendar = (
  <div>
    <Container id="calendar-container">
      <BigCalendar
        events={events}
        defaultDate={new Date()}
        defaultView="month"
        localizer={localizer}
        style={{ height: "100vh" }}
      />
    </Container>
  </div >
)

export default Calendar;
