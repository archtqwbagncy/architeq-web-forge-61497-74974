import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Settings, Zap, Check } from "lucide-react";

const Services = () => {
  const services = [
    { title: "Web Design Services", description: "Professional websites delivered within 7 days", features: ["5-15 Pages", "Mobile Responsive", "SEO Optimized", "Fast Delivery"], startingPrice: "R2,000", link: "/services/web-design", icon: <Globe className="h-7 w-7 text-primary" /> },
    { title: "Google Business Profile", description: "Get found on Google Maps & Search", features: ["Profile Setup & Optimization", "Google Maps Listing", "Review Management", "Local SEO Boost"], startingPrice: "R750", link: "/contact", icon: <Zap className="h-7 w-7 text-primary" /> },
    { title: "Website Maintenance", description: "Keep your website running smoothly", features: ["Security Updates", "Bug Fixes", "Performance Monitoring", "Content Updates"], startingPrice: "R1,500/month", link: "/contact", icon: <Settings className="h-7 w-7 text-primary" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-36">
        <div className="container mx-auto px-4 lg:px-6 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 rounded-full px-5 py-1.5">
            <Zap className="h-4 w-4 mr-2" />
            Professional digital solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Complete <span className="gradient-text">Digital Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 font-light max-w-3xl mx-auto">
            We deliver high-quality web design solutions tailored to your business needs.
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

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Our Digital Services</h2>
            <p className="text-xl text-muted-foreground font-light">Choose the perfect service for your business needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 animate-scale-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="mb-5 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground text-center mb-2">{service.description}</p>
                <div className="text-2xl font-bold text-primary text-center mb-6">Starting at {service.startingPrice}</div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full" size="lg" asChild>
                  <Link to={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Full Pricing Breakdown</h2>
              <p className="text-xl text-muted-foreground font-light">Transparent pricing for all our services</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Essential Single Page", price: "R2,000", delivery: "1-2 Days", features: ["Single Page Website", "Mobile Responsive", "Google Business Profile", "Contact Form"] },
                { name: "Starter Business", price: "R5,000", delivery: "3-4 Days", features: ["5 Pages", "Mobile Responsive", "Contact Form", "Basic SEO Setup", "1 Month Support"] },
                { name: "Professional Growth", price: "R10,000", delivery: "5-7 Days", popular: true, features: ["10 Pages", "Blog Setup", "Advanced SEO", "Social Media Integration", "3 Months Support", "CMS"] },
                { name: "Enterprise Custom", price: "R15,000+", delivery: "7-10 Days", features: ["Unlimited Pages", "E-commerce Integration", "Advanced Analytics", "Priority Support", "6 Months Support"] },
              ].map((pkg, index) => (
                <div key={index} className={`glass-card p-6 relative animate-fade-in-up ${pkg.popular ? 'ring-2 ring-primary' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary rounded-full px-4">Most Popular</Badge>
                  )}
                  <div className="text-center pb-4 pt-2">
                    <h3 className="text-base font-semibold">{pkg.name}</h3>
                    <div className="text-2xl font-bold text-primary mt-1">{pkg.price}</div>
                    <Badge variant="secondary" className="mt-2 text-xs rounded-full">Delivery: {pkg.delivery}</Badge>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Check className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-full" size="sm" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Website Maintenance Packages</h2>
            <p className="text-xl text-muted-foreground font-light">Keep your website running smoothly with our maintenance plans</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Basic", price: "R1,500/month", features: ["Security Updates", "Monthly Backups", "Bug Fixes", "Email Support"] },
              { name: "Standard", price: "R3,000/month", popular: true, features: ["Everything in Basic", "Content Updates", "Performance Monitoring", "Priority Support", "Weekly Backups"] },
              { name: "Premium", price: "R5,000/month", features: ["Everything in Standard", "SEO Monitoring", "Analytics Reports", "24/7 Support", "Daily Backups", "Feature Enhancements"] },
            ].map((pkg, index) => (
              <div key={index} className={`glass-card p-6 relative animate-fade-in-up ${pkg.popular ? 'ring-2 ring-primary' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary rounded-full px-4">Most Popular</Badge>
                )}
                <div className="text-center pb-4 pt-2">
                  <h3 className="text-base font-semibold">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-primary mt-1">{pkg.price}</div>
                </div>
                <ul className="space-y-2 mb-4">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full" size="sm" variant={pkg.popular ? "default" : "outline"} asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-10 font-light">Let's discuss your project and find the perfect solution for your needs.</p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
