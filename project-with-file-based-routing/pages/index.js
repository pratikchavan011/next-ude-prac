import Head from 'next/head'
import EventList from '../component/events/event-list';

import {getFeaturedEvents} from '../data/dummy-data';

export default function Home() {
  const FeaturedEvents = getFeaturedEvents()
  return (
    <div className="home-container">
      <Head>
        <title>Home - JS Events</title>
        <meta name="description" content="Js Event listing home page" />
      </Head>

      <main className="home-main">
        <h1>Featured Events!!!</h1>
        <EventList items={FeaturedEvents} />
      </main>
    </div>
  )
}
