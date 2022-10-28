import emailjs from "@emailjs/browser";

const sendEmail = async ({ data, type }) => {
  let temmplateId = type === 1 ? "template_bs7cvpn" : "template_q9yq3pa";

  const result = await emailjs.send("service_p7b4tsl", temmplateId, data, "A0OhZGlGQnSbuFer8").then(
    (result) => {
      console.log("suceess");
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
