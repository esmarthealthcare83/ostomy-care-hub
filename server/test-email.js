/**
 * Test script for contact form email endpoint
 * 
 * Usage: node test-email.js
 * 
 * This will send a test request to the /api/contact endpoint
 * Make sure the server is running before executing this script
 */

const http = require('http');

const testData = JSON.stringify({
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  phone: '+91 9876543210',
  subject: 'Test Email from Contact Form',
  message: 'This is a test message to verify the email functionality is working correctly.'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': testData.length
  }
};

console.log('🧪 Testing contact form email endpoint...\n');
console.log('📤 Sending test data:');
console.log(JSON.parse(testData));
console.log('\n⏳ Waiting for response...\n');

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`📊 Status Code: ${res.statusCode}`);
    console.log('📨 Response:');
    try {
      const response = JSON.parse(data);
      console.log(JSON.stringify(response, null, 2));
      
      if (response.success) {
        console.log('\n✅ SUCCESS! Email sent successfully!');
        console.log('📧 Check your admin email for the contact form submission');
        console.log('📧 Check test@example.com for the confirmation email');
      } else {
        console.log('\n❌ FAILED! Error:', response.error);
      }
    } catch (e) {
      console.log(data);
      console.log('\n❌ Failed to parse response');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error:', error.message);
  console.log('\n💡 Make sure the server is running on port 5000');
  console.log('   Run: npm start (or npm run dev)');
});

req.write(testData);
req.end();