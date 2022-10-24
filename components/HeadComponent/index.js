import React from "react";
import Head from "next/head";
const HeadComponent = ({ title, description, keyword }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width user-scalable=1" />
    </Head>
  );
};
export default HeadComponent;
