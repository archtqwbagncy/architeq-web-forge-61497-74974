import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

export const sendEmail = async (formData: {
  name: string;
  email: string;
  service: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Email service ID
      "YOUR_TEMPLATE_ID", // Email template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        service: formData.service,
        message: formData.message,
        to_email: "architeqwebagency@gmail.com", // Your email address
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}; 