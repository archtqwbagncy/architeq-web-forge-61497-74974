import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";

const ClientShowcase = () => {
  const clientLogos = [
    "Home of Accounting Consulting",
    "Katthales Holdings",
    "H&N House of Beauty",
    "Lumavu Trading Enterprises",
    "GT Testing Civil & Construction",
    "KTL Makeup Glam",
    "908 Event-Quip Hire",
    "MusicEar"
  ];

  const testimonials = [
    {
      quote: "Architeq delivered our website in just 5 days. The quality exceeded our expectations and we couldn't be happier with the results. Highly recommend!",
      author: "Thabo Nkosi",
      role: "CEO",
      rating: 5
    },
    {
      quote: "Fast, professional, and affordable. The team understood our vision perfectly and delivered exactly what we needed for our business.",
      author: "Lerato Molefe",
      role: "Owner",
      rating: 5
    },
    {
      quote: "The platform they built for us launched in just 4 weeks. Incredible speed and quality. Our customers love the user experience.",
      author: "Pieter van der Merwe",
      role: "Founder",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trusted By <span className="gradient-text">Businesses Worldwide</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              See how we've helped businesses transform their online presence and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Join Our Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Proud to Work With
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="bg-muted/30 h-16 rounded-lg flex items-center justify-center hover-lift">
                  <span className="text-sm font-medium text-muted-foreground">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from real businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{testimonial.author}</CardTitle>
                  <CardDescription>
                    {testimonial.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-sm mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Measurable results across all our projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center animate-scale-in">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center animate-scale-in" style={{animationDelay: "100ms"}}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
            
            <Card className="text-center animate-scale-in" style={{animationDelay: "200ms"}}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">14</div>
                <div className="text-sm text-muted-foreground">Days Average Delivery</div>
              </CardContent>
            </Card>
            
            <Card className="text-center animate-scale-in" style={{animationDelay: "300ms"}}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientShowcase;
