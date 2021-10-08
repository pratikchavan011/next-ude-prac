import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function EventDetails() {
  const { query } = useRouter();
  return (
    <div className="home-container">
      <Head>
        <title>Event - {query.id}</title>
        <meta
          name="description"
          content={`JS events - ${query.id} details page`}
        />
      </Head>

      <main className="home-main">
        <h1>Event Details Page - ID :: {query.id}</h1>
      </main>
    </div>
  );
}
