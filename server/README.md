# Contact Form Email Setup Guide

This guide will help you configure the SMTP email functionality for the contact form.

## Prerequisites

- Node.js installed
- A Gmail account (or other SMTP email provider)

## Setup Instructions

### 1. Install Dependencies

The required dependencies are already installed:
- `nodemailer` - For sending emails
- `dotenv` - For environment variables

### 2. Configure Gmail App Password

If you're using Gmail, you need to create an App Password (not your regular Gmail password):

1. Go to your Google Account: https://myaccount.google.com/
2. Select **Security** from the left menu
3. Under "Signing in to Google," select **2-Step Verification** (you must enable this first)
4. At the bottom, select **App passwords**
5. Select **Mail** and **Windows Computer** (or Other)
6. Click **Generate**
7. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

### 3. Update .env File

Open the `.env` file in the `server` directory and update it with your credentials:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-actual-email@gmail.com
SMTP_PASS=your-16-character-app-password

# Admin email to receive contact form submissions
ADMIN_EMAIL=esmarthealthcarehyd@gmail.com

# Server Port
PORT=5000
```

**Important:**
- Replace `your-actual-email@gmail.com` with your Gmail address
- Replace `your-16-character-app-password` with the App Password you generated
- Remove spaces from the App Password (e.g., `xxxx xxxx xxxx xxxx` becomes `xxxxxxxxxxxxxxxx`)

### 4. Start the Server

From the `server` directory, run:

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

The server will start on `http://localhost:5000`

### 5. Test the Contact Form

1. Make sure the React app is running (`npm run dev` from the main directory)
2. Navigate to the Contact page
3. Fill out the form and submit
4. You should see a success toast notification
5. Check your admin email for the contact form submission
6. The user will receive a confirmation email

## Email Features

### Admin Email
When a user submits the contact form, the admin receives:
- User's full name
- User's email (with reply-to functionality)
- User's phone number
- Subject line
- Full message
- Timestamp in IST timezone

### User Confirmation Email
The user receives:
- Thank you message
- Copy of their submitted message
- Contact information for eSmart Healthcare
- WhatsApp button for quick contact
- Professional branded email template

## Troubleshooting

### "Invalid login" error
- Make sure you're using an App Password, not your regular Gmail password
- Ensure 2-Step Verification is enabled on your Google account
- Check that there are no spaces in the App Password

### "Connection timeout" error
- Check your internet connection
- Verify SMTP_HOST and SMTP_PORT are correct
- Some networks block port 587; try port 465 with `secure: true`

### Emails not being received
- Check spam/junk folders
- Verify ADMIN_EMAIL is correct in .env
- Check server console for error messages

### CORS errors in browser
- Make sure the server is running on port 5000
- Check that CORS is enabled in server.js (it is by default)

## Using Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
```

## Security Notes

- Never commit the `.env` file to version control
- The `.env` file is already in `.gitignore`
- Keep your App Password secure
- Rotate passwords regularly
- Use environment variables in production

## Production Deployment

For production, set environment variables in your hosting platform:
- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment Variables
- Heroku: Settings → Config Vars
- AWS: Use AWS Secrets Manager or Parameter Store

## Support

If you encounter any issues:
1. Check the server console for error messages
2. Verify all environment variables are set correctly
3. Test with a simple email first
4. Check email provider's SMTP documentation