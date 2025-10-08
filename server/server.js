const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Function to fetch categories from medineeds.in
async function fetchMedineedsCategories() {
  try {
    const { data } = await axios.get('https://medineeds.in/');
    const $ = cheerio.load(data);

    const categories = {
      'mobility-aids': [
        { name: 'Walking Sticks', href: '/products?category=walking-sticks' },
        { name: 'Walker', href: '/products?category=walker' },
        { name: 'Wheelchairs', href: '/products?category=wheelchairs' },
        { name: 'Commode', href: '/products?category=commode' }
      ],
      'patient-care': [
        { name: 'AirBeds', href: '/products?category=airbeds' },
        { name: 'Injection | Tube | Needles', href: '/products?category=injection-tube-needles' },
        { name: 'Cleaning', href: '/products?category=cleaning' },
        { name: 'Health Care Device', href: '/products?category=health-care-device' },
        { name: 'Acupressure', href: '/products?category=acupressure' },
        { name: 'Dressing', href: '/products?category=dressing' },
        { name: 'Adult Diapers', href: '/products?category=adult-diapers' },
        { name: 'Shower Chair', href: '/products?category=shower-chair' },
        { name: 'Ointments', href: '/products?category=ointments' },
        { name: 'Underpads', href: '/products?category=underpads' },
        { name: 'Dental Care', href: '/products?category=dental-care' },
        { name: 'Hearing Battery', href: '/products?category=hearing-battery' }
      ],
      'brands': [
        { name: 'Karma', href: '/products?brand=karma' },
        { name: 'Coloplast', href: '/products?brand=coloplast' },
        { name: 'Romsons', href: '/products?brand=romsons' },
        { name: 'Hicks', href: '/products?brand=hicks' },
        { name: 'B-Fit', href: '/products?brand=b-fit' },
        { name: 'ConvaTec', href: '/products?brand=convatec' },
        { name: 'Vissco', href: '/products?brand=vissco' },
        { name: 'Hollister', href: '/products?brand=hollister' },
        { name: 'One Touch', href: '/products?brand=one-touch' },
        { name: 'Beurer', href: '/products?brand=beurer' },
        { name: 'Point Of Care', href: '/products?brand=point-of-care' },
        { name: 'Dr.Morepen', href: '/products?brand=dr-morepen' },
        { name: 'Omron', href: '/products?brand=omron' }
      ],
      'support': [
        { name: 'Knee & Calf Support', href: '/products?category=knee-calf-support' },
        { name: 'Leg Support', href: '/products?category=leg-support' },
        { name: 'Cervical Collar (Neck)', href: '/products?category=cervical-collar' },
        { name: 'Finger Support', href: '/products?category=finger-support' },
        { name: 'Hand Support', href: '/products?category=hand-support' },
        { name: 'Back Support', href: '/products?category=back-support' },
        { name: 'Elbow Support', href: '/products?category=elbow-support' },
        { name: 'Foot Support', href: '/products?category=foot-support' }
      ]
    };

    return categories;
  } catch (error) {
    console.error('Error fetching medineeds categories:', error);
    return {};
  }
}

// Function to fetch ostomy categories from coloplaststore.in
async function fetchColoplastCategories() {
  try {
    const { data } = await axios.get('https://coloplaststore.in/');
    const $ = cheerio.load(data);

    const ostomyCategories = [
      { name: 'Ostomy Bags', href: '/products?category=ostomy-bags' },
      { name: 'Ostomy Baseplates', href: '/products?category=ostomy-baseplates' },
      { name: 'Supporting Products', href: '/products?category=supporting-products' },
      { name: 'Brands', href: '/products?category=ostomy-brands' }
    ];

    return ostomyCategories;
  } catch (error) {
    console.error('Error fetching coloplast categories:', error);
    return [];
  }
}

// Endpoint to get categories
app.get('/api/categories', async (req, res) => {
  try {
    const medineedsCats = await fetchMedineedsCategories();
    const coloplastCats = await fetchColoplastCategories();

    res.json({
      'ostomy-care': coloplastCats,
      ...medineedsCats
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Endpoint to get products
app.get('/api/products', async (req, res) => {
  const { category, brand } = req.query;

  try {
    let url;
    if (category && category.startsWith('ostomy')) {
      url = `https://coloplaststore.in/collections/${category.replace('ostomy-', '').replace('-', '-')}`;
    } else if (category) {
      url = `https://medineeds.in/collections/${category}`;
    } else if (brand) {
      url = `https://medineeds.in/collections/${brand}`;
    } else {
      url = 'https://medineeds.in/collections/all';
    }

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const products = [];

    // For medineeds.in
    $('.product-item, .grid__item').each((i, elem) => {
      const title = $(elem).find('h3, .product-title, a').first().text().trim() || $(elem).find('img').attr('alt');
      const price = $(elem).find('.price, .money').text().trim();
      const image = $(elem).find('img').attr('src');
      const link = $(elem).find('a').attr('href');

      if (title) {
        products.push({
          title,
          price: price || '₹ 0',
          image: image ? (image.startsWith('http') ? image : 'https:' + image) : '',
          link: link ? (link.startsWith('http') ? link : 'https://medineeds.in' + link) : ''
        });
      }
    });

    // If no products, add dummy
    if (products.length === 0) {
      products.push({
        title: 'Sample Product',
        price: '₹ 100',
        image: 'https://via.placeholder.com/200',
        link: '#'
      });
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Endpoint to send contact form email
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Contact form submission received:', req.body);
    const { firstName, lastName, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      console.log('❌ Validation failed: Missing required fields');
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed: Invalid email format');
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email format' 
      });
    }

    console.log('✅ Validation passed, creating transporter...');
    const transporter = createTransporter();

    // Email to admin
    const adminMailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || 'esmarthealthcarehyd@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #667eea; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #667eea; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="footer">
                <p>This email was sent from the eSmart Healthcare contact form</p>
                <p>Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: `"eSmart Healthcare" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting eSmart Healthcare',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .message-box { background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; }
            .contact-info { background: white; padding: 20px; margin-top: 20px; border-radius: 8px; }
            .contact-item { margin: 10px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .btn { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
              <p>Dear ${firstName} ${lastName},</p>
              <p>We have received your message and appreciate you taking the time to reach out to us.</p>
              
              <div class="message-box">
                <h3>Your Message:</h3>
                <p><strong>Subject:</strong> ${subject}</p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>

              <p>Our team will review your inquiry and get back to you within 24 hours.</p>

              <div class="contact-info">
                <h3>Contact Information:</h3>
                <div class="contact-item">📧 Email: esmarthealthcarehyd@gmail.com</div>
                <div class="contact-item">📞 Phone: 1800-102-0550 / 0120-407-1300</div>
                <div class="contact-item">💬 WhatsApp: +91 9088869996</div>
                <div class="contact-item">🕒 Support Hours: Monday - Saturday, 9:00 AM - 6:00 PM</div>
              </div>

              <p>For urgent matters, please feel free to call us directly or reach out via WhatsApp.</p>

              <center>
                <a href="https://wa.me/919088869996" class="btn">Chat on WhatsApp</a>
              </center>

              <div class="footer">
                <p>Best regards,<br><strong>eSmart Healthcare Team</strong></p>
                <p>Serving Telangana & Andhra Pradesh with quality medical supplies</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    console.log('📤 Sending admin notification email...');
    await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent successfully');
    
    console.log('📤 Sending user confirmation email...');
    await transporter.sendMail(userMailOptions);
    console.log('✅ User confirmation email sent successfully');

    res.json({ 
      success: true, 
      message: 'Your message has been sent successfully! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again or contact us directly.',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});