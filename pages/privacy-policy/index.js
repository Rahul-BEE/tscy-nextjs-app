import React, { useEffect } from "react";
import styles from "../../styles/policies.module.scss";
const PrivacyPolicy = () => {
  useEffect(() => {
    const func = async (d, s, id) => {
      var js,
        tjs = d.getElementsByTagName(s)[0];
      //   if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://app.termly.io/embed-policy.min.js";
      await tjs.parentNode.insertBefore(js, tjs);
    };

    func(document, "script", "termly-jssdk");
  }, []);
  return (
    <div className={styles.policyparent}>
      <div
        name="termly-embed"
        data-id="d0f76d9c-cc82-47e3-b616-aa69a2a46127"
        data-type="iframe"></div>
    </div>
  );
};

export default PrivacyPolicy;
