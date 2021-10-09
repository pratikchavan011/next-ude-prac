import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../component/events/event-list";
import ResultTitle from "../../component/events/results-title";
import Button from "../../component/ui/button";
import ErrorAlert from "../../component/ui/error-alert";

import { getFilteredEvents } from "../../data/dummy-data";

export default function EventFilter() {
  const {
    query: { slug },
  } = useRouter();

  if (!slug) {
    return <p className="center">Loading....</p>;
  }

  const year = slug[0];
  const month = slug[1];

  const numYear = parseInt(year);
  const numMonth = parseInt(month);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2021 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="main">
        <ErrorAlert>
          <p className="center">
            Invalid Filter!!! Please adjust filter properly.
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </div>
    );
  }

  const data = getFilteredEvents({ year: numYear, month: numMonth });

  if (!data || !data.length) {
    return (
      <div className="main">
        <ErrorAlert>
          <p className="center">No Events Found!!!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div className="home-container">
      <Head>
        <title>Filtered - JS Events</title>
        <meta name="description" content="Js all events listing page" />
      </Head>

      <ResultTitle date={date} />

      <EventList items={data} />
    </div>
  );
}
