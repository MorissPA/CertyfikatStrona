const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.wp.pl",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

const sendEmail = async (req, res) => {
  try {
    const name = req.body.name;
    const clientEmail = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const mail = {
      from: `"${name}" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `${name} - ${subject}`,
      text: `Client's Email: ${clientEmail}\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mail);

    // Send a thank you email to the client
    sendThankYouEmail(clientEmail);

    res.json({
      status: 'success',
    });
  } catch (error) {
    console.error('Błąd wysyłania emaila:', error);
    res.status(500).json({
      status: 'error',
      message: 'Wystąpił błąd podczas wysyłania wiadomości email.',
    });
  }
};

const sendThankYouEmail = async (clientEmail) => {
  try {
    const mail = {
      from: process.env.EMAIL,
      to: clientEmail,
      subject: 'Dziękujemy za wysłanie wiadomości',
      text: 'Dziękujemy za wysłanie wiadomości. Z poważaniem, MP',
    };

    await transporter.sendMail(mail);
  } catch (error) {
    console.error('Błąd wysyłania emaila z podziękowaniami:', error);
  }
};

module.exports = {
  sendEmail,
};
