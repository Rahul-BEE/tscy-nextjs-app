import { HeadComponent } from "../../components";
import NewsPage from "../../components/News/NewsPage";

const NewsList = () => {
  return (
    <>
      <HeadComponent title={"TSC-News"} />
      <div>
        <NewsPage />
      </div>
    </>
  );
};

export default NewsList;
