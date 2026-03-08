import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({ title: "Error", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    const phoneRegex = /^[0-9+\s()-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({ title: "Error", description: "Please enter a valid phone number.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xzzgdqjb", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (response.ok) {
        toast({ title: "Message Sent!", description: "Thank you for your message. We'll get back to you within 24 hours." });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else { throw new Error("Failed"); }
    } catch { toast({ title: "Error", description: "Failed to send message. Please try again or contact us directly.", variant: "destructive" }); }
    finally { setIsSubmitting(false); }
  };

  const handleInputChange = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  const contactInfo = [
    { title: "Phone", value: "069 490 0189", link: "tel:069 490 0189", description: "Call us for immediate assistance" },
    { title: "Email", value: "architeqwebagency@gmail.com", link: "mailto:architeqwebagency@gmail.com", description: "Send us a detailed message" },
    { title: "WhatsApp", value: "Chat with us", link: "https://wa.me/27694900189", description: "Quick questions and updates" }
  ];

  const faqs = [
    { question: "How long does it take to build a website?", answer: "Most websites are completed within 5-7 days. Complex projects may take up to 14 days." },
    { question: "Do you offer ongoing support?", answer: "Yes! All our packages include support ranging from 1-6 months depending on the plan." },
    { question: "Can you help with existing websites?", answer: "Absolutely. We can redesign, optimize, or add new features to your current website." },
    { question: "What's included in custom web applications?", answer: "Full application development, user management, payment integration, and hosting setup." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-36">
        <div className="container mx-auto px-4 lg:px-6 text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Let's Build Something<br /><span className="gradient-text">Amazing</span> Together
          </h1>
          <p className="text-xl text-muted-foreground mb-10 font-light max-w-3xl mx-auto">
            Ready to transform your online presence? Get in touch and let's discuss your project.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="glass-card p-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-sm text-muted-foreground mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="Your full name" required disabled={isSubmitting} maxLength={100} className="rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="your@email.com" required disabled={isSubmitting} maxLength={255} className="rounded-xl h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="+27 123 456 7890" required disabled={isSubmitting} maxLength={20} className="rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm">Service Interested In</Label>
                  <Select name="service" value={formData.service} onValueChange={(value) => handleInputChange("service", value)} disabled={isSubmitting}>
                    <SelectTrigger className="rounded-xl h-11"><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="discovery-call">Book Discovery Call</SelectItem>
                      <SelectItem value="website">Website Design & Development</SelectItem>
                      <SelectItem value="web-app">Custom Web Application</SelectItem>
                      <SelectItem value="redesign">Website Redesign</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Tell us about your project..." rows={5} required disabled={isSubmitting} maxLength={2000} className="rounded-xl" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-full h-12" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="glass-card p-6">
                      <h3 className="font-semibold text-base mb-1">{info.title}</h3>
                      <a href={info.link} className="text-primary hover:text-primary/80 transition-colors font-medium text-sm" target={info.title === "WhatsApp" ? "_blank" : undefined} rel={info.title === "WhatsApp" ? "noopener noreferrer" : undefined}>{info.value}</a>
                      <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 text-center animate-fade-in-up" style={{ animationDelay: "300ms", background: 'hsl(142 70% 45% / 0.05)', borderColor: 'hsl(142 70% 45% / 0.15)' }}>
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-semibold text-base mb-2">Quick Questions?</h3>
                <p className="text-xs text-muted-foreground mb-4">Chat with us on WhatsApp for instant answers</p>
                <Button asChild className="rounded-full px-6" style={{ background: 'hsl(142 70% 35%)', color: 'white' }}>
                  <a href="https://wa.me/27694900189" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground font-light">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="font-semibold text-sm mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Promise */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Our Response Promise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { time: "< 1 Hour", label: "WhatsApp Response" },
                { time: "< 1 Hour", label: "Email Response" },
                { time: "< 24 Hours", label: "Project Proposal" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="text-2xl font-bold text-primary mb-1">{item.time}</div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
