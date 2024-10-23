import nodemailer from 'nodemailer';

export async function post({ request }) {
  const formData = await request.formData();
  const type = formData.get('inline-radio-group'); // either "Für Bewerber" or "Für Unternehmen"
  const name = formData.get('email'); // This seems to be the name field, not email
  const email = formData.get('subject'); // This is the email field, not subject
  const message = formData.get('message');

  // Create a transporter using an email service like Gmail
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Change to your preferred service or SMTP config
    auth: {
      user: process.env.EMAIL_USER, // You will need to set up environment variables
      pass: process.env.EMAIL_PASS,
    },
  });

  // Compose the email
  const mailOptions = {
    from: email, // The form submitter’s email
    to: 'yourcompanyemail@example.com', // Your company email
    subject: 'New Contact Form Submission',
    text: `Type: ${type}\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
