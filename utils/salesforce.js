const sendLead = async ({ data }) => {
  const config = {
    method: "POST",
    mode: "no-cors",
  };
  let result = await fetch(
    `https://test.salesforce.com/servlet/servlet.WebToLead?oid=00D250000009OKo&first_name=${data.firstname}&last_name=${data.lastname}&email=${data.email}&lead_source=${data.leadfrom}&phone=${data.phone}`,
    config
  )
    .then((result) => {
      return true;
    })
    .catch((error) => {
      return false;
    });

  return result;
};

export default sendLead;
