import EventListing from '@/components/EventsPage/EventListing'
import HeroEvents from '@/components/EventsPage/HeroEvents'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroEvents/>
        <EventListing/>
    </div>
  )
}

export default page