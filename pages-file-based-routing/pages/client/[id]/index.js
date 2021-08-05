import React from "react";
import { useRouter } from "next/router";

const ClientInfo = () => {
  const { pathname, query } = useRouter();
  return (
    <>
      <h1> Client Info</h1>
      <code>
        pathname : {JSON.stringify(pathname)}
            <br/>
        query    : {JSON.stringify(query)}
        <br/>
        id    : {query?.id}
      </code>
    </>
  );
};

export default ClientInfo;
