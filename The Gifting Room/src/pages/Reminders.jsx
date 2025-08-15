import { useState } from "react"
import "../pageStyle/Reminders.css"

const Calendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthsOfYear = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ]
    const currentDate = new Date()
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
    const [selectedDate, setSelectedDate] = useState(currentDate)
    const [showEventPopup, setShowEventPopup] = useState(false)
    const [events, setEvents] = useState([])
    const [eventTime, setEventTime] = useState({ hours: '00', minutes: '00' })
    const [eventText, setEventText] = useState('')
    const [editEvent, setEditEvent] = useState(null)

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

    const prevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth===0? 11: prevMonth-1))
        setCurrentYear((prevYear) => (currentMonth===0? prevYear-1 : prevYear))
    }

    const nextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth===11? 0: prevMonth + 1))
        setCurrentYear((prevYear) => (currentMonth===0? prevYear+1 : prevYear))
    }

    const handleDateClick = (day) => {
        const dateClicked = new Date(currentYear, currentMonth, day)
        const today = new Date()

        if (dateClicked >= today || isSameDate(dateClicked, today)) {
            setSelectedDate(dateClicked)
            setShowEventPopup(true)
            setEventTime({ hours: '00', minutes: '00' })
            setEventText('')
            setEditEvent(null)
        }
    }

    const isSameDate = (date1, date2) => {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear()
    }

    const handleEventSubmit = () => {
        const newEvent = {
            id: editEvent ? editEvent.id : Date.now(),
            date: selectedDate,
            time: `${eventTime.hours.padStart(2, '0')}:${eventTime.minutes.padStart(2, '0')}`,
            text: eventText
        }

        let updatedEvents = [...events]

        if (editEvent) {
            updatedEvents = updatedEvents.map((event) =>
                event.id === editEvent.id ? newEvent : event,
            )
        } else {
            updatedEvents.push(newEvent)
        }

        updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date))

        setEvents(updatedEvents)
        setEventTime({ hours: '00', minutes: '00' })
        setEventText('')
        setShowEventPopup(false)
        setEditEvent(null)
    }
    const handleEditEvent = (event) => {
        setSelectedDate(new Date(event.date))
        setEventTime({
            hours: event.time.split(':')[0],
            minutes: event.time.split(':')[1]
        })
        setEventText(event.text)
        setEditEvent(event)
        setShowEventPopup(true)
    }

    const handleDeleteEvent = (eventId) => {
        const updatedEvents = events.filter(event => event.id !== eventId)
        setEvents(updatedEvents)
    }

    const handleTimeChange = (e) => {
        const { name, value } = e.target
        setEventTime((prevTime) => ({
            ...prevTime,
            [name]: value.padStart(2, '0')
        }))
    }

  return (
    <div className="calendar-app">
        <div className= "calendar">
            <h1 className="heading">Calendar</h1>
            <div className="navigate-date">
                <h2 className="month">{monthsOfYear[currentMonth]}</h2>
                <h2 className="year">{currentYear}</h2>
                <div className="buttons">
                    <i className='bx bx-chevron-left' onClick={prevMonth}></i>
                    <i className='bx bx-chevron-right' onClick={nextMonth}></i>
                </div>
            </div>
            <div className="weekdays">
                {daysOfWeek.map((day) => <span key={day}>{day}</span>)}
            </div>
            <div className="days">
                {[...Array(firstDayOfMonth).keys()].map((_, index) => 
                    <span key={`empty-${index}`} />
                )}
                {[...Array(daysInMonth).keys()].map((day) => 
                    <span key={day+1} className= {
                        day + 1 === currentDate.getDate() &&
                        currentMonth === currentDate.getMonth() &&
                        currentYear === currentDate.getFullYear() ?
                        "current-day" : ""
                    } onClick={() => handleDateClick(day + 1)}>
                        {day+1}
                    </span>
                )}
            </div>
        </div>
        <div className="events">
            {showEventPopup && (
            <div className="event-popup">
                <div className="time-input">
                    <div className="event-popup-time">Time</div>
                    <input type="number" name="hours" min={0} max={24} className="hours" value={eventTime.hours} 
                    onChange={handleTimeChange}/>
                    <input type="number" name="minutes" min={0} max={59} className="minutes" value={eventTime.minutes}
                    onChange={handleTimeChange}/>
                </div>
                <textarea placeholder="Enter Event" value={eventText} onChange={(e) => {
                    if (e.target.value.length <= 100) {
                        setEventText(e.target.value)
                    }
                }} />
                <button className="add-event" onClick={handleEventSubmit}>Add Event</button>
                <button className="close-popup" onClick={() => setShowEventPopup(false)}>
                    <i className='bx bx-x'></i>
                </button>
            </div>)}
            {events.map((event, index) => (
                <div className="event" key={index}>
                    <div className="event-date-wrapper">
                        <div className="event-date">
                            {`${monthsOfYear[event.date.getMonth()]} ${event.date.getDate()} ${event.date.getFullYear()}`}
                        </div>
                        <div className="event-time">
                            {event.time}
                        </div>
                    </div>
                    <div className="event-text">
                        &nbsp; {event.text}
                    </div>
                    <div className="event-buttons">
                        <i className="bx bxs-edit-alt" onClick = {() => handleEditEvent(event)}/>
                        <i className="bx bxs-message-alt-x" onClick={() => handleDeleteEvent(event.id)}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Calendar;
