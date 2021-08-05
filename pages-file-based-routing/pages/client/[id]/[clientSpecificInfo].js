import React from "react";
import { useRouter } from "next/router";

const ClientSpecificInfo = () => {
  const { pathname, query } = useRouter();
  return (
    <>
      <h1> Client Specific Info</h1>
      <code>
        pathname : {JSON.stringify(pathname)}
            <br/>
        query    : {JSON.stringify(query)}
        <br/>
        id    : {query?.id}
        <br/>
        clientSpecificInfo    : {query?.clientSpecificInfo}
      </code>
    </>
  );
};

export default ClientSpecificInfo;
