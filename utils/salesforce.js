const sendLead = async ({ data }) => {
  const config = {
    method: "POST",
    mode: "no-cors",
  };
  let result = await fetch(
    `https://login.salesforce.com/servlet/servlet.WebToLead?oid=00D8d0000020Dxr&first_name=${data.firstname}&last_name=${data.lastname}&email=${data.email}&lead_source=${data.leadfrom}&mobile=${data.phone}`,
    config
  )
    .then((result) => {
      console.log("data send", data, result);
      return true;
    })
    .catch((error) => {
      console.log("error,", error);
      return false;
    });

  return result;
};

export default sendLead;
