import { HeadComponent } from "../../components";
import NewsPage from "../../components/News/NewsPage";
import useLanguage from "../../utils/useLanguage";

const NewsList = () => {
  const lan = useLanguage();
  return (
    <>
      <HeadComponent
        title={lan.seo.newspage.title}
        description={lan.seo.newspage.description}
        og={lan.seo.newspage.og}
        keyword={lan.seo.newspage.keyword}
        canonicaltag={lan.seo.newspage.canonicaltag}
        language={lan.language === 1 ? "en" : "ar"}>
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/ar/news/"}
          hrefLang={"ar"}
        />
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/news/"}
          hrefLang={"en"}
        />
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/news/"}
          hrefLang="x-default"
        />
      </HeadComponent>
      <div>
        <NewsPage />
      </div>
    </>
  );
};

export default NewsList;
