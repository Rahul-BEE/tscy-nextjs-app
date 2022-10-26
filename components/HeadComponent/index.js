import React from "react";
import Head from "next/head";
import useLanguage from "../../utils/useLanguage";
const HeadComponent = ({ title, description, keyword, children }) => {
  const lan = useLanguage();
  return (
    <Head>
      <title>{title}</title>
      {lan.language === 1 ? (
        <meta
          name="description"
          content="Oman Tourism Development Company (Omran) and Diamond Developers have joined forces to develop a The Sustainable City Yiti, a world-class, mixed use project that meets the highest standards of social, environmental, and economic sustainability."
        />
      ) : (
        <meta
          name="description"
          content="المدينة المُستدامة - يتي هي مشروعٌ نوعيٌّ جديد جاء ثمرة تضافر الجهود والرؤى بين الشركة العمانية للتنمية السياحية (عمران) وشركة دايموند ديفلوبرز لتطوير مشروع عالمي المستوى ومتعدد الاستخدامات يعتمدُ أعلى معايير الاستدامة الاجتماعية والبيئية والاقتصادية. اختيرَ للمدينة موقعٌ ساحليٌّ رائع على شريط ساحلي خلاب مطل على خليج عُمان، وهي تشكلُ أيقونةً معماريةً تجتمع فيها مقومات الريادة في مفاهيم الاستدامة مع جودة لا تُضاهى في أسلوب العيش والحياة ضمن مجتمع متكامل على أرض سلطنة عُمان."
        />
      )}
      <meta name="viewport" content="width=device-width user-scalable=1" />
      <meta
        property="og:url"
        content="https://www.thesustainablecity-yiti.com/"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_AR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        itemprop="image"
        content="%PUBLIC_URL%/Images/map-pic.png"
      />
      {lan.language === 1 ? (
        <meta
          property="og:description"
          content="Oman Tourism Development Company (Omran) and Diamond Developers have joined forces to develop a The Sustainable City Yiti, a world-class, mixed use project that meets the highest standards of social, environmental, and economic sustainability."
        />
      ) : (
        <meta
          property="og:description"
          content="المدينة المُستدامة - يتي هي مشروعٌ نوعيٌّ جديد جاء ثمرة تضافر الجهود والرؤى بين الشركة العمانية للتنمية السياحية (عمران) وشركة دايموند ديفلوبرز لتطوير مشروع عالمي المستوى ومتعدد الاستخدامات يعتمدُ أعلى معايير الاستدامة الاجتماعية والبيئية والاقتصادية. اختيرَ للمدينة موقعٌ ساحليٌّ رائع على شريط ساحلي خلاب مطل على خليج عُمان، وهي تشكلُ أيقونةً معماريةً تجتمع فيها مقومات الريادة في مفاهيم الاستدامة مع جودة لا تُضاهى في أسلوب العيش والحياة ضمن مجتمع متكامل على أرض سلطنة عُمان."
        />
      )}

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
      <meta
        name="twitter:image"
        content="%PUBLIC_URL%/Images/map-pic.png"></meta>
      <title>Homepage | The Sustainable City Yiti</title>

      {children}
    </Head>
  );
};
export default HeadComponent;
