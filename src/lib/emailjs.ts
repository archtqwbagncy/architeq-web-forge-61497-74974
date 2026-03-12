import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

export const sendEmail = async (formData: {
  name: string;
  email: string;
  service: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
      {
        from_name: formData.name,
        from_email: formData.email,
        service: formData.service,
        message: formData.message,
        to_email: "architeqwebagency@gmail.com",
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}; 