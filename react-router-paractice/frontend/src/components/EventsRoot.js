import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from './EventsNavigation'

function EventsRootLayout() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}

export default EventsRootLayout