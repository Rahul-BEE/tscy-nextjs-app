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
      />
      <div>
        <NewsPage />
      </div>
    </>
  );
};

export default NewsList;
