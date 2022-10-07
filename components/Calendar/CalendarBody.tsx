import moment from 'moment';
import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const CalendarBody = () => {
    
    const localizer = momentLocalizer(moment)
    
    return (
        <div className='w-full h-full'>
            <Calendar
                views={["day", "agenda", "work_week", "month"]}
                selectable
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                style={{ height: "100%" , width : '100%' }}
                onSelectEvent={(event) => alert(event.title)}
            />
        </div>
    )
}

export default CalendarBody