import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import EventList from "../../component/events/event-list";
import EventSearch from "../../component/events/event-search";

import { getAllEvents } from "../../data/dummy-data";

export default function Home() {
  const allEvents = getAllEvents();
  const { push } = useRouter();

  const onSearch = (year, month) => {
    push(`/events/${year}/${month}`);
  };
  return (
    <>
      <Head>
        <title>Listing - JS Events</title>
        <meta name="description" content="Js all events listing page" />
      </Head>

      {/* <main className="home-main"> */}
      <EventSearch onSearch={onSearch} />
      <EventList items={allEvents} />
      {/* </main>       */}
    </>
  );
}
