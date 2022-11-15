import React from "react";
import Head from "next/head";
const HeadComponent = ({
  title,
  description,
  keyword,
  children,
  og,
  canonicaltag,
  language,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonicaltag} />
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
      <meta name="viewport" content="width=device-width user-scalable=1" />
      <meta property="og:url" content={og.url} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_AR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title}></meta>
      <meta property="og:image" itemProp="image" content={og.img} />
      <meta property="og:description" content={og.description} />
      <meta property="og:site_name" content="The Sustainable City Yiti" />
      <meta
        property="article:modified_time"
        content="2022-07-28T06:50:17+00:00"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:description" content={og.description} />
      <meta property="twitter:domain" content="thesustainablecity-yiti.com" />
      <meta property="twitter:url" content={og.url} />
      <meta property="twitter:title" content={og.title} />
      <meta name="twitter:image" content={og.img} />
      <meta name="twitter:site" content="@TSCYiti" />
      <script type="application/ld+json">
        {`{
  "@context": "http://www.schema.org",
  "@type": "Organization",
  "name": "The Sustainable City -Yiti",
  "url": "https://thesustainablecity-yiti.com/",
  "logo": "https://thesustainablecity-yiti.com/Logos/tsc-logo.svg",
  "image": "https://thesustainablecity-yiti.com/Images/masterplanimage.png",
  "description": "Diamond Developers and Omran have joined forces to develop a world-class project that meets the highest standards of social, environmental, and economic sustainability.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mina Al Sultan Qaboos Centre Yiti",
    "addressLocality": "Yiti",
    "addressRegion": "Yiti",
    "addressCountry": "Oman"
  },
  "hasMap": "https://www.google.com/maps/place/The+Sustainable+City+-+Yiti+Experience+Center+(TSCY)/@23.6254328,58.5788909,17z/data=!3m1!4b1!4m5!3m4!1s0x3e91f7fd475123d5:0xdf8ff3ebfaec4d72!8m2!3d23.6254328!4d58.5788909",
  "openingHours": "Mo, Tu, We, Th, Fr 08:30-17:30",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+968 800 33 33",
    "contactType": "general"
  }
}`}
      </script>
      {children}
    </Head>
  );
};
export default HeadComponent;
