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
        {`
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Sustainable City Yiti",
          "legalName" : "The Sustainable City Yiti, Oman",
           "url": "https://thesustainablecity-yiti.com/",
          "logo": "https://thesustainablecity-yiti.com/Logos/tsc-logo.svg",
          "foundingDate": "2022",
          "founders": [
          {
          "@type": "company",
          "name": "Diamond Developers"
          },
          {
          "@type": "company",
          "name": "Omran"
          } ],
        "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Bahri Rd, Muscat, Oman",
        "addressLocality": "Al Bahri Rd, مسقط",
        "addressRegion": "Yiti",
        "addressCountry": "OMAN"
        },
        "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "[+96880003333]",
        "email": "hello@thesustainablecity-yiti.com"
        },
    "sameAs": [ 
    "https://www.linkedin.com/company/the-sustainable-city-yiti/",
    "https://twitter.com/TSCYiti?s=20&t=YSRqGJh4w6nxJuNR23i_rw",
    "https://www.facebook.com/ThesustainablecityYiti?ref=py_c",
    "https://www.instagram.com/thesustainablecity_yiti/",
    ]
`}
      </script>
      {children}
    </Head>
  );
};
export default HeadComponent;
