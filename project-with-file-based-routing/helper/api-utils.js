import axios from "axios";

export const getEvents = async () => {
  const events = [];
  try {
    const res = await axios.get(`${process.env.FIREBASE_URL}events.json`);
    for (const id in res.data) {
      if (Object.hasOwnProperty.call(res.data, id)) {
        events.push({
          id: id,
          ...res.data[id],
        });
      }
    }
  } catch (error) {
    console.error("HANDLED ERROR!", error);
  }

  return events;
};

export const getFeaturedEvents = async () => {
  const events = await getEvents();
  return events.filter((item) => item.isFeatured);
};

export const getEventById = async (id) => {
  const events = await getEvents();
  const event = events.find((item) => item.id === id);
  return event;
};
