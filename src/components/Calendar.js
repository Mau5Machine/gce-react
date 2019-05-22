import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from './events'
import dates from './utils/dates'
import moment from 'moment'
import { Container } from 'reactstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
const localizer = BigCalendar.momentLocalizer(moment)

const CalendarPage = props => (
  <Container
    className="mt-5"
  >
    <BigCalendar
      events={events}
      views={allViews}
      step={60}
      showMultiDayTimes
      max={dates.add(dates.endOf(new Date(2025, 17, 1), 'day'), -1, 'hours')}
      defaultDate={new Date()}
      localizer={localizer}
      style={{ width: 1100, height: 800 }}
    />
  </Container>
)

export default CalendarPage
