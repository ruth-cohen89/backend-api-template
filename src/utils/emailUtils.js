const nodemailer = require("nodemailer");
const catchAsync = require("@/utils/catchAsync");
const customError = require("@/utils/customError");
const config = require("config");

class Email {
  constructor(user, message) {
    this.to = user.email;
    this.firstName = user.name;
    this.message = message;
    this.from = `Backend-API-Template <${process.env.EMAIL_FROM}>`;
  }

  _newTransport() {
    if (process.env.NODE_ENV === "development") {
      return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    } else {
      // production: TODO
    }
  }

  async _sendMail(subject) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      text: this.message,
      subject,
    };

    const transport = this._newTransport();
    await transport.sendMail(mailOptions);
  }
}

async function sendVerificationEmail(user, confirmToken) {
  try {
    const origin = config.get("origin");

    // prod
    // const verificationLink = `http://yourdomain.com/verify-email?token=${token}`;

    const confirmURL = `${origin}/api/users/verify-email/${confirmToken}`;
    const emailMessage = `Welcome to Backend-API-Template! To confirm your account, please click here: ${confirmURL}.`;

    const email = new Email(user, emailMessage);
    await email._sendMail("Email Confirmation");
  } catch (error) {
    console.error(`Sending confirmation email failed: ${error.message}`);
    throw new customError(
      "Unable to send confirmation email. Please try again later.",
      500
    );
  }
}

async function sendPasswordReset(user, resetToken) {
  // const resetURL = `${process.env.HOST}/resetPassword/${resetToken}`;
  // const emailMessage = `To reset your password, please submit a POST request to: ${resetURL}.`;
  // const email = new Email(user, emailMessage);
  // await email._sendMail("Password Reset");
}

module.exports = {
  sendVerificationEmail,
  sendPasswordReset,
};

// TODO: prove myself arrow function doesnt have their own this
