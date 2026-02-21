
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Settings, Zap, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Design Services",
      description: "Professional websites delivered in 7 days",
      features: ["5-15 Pages", "Mobile Responsive", "SEO Optimized", "Fast Delivery"],
      startingPrice: "R2,000",
      link: "/services/web-design",
      icon: <Globe className="h-8 w-8 text-primary" />
    },
    {
      title: "Website Maintenance",
      description: "Keep your website running smoothly",
      features: ["Security Updates", "Bug Fixes", "Performance Monitoring", "Content Updates"],
      startingPrice: "R1,500/month",
      link: "/services/web-design",
      icon: <Settings className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Professional digital solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete <span className="gradient-text">Digital Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We deliver high-quality web design solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Digital Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect service for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-2">
                    Starting at {service.startingPrice}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" asChild>
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Full Pricing Breakdown */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Full Pricing Breakdown</h2>
              <p className="text-xl text-muted-foreground">Transparent pricing for all our services</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Essential Single Page", price: "R2,000", delivery: "3-5 Days", features: ["Single Page Website", "Mobile Responsive", "Google Business Profile", "Contact Form"] },
                { name: "Starter Business", price: "R5,000", delivery: "5-7 Days", features: ["5 Pages", "Mobile Responsive", "Contact Form", "Basic SEO Setup", "1 Month Support"] },
                { name: "Professional Growth", price: "R10,000", delivery: "7-10 Days", popular: true, features: ["10 Pages", "Blog Setup", "Advanced SEO", "Social Media Integration", "3 Months Support", "CMS"] },
                { name: "Enterprise Custom", price: "R15,000+", delivery: "10-14 Days", features: ["Unlimited Pages", "E-commerce Integration", "Advanced Analytics", "Priority Support", "6 Months Support"] },
              ].map((pkg, index) => (
                <Card key={index} className={`hover-lift animate-fade-in-up relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-lg">{pkg.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    <Badge variant="secondary" className="mx-auto text-xs">Delivery: {pkg.delivery}</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Check className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" size="sm" variant={pkg.popular ? "default" : "outline"} asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
