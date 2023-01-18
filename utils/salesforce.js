const sendLead = async ({ data }) => {
  const config = {
    method: "POST",
    mode: "no-cors",
  };
  try {
    await fetch(
      `https://login.salesforce.com/servlet/servlet.WebToLead?oid=00D8d0000020Dxr&first_name=${data.firstname}&last_name=${data.lastname}&email=${data.email}&lead_source=${data.leadfrom}&Partner_Mobile__c=${data.phone}`,
      config
    );
    return true;
  } catch (error) {
    return false;
  }
};

export default sendLead;
