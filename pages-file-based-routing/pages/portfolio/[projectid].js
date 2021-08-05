import React from "react";
import { useRouter } from "next/router";

const portfolio = () => {
  const { pathname, query } = useRouter();
  return (
    <>
      <h1> Dynamic Path</h1>
      <code>
        pathname : {JSON.stringify(pathname)}
            <br/>
        query    : {JSON.stringify(query)}
        <br/>
        projectid    : {query?.projectid}
      </code>
    </>
  );
};

export default portfolio;
