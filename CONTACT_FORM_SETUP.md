# Contact Form with SMTP Email - Complete Setup Guide

## 🎉 What's Been Implemented

The contact form now includes:
- ✅ Full form validation (client-side and server-side)
- ✅ SMTP email integration using Nodemailer
- ✅ Beautiful HTML email templates
- ✅ Admin notification emails
- ✅ User confirmation emails
- ✅ Toast notifications for success/error messages
- ✅ Loading states during submission
- ✅ Form reset after successful submission

## 📁 Files Modified/Created

### Backend (Server)
1. **`server/server.js`** - Added email endpoint `/api/contact`
2. **`server/.env`** - SMTP configuration (needs your credentials)
3. **`server/package.json`** - Added nodemailer and dotenv dependencies
4. **`server/README.md`** - Detailed setup instructions

### Frontend
1. **`src/components/Contact.tsx`** - Updated with form state management and API integration

## 🚀 Quick Start Guide

### Step 1: Configure Email Credentials

1. Open `server/.env` file
2. Update with your email credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=esmarthealthcarehyd@gmail.com
PORT=5000
```

### Step 2: Get Gmail App Password

**Important:** You need an App Password, not your regular Gmail password!

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)
3. Go to https://myaccount.google.com/apppasswords
4. Select **Mail** and **Windows Computer**
5. Click **Generate**
6. Copy the 16-character password (remove spaces)
7. Paste it in `.env` as `SMTP_PASS`

### Step 3: Start the Backend Server

Open a terminal in the `server` directory:

```bash
cd server
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

You should see: `Server running on port 5000`

### Step 4: Start the Frontend

Open another terminal in the main project directory:

```bash
npm run dev
```

### Step 5: Test the Contact Form

1. Navigate to the Contact page in your browser
2. Fill out all form fields (all are required)
3. Click "Send Message"
4. You should see:
   - A loading state with "Sending..." text
   - A success toast notification
   - Form fields cleared
   - Admin receives an email with form details
   - User receives a confirmation email

## 📧 Email Templates

### Admin Email
The admin receives a professional email with:
- User's full name
- User's email (clickable)
- User's phone number (clickable)
- Subject line
- Full message
- Timestamp in IST timezone
- Gradient header design

### User Confirmation Email
The user receives:
- Personalized greeting
- Copy of their message
- Contact information
- WhatsApp button
- Professional branding
- 24-hour response promise

## 🎨 Features

### Form Validation
- All fields are required (marked with *)
- Email format validation
- Phone number validation
- Real-time error messages via toast

### User Experience
- Loading state during submission
- Disabled form fields while sending
- Success/error toast notifications
- Form auto-reset after success
- Responsive design

### Security
- Server-side validation
- Email format verification
- CORS enabled for localhost
- Environment variables for sensitive data

## 🔧 Troubleshooting

### "Invalid login" Error
- Use App Password, not regular password
- Enable 2-Step Verification first
- Remove spaces from App Password

### "Connection timeout" Error
- Check internet connection
- Verify SMTP settings
- Try port 465 with `secure: true`

### Emails Not Received
- Check spam/junk folders
- Verify ADMIN_EMAIL in .env
- Check server console for errors

### CORS Errors
- Ensure server is running on port 5000
- Check browser console for details
- Verify API URL in Contact.tsx

### Form Not Submitting
- Check browser console for errors
- Verify all fields are filled
- Ensure server is running
- Check network tab in DevTools

## 🌐 API Endpoint

### POST `/api/contact`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "subject": "Product Inquiry",
  "message": "I would like to know more about..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully! We will get back to you soon."
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message here"
}
```

## 🔐 Security Best Practices

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use App Passwords** - Never use your main email password
3. **Rotate passwords regularly** - Change App Password periodically
4. **Use environment variables** - Don't hardcode credentials
5. **Enable 2FA** - Always use 2-Step Verification

## 📱 Production Deployment

### Environment Variables

Set these in your hosting platform:

**Netlify:**
- Site settings → Environment variables

**Vercel:**
- Project settings → Environment Variables

**Heroku:**
- Settings → Config Vars

**AWS:**
- Use AWS Secrets Manager or Parameter Store

### Required Variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=esmarthealthcarehyd@gmail.com
```

### Update API URL

In production, update the API URL in `src/components/Contact.tsx`:

```typescript
const response = await fetch('https://your-api-domain.com/api/contact', {
  // ... rest of the code
});
```

## 🎯 Testing Checklist

- [ ] Server starts without errors
- [ ] Frontend connects to backend
- [ ] Form validation works
- [ ] All fields are required
- [ ] Email format validation works
- [ ] Loading state appears during submission
- [ ] Success toast appears after submission
- [ ] Form clears after success
- [ ] Admin receives email
- [ ] User receives confirmation email
- [ ] Emails are properly formatted
- [ ] Links in emails work (phone, email, WhatsApp)
- [ ] Error handling works (try with server off)

## 📞 Support

If you need help:
1. Check server console for errors
2. Check browser console for errors
3. Verify all environment variables
4. Test with a simple email first
5. Review the README.md in server directory

## 🎨 Customization

### Change Email Templates

Edit the HTML in `server/server.js`:
- Admin email: Line ~208
- User email: Line ~261

### Change Admin Email

Update `ADMIN_EMAIL` in `server/.env`

### Change API Port

Update `PORT` in `server/.env` and the fetch URL in `Contact.tsx`

### Add More Fields

1. Add field to `formData` state in Contact.tsx
2. Add input field in the form
3. Update validation in handleSubmit
4. Update email templates in server.js

## 🌟 Features to Add (Future)

- [ ] File attachments
- [ ] Email templates in separate files
- [ ] Database logging of submissions
- [ ] Admin dashboard to view submissions
- [ ] Email queue for better reliability
- [ ] Rate limiting to prevent spam
- [ ] reCAPTCHA integration
- [ ] Multiple language support

---

**Created by:** AI Assistant
**Date:** 2024
**Version:** 1.0.0