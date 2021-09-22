import React from "react";
import Link from 'next/link';

const Client = () => {
  const clients =  [
    {
      id: "0001",
      name: 'Pratik'
    },
    {
      id: "0002",
      name: 'Saai'
    }
  ]
  return (
    <>
      <h1> Client Page</h1>
      <ul>
        {clients.map(o => (
          <li key={o.id}>
            <Link href={`/client/${o.name}`}>{o.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      -----------------------------------  OR  -----------------------------------
      <br />
      <ul>
        {clients.map(o => (
          <li key={o.id}>
            <Link href={{
              pathname: '/client/[id]',
              query: { id: o.name }
            }}>{o.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Client;
