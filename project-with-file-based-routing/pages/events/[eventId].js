import React from "react";
import Head from "next/head";

import EventSummary from "../../component/event-detail/event-summary";
import EventLogistics from "../../component/event-detail/event-logistics";
import EventContent from "../../component/event-detail/event-content";
import ErrorAlert from "../../component/ui/error-alert";

import { getEventById, getEvents } from "../../helper/api-utils";

export default function EventDetails(props) {
  const { event } = props;

  if (!event) {
    return <ErrorAlert>No Event Found!</ErrorAlert>;
  }

  return (
    <>
      <Head>
        <title>Event - {event.id}</title>
        <meta
          name="description"
          content={`JS events - ${event.id} details page`}
        />
      </Head>

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
    </>
  );
}

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);

  return {
    props: {
      event
    },
  };
}

export async function getStaticPaths() {
  const events = await getEvents();
  
  return {
    paths: events.map((event) => ({
      params: {
        eventId: event.id,
      }
    })),
    fallback: false
  };
}
