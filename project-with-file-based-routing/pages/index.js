import Head from "next/head";
import EventList from "../component/events/event-list";
import { getFeaturedEvents } from "../helper/api-utils";

export default function Home(props) {
  const { FeaturedEvents } = props;
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
  );
}

export async function getStaticProps(context) {
  let FeaturedEvents = [];
  try {
    FeaturedEvents = await getFeaturedEvents();
  } catch (error) {
    console.error("HANDLED ERROR!", error);
  }

  return {
    props: {
      FeaturedEvents,
      notFound: Boolean(FeaturedEvents.length),
      revalidate: 24 * 60 * 60,
    },
  };
}
