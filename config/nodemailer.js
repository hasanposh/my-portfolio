import nodemailer from "nodemailer";

const email = 'hasan104hasan@gmail.com';
const pass = 'lqno uiwh tfpy meay';

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
