import React from "react";
import { useRouter } from "next/router";

const ClientInfo = () => {
  const { pathname, query, push } = useRouter();

  const handleButtonClick = () => {
    push('/client/'+query?.id+'/project-a');
  }

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
      <hr />
      <button onClick={handleButtonClick}>Load Project A</button>
    </>
  );
};

export default ClientInfo;
