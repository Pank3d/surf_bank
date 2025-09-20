const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const Joi = require('joi');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Validation schema
const emailSchema = Joi.object({
  to: Joi.string().email().required(),
  subject: Joi.string().required(),
  text: Joi.string().optional(),
  html: Joi.string().optional(),
  from: Joi.string().email().optional()
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Email Service' });
});

// Send email endpoint
app.post('/send-email', async (req, res) => {
  try {
    // Validate request body
    const { error, value } = emailSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message
      });
    }

    const { to, subject, text, html, from } = value;

    // Email options
    const mailOptions = {
      from: from || process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      text,
      html
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email'
    });
  }
});

// Send template email endpoint
app.post('/send-template', async (req, res) => {
  try {
    const { to, template, data } = req.body;

    console.log(`📧 Received request - to: ${to}, template: ${template}`);
    console.log(`📦 Full request body:`, JSON.stringify(req.body, null, 2));

    if (!to || !template) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: to, template'
      });
    }

    let subject, html;

    // Email templates
    switch (template) {
      case 'welcome':
        subject = 'Welcome to Surf Bank!';
        html = `
          <h1>Welcome to Surf Bank!</h1>
          <p>Hello ${data?.name || 'User'},</p>
          <p>Thank you for joining Surf Bank. We're excited to have you on board!</p>
          <p>Best regards,<br>Surf Bank Team</p>
        `;
        break;

      case 'forgot-password':
        subject = 'Reset Your Password';
        html = `
          <h1>Password Reset Request</h1>
          <p>Hello ${data?.name || 'User'},</p>
          <p>You requested to reset your password. Click the link below to reset it:</p>
          <a href="${data?.resetLink}">Reset Password</a>
          <p>If you didn't request this, please ignore this email.</p>
          <p>Best regards,<br>Surf Bank Team</p>
        `;
        break;

      case 'contact':
        subject = 'New Contact Form Submission';
        html = `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${data?.name}</p>
          <p><strong>Email:</strong> ${data?.email}</p>
          <p><strong>Phone:</strong> ${data?.phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${data?.message}</p>
        `;
        break;

      default:
        return res.status(400).json({
          success: false,
          error: 'Unknown template'
        });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully to ${to}, template: ${template}, messageId: ${info.messageId}`);

    res.status(200).json({
      success: true,
      message: 'Template email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Template email sending error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send template email'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Email service running on port ${PORT}`);
});