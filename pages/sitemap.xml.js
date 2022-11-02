const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://www.thesustainablecity-yiti.com/</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/floorplan</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/about</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/news</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/news/environment-clean-marinedebris</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/news/newly-launched-plan</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/news/investment-value-news</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/contact-us</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/contact-us?broker=true</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/news/tourism-partnership-omran</loc>
  <lastmod>2022-11-02T06:28:11+00:00</lastmod>
  <priority>0.64</priority>
</url>

<url>
  <loc>https://www.thesustainablecity-yiti.com/ar</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/ar/floorplan</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/ar/about</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/ar/news</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/ar/news/environment-clean-marinedebris</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/ar/news/newly-launched-plan</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/ar/news/investment-value-news</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/ar/contact-us</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/ar/contact-us?broker=true</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.thesustainablecity-yiti.com/ar/news/tourism-partnership-omran</loc>
  <lastmod>2022-11-02T06:48:14+00:00</lastmod>
  <priority>0.64</priority>
</url>
</urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
