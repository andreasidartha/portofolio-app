# 🚀 Quick Email Setup Guide

Follow these steps to make your contact form send real emails to your inbox!

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Your Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the authentication steps
5. **Copy your Service ID** (looks like: `service_abc123`)

## Step 3: Create Email Template
1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this exact template:

**Template Name:** `Portfolio Contact Form`

**Subject:** `New message from {{from_name}} via Portfolio`

**Content:**
```
Hello Andrea,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Website
```

4. Save the template
5. **Copy your Template ID** (looks like: `template_xyz789`)

## Step 4: Get Your API Key
1. Go to "Account" → "API Keys"
2. **Copy your Public Key** (looks like: `user_123456789`)

## Step 5: Update Your Code
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Your actual Service ID
  TEMPLATE_ID: 'template_xyz789', // Your actual Template ID
  PUBLIC_KEY: 'user_123456789', // Your actual Public Key
};
```

## Step 6: Test It!
1. Run your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email - you should receive the message!

## 🎯 What You'll Receive

When someone contacts you, you'll get an email like this:

```
From: your-email@gmail.com
Subject: New message from John Doe via Portfolio

Hello Andrea,

You have received a new message from your portfolio website:

Name: John Doe
Email: john@example.com
Message: Hi Andrea, I'd like to discuss a project opportunity...

You can reply directly to this email to respond to John Doe.

Best regards,
Your Portfolio Website
```

## 🔧 Troubleshooting

**If emails aren't sending:**
1. Check the browser console for errors
2. Verify all three IDs are correct
3. Make sure your email service is properly connected
4. Check your spam folder

**Common Error Messages:**
- "Service ID not found" → Check your Service ID
- "Template ID not found" → Check your Template ID  
- "Public Key invalid" → Check your Public Key

## 📧 Alternative: Formspree (Even Easier)

If EmailJS seems complicated, try Formspree:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up and create a new form
3. Get your form ID
4. Replace the Contact.jsx handleSubmit function with:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## 🎉 You're Done!

Once configured, your contact form will send real emails to your inbox whenever someone submits it! 