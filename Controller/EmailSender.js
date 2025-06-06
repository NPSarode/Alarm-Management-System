import { createTestAccount, createTransport } from "nodemailer";

export const sendEmail = async (email) => {
  await createTestAccount();

  const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'merlin.konopelski@ethereal.email',
        pass: '9U86nRCaX2XZgUgDyH'
    },
  });

  const info = await transporter.sendMail({
    from: '"Nikhil Sarode 👻" <nikhil@gmail.com>', // sender address
    to: "nikhilsarode2020@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};
