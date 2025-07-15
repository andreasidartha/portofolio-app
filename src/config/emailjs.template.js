// EmailJS Configuration Template
// Copy this file to emailjs.js and replace with your actual values

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here',
  PUBLIC_KEY: 'your_public_key_here',
};

// Template parameters that will be sent with the email
export const getTemplateParams = (formData) => ({
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
  to_name: 'Andrea Sidartha',
  reply_to: formData.email,
  subject: `New Portfolio Message from ${formData.name}`,
});

// ⚠️ IMPORTANT: Replace the placeholder values above with your actual EmailJS IDs
// 
// To get these values:
// 1. Go to https://www.emailjs.com/ and sign up
// 2. Add your email service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Copy your Service ID, Template ID, and Public Key
// 5. Replace the values above with your actual IDs
//
// Example of what your config should look like:
// export const EMAILJS_CONFIG = {
//   SERVICE_ID: 'service_abc123',
//   TEMPLATE_ID: 'template_xyz789', 
//   PUBLIC_KEY: 'user_123456789',
// }; 