import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function EventFilter() {
  const { query } = useRouter();
  return (
    <div className="home-container">
      <Head>
        <title>Filtered - JS Events</title>
        <meta name="description" content="Js all events listing page" />
      </Head>

      <main className="home-main">
        <h1>All Events!!!</h1>
        <h2>{JSON.stringify(query.slug)}</h2>
      </main>
    </div>
  );
}
