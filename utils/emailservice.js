import emailjs from "@emailjs/browser";

const sendEmail = async ({ data, type }) => {
  let temmplateId =
    type === 1
      ? process.env.NEXT_PUBLIC_BROKER_EMAIL_TEMPLATE_ID
      : process.env.NEXT_PUBLIC_REGISTER_INTEREST_TEMPLATE_ID;

  const result = await emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      temmplateId,
      data,
      process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("suceess");
        return true;
      },
      (error) => {
        console.log("error");
        return false;
      }
    );

  return result;
};

export default sendEmail;
