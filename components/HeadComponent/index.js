import React from "react";
import Head from "next/head";
const HeadComponent = ({ title, description, keyword, children, og }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="viewport" content="width=device-width user-scalable=1" />
      <meta
        property="og:url"
        content="https://www.thesustainablecity-yiti.com/"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_AR" />
      <meta property="og:locale:alternate" content="ar_AR" />
      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={og.img} />

      <meta property="og:description" content={og.description} />

      <meta property="og:site_name" content="The Sustainable City Yiti" />
      <meta
        property="article:modified_time"
        content="2022-07-28T06:50:17+00:00"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="thesustainablecity-yiti.com" />
      <meta
        property="twitter:url"
        content="https://www.thesustainablecity-yiti.com/"
      />
      <meta name="twitter:image" content={og.img} />
      {children}
    </Head>
  );
};
export default HeadComponent;
