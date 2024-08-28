import sgMail from '@sendgrid/mail';
const apiKey =
  typeof import.meta !== 'undefined' && import.meta.env
    ? import.meta.env.VITE_APP_SENDGRID_API_KEY
    : // eslint-disable-next-line no-undef
      process.env.SENDGRID_API_KEY;

sgMail.setApiKey(apiKey);

export default async function (req, res) {
  const { to, subject, text } = req.body;

  const msg = {
    to,
    from: 'radu.musat.abc@gmail.com', // Replace with your verified SendGrid sender email
    subject,
    text
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
