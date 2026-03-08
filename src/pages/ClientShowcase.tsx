import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const ClientShowcase = () => {
  const clientLogos = [
    "Home of Accounting Consulting", "Katthales Holdings", "H&N House of Beauty", "Lumavu Trading Enterprises",
    "GT Testing Civil & Construction", "KTL Makeup Glam", "908 Event-Quip Hire", "MusicEar"
  ];

  const testimonials = [
    { quote: "Architeq delivered our website in just 5 days. The quality exceeded our expectations and we couldn't be happier with the results. Highly recommend!", author: "Thabo Nkosi", role: "CEO", rating: 5 },
    { quote: "Fast, professional, and affordable. The team understood our vision perfectly and delivered exactly what we needed for our business.", author: "Lerato Molefe", role: "Owner", rating: 5 },
    { quote: "The platform they built for us launched in just 4 weeks. Incredible speed and quality. Our customers love the user experience.", author: "Pieter van der Merwe", role: "Founder", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-36">
        <div className="container mx-auto px-4 lg:px-6 text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Trusted By <span className="gradient-text">Businesses Worldwide</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 font-light max-w-3xl mx-auto">
            See how we've helped businesses transform their online presence and achieve remarkable results.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
            <Link to="/contact">Join Our Success Stories</Link>
          </Button>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 lg:py-32 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Proud to Work With</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {clientLogos.map((logo, index) => (
              <div key={index} className="glass-card h-16 flex items-center justify-center animate-fade-in-up" style={{animationDelay: `${index * 80}ms`}}>
                <span className="text-xs font-medium text-muted-foreground">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground font-light">Real feedback from real businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm mb-6 italic leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground font-light">Measurable results across all our projects</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "7", label: "Days Average Delivery" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 text-center animate-scale-in" style={{animationDelay: `${i * 100}ms`}}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientShowcase;
