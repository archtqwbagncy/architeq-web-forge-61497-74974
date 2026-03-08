import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Users, Settings, Phone, Zap } from "lucide-react";

const WebDesign = () => {
  const packages = [
    { name: "Essential Single Page", price: "R2,000", description: "Perfect for getting started with a professional online presence", features: ["Single Page Website", "Mobile Responsive", "Google Business Profile", "Contact Form"], deliveryTime: "1-2 Days" },
    { name: "Starter Business Website", price: "R5,000", description: "Perfect for small businesses getting started online", features: ["5 Pages", "Mobile Responsive", "Contact Form", "Google Business Profile", "Basic SEO Setup", "1 Month Support"], deliveryTime: "3-4 Days" },
    { name: "Professional Growth Website", price: "R10,000", description: "Most Popular - Ideal for growing businesses", features: ["10 Pages", "Blog Setup", "Advanced SEO", "Social Media Integration", "Analytics Setup", "3 Months Support", "Content Management System"], deliveryTime: "5-7 Days", popular: true },
    { name: "Enterprise Custom Solution", price: "R15,000+", description: "Complete solution for established businesses", features: ["Unlimited Pages", "E-commerce Integration", "Advanced Analytics", "Priority Support", "Custom Features", "6 Months Support", "Performance Optimization"], deliveryTime: "7-10 Days" }
  ];

  const webSupportPackages = [
    { name: "Essential Web Support", price: "R1,500/month", description: "Basic ongoing support for your website", features: ["Monthly security updates", "Basic bug fixes", "Performance monitoring", "Email support", "Monthly backup & maintenance"] },
    { name: "Premium Web Support", price: "R3,500/month", description: "Comprehensive ongoing support and optimization", features: ["Weekly security updates", "Priority bug fixes & feature requests", "Advanced performance optimization", "Phone & email support", "Weekly backup & maintenance", "Content updates & modifications", "SEO monitoring & improvements"], popular: true }
  ];

  const whyChooseUs = [
    { icon: <Calendar className="h-7 w-7 text-primary" />, title: "Delivered Within 7 Days", description: "Fast turnaround without compromising quality" },
    { icon: <Users className="h-7 w-7 text-primary" />, title: "Conversion-Focused", description: "Designed to turn visitors into customers" },
    { icon: <Settings className="h-7 w-7 text-primary" />, title: "Client-First Approach", description: "Your success is our priority" },
    { icon: <Phone className="h-7 w-7 text-primary" />, title: "Dedicated Support", description: "Personal support throughout your project" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-36">
        <div className="container mx-auto px-4 lg:px-6 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 rounded-full px-5 py-1.5">
            <Zap className="h-4 w-4 mr-2" />
            Professional websites within 7 days
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Professional <span className="gradient-text">Web Design</span> Services
          </h1>
          <p className="text-xl text-muted-foreground mb-10 font-light max-w-3xl mx-auto">
            We create high-performing websites using no-code tools like Framer, Figma, and Airtable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-12">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Choose Your Perfect Package</h2>
            <p className="text-xl text-muted-foreground font-light">Transparent pricing, no hidden fees, guaranteed delivery</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`glass-card p-8 relative animate-scale-in ${pkg.popular ? 'ring-2 ring-primary' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary rounded-full px-4">Most Popular</Badge>
                )}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mt-2 mb-1">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
                  <Badge variant="secondary" className="rounded-full text-xs">Delivery: {pkg.deliveryTime}</Badge>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full" variant={pkg.popular ? "default" : "outline"} size="lg" asChild>
                  <Link to="/contact">Choose This Package</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Support */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Ongoing Web Support</h2>
            <p className="text-xl text-muted-foreground font-light mb-8">Keep your website running smoothly with our ongoing support packages</p>
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-6 py-2">
              <Zap className="h-4 w-4 mr-2" />
              First Month Free on All Support Packages
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {webSupportPackages.map((pkg, index) => (
              <div key={index} className={`glass-card p-8 relative animate-scale-in ${pkg.popular ? 'ring-2 ring-primary' : ''}`} style={{animationDelay: `${index * 150}ms`}}>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-primary mt-1">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full" variant={pkg.popular ? "default" : "outline"} asChild>
                  <Link to="/contact">Get Started →</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Why Choose Architeq?</h2>
            <p className="text-xl text-muted-foreground font-light">We deliver results that matter to your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="glass-card p-6 text-center animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-10 font-light">Join hundreds of businesses that have transformed their online presence with Architeq.</p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
