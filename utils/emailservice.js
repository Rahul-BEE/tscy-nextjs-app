import emailjs from "@emailjs/browser";

const sendEmail = async ({ data, temmplate }) => {
  let temmplateId =
    temmplate === 1
      ? process.env.NEXT_PUBLIC_BROKER_EMAIL_TEMPLATE_ID
      : process.env.NEXT_PUBLIC_REGISTER_INTEREST_TEMPLATE_ID;
  console.log(data);
  const result = await emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      temmplateId,
      data,
      process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("success");
        return true;
      },
      (error) => {
        console.log(error);
        return false;
      }
    );

  return result;
};

export default sendEmail;
