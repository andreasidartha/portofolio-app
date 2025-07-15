# Email Setup Guide for Contact Form

This guide will help you set up EmailJS to make your contact form functional.

## Option 1: EmailJS (Recommended - No Backend Required)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New message from {{from_name}} via Portfolio

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Website
```

4. Save the template and note down your **Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual IDs:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here', // Replace with your actual Service ID
  TEMPLATE_ID: 'your_template_id_here', // Replace with your actual Template ID
  PUBLIC_KEY: 'your_public_key_here', // Replace with your actual Public Key
};
```

### Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out the form and submit
4. Check your email to see if you received the message

## Option 2: Formspree (Alternative)

If you prefer a simpler solution, you can use Formspree:

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form

### Step 2: Update Contact Component
Replace the EmailJS implementation with Formspree:

```javascript
// In Contact.jsx, replace the handleSubmit function:
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    setToast({
      show: true,
      message: 'Please fix the errors in the form',
      type: 'error'
    });
    return;
  }

  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setToast({
        show: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        type: 'success'
      });
      
      setFormData({ name: '', email: '', message: '' });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Formspree Error:', error);
    setToast({
      show: true,
      message: 'Failed to send message. Please try again or contact me directly.',
      type: 'error'
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

## Option 3: Netlify Forms (If Deployed on Netlify)

If you're deploying on Netlify, you can use their built-in form handling:

### Step 1: Update Form
Add the Netlify form attributes to your form:

```jsx
<form 
  onSubmit={handleSubmit} 
  name="contact" 
  method="POST" 
  data-netlify="true"
  className="space-y-8"
>
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of your form fields */}
</form>
```

### Step 2: Deploy
1. Deploy your site to Netlify
2. Netlify will automatically handle form submissions
3. You'll receive emails for each form submission

## Troubleshooting

### Common Issues:
1. **"Service ID not found"**: Make sure you've copied the correct Service ID from EmailJS
2. **"Template ID not found"**: Verify your Template ID is correct
3. **"Public Key invalid"**: Check that your Public Key is correct
4. **Emails not sending**: Check your email service configuration in EmailJS

### Testing:
- Use the browser's developer tools to check for any JavaScript errors
- Check the console for EmailJS error messages
- Verify all configuration values are correct

## Security Notes:
- The EmailJS Public Key is safe to expose in frontend code
- Never expose private keys or sensitive credentials
- EmailJS has rate limiting on free accounts (200 emails/month)

## Support:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Formspree Documentation: [https://formspree.io/docs/](https://formspree.io/docs/)
- Netlify Forms: [https://docs.netlify.com/forms/setup/](https://docs.netlify.com/forms/setup/) 