/* eslint-disable @typescript-eslint/no-require-imports */
const nodemailer = require("nodemailer");

const email = process.env.NODE_MAILER_EMAIL;
const pass = process.env.NODE_MAILER_PASSWORD;

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: email,
		pass: pass,
	},
});

const mailOptions = (receiver: string) => {
	return {
		from: email,
		to: receiver,
	};
};

type params = {
	receiver: string;
	subject: string;
	text?: string;
	template: string;
};

const sendEmail = async ({ receiver, subject, text, template }: params) => {
	await transporter.sendMail({
		...mailOptions(receiver),
		subject: subject,
		text: text,
		html: template,
	});
};

export default sendEmail;