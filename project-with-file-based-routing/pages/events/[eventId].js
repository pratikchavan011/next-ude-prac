import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import EventSummary from "../../component/event-detail/event-summary";
import EventLogistics from "../../component/event-detail/event-logistics";
import EventContent from "../../component/event-detail/event-content";
import ErrorAlert from "../../component/ui/error-alert";

import { getEventById } from "../../data/dummy-data";

export default function EventDetails() {
  const { query } = useRouter();
  const { eventId } = query;
  const event = getEventById(eventId);

  if (!event) {
    return <ErrorAlert>No Event Found!</ErrorAlert>;
  }

  return (
    <>
    {/* <div className="home-container"> */}
      <Head>
        <title>Event - {eventId}</title>
        <meta
          name="description"
          content={`JS events - ${eventId} details page`}
        />
      </Head>

      {/* <main className="home-main"> */}
        <div>
          <EventSummary title={event.title} />
          <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
          />
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
        </div>
      {/* </main> */}
    {/* </div> */}
    </>
  );
}
