const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors');
const port = process.env.PORT || 3001;
app.use(cors({ origin: 'http://localhost:3000' })); 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {

    user: process.env.GMAIL_USER,
    pass:process.env.GMAIL_PASSWORD,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,

  }
});

app.post('/api/email', async (req, res) => {
  try {
    const { email , title } = req.body; // Destructure email from request body
    console.log(`Received email: ${email}`);
    console.log(`Received email: ${title}`);

    const mailOptions = {
      from: 'devgsoc24@gmail.com',
      to: 'devgadani43@gmail.com', // Replace with the recipient's email
      subject: 'LG-WIKI entry ',
      // text: `made by : ${email}\n`,
      html: `<h2> new entry add by <b> ${email}<b> </h2>\n<br>
           <h3> TItle : <b> ${title}</b> </h3>'\n'<br><br>
           <a href="http://localhost:3000/admin" style="padding :20px ;background-color:green; color:white ; border-radius: 25px ; margin:20px;">go and check now </a>
  `
    };

    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully!');
    
    res.status(200).send('Data received and email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email!' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
