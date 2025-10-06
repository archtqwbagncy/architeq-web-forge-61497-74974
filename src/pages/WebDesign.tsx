
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Users, Settings, ArrowRight, Phone, Zap } from "lucide-react";

const WebDesign = () => {
  const packages = [
    {
      name: "Essential Single Page",
      price: "R1,500",
      description: "Perfect for getting started with a professional online presence",
      features: [
        "Single Page Website",
        "Mobile Responsive",
        "Google Business Profile",
        "Contact Form"
      ],
      deliveryTime: "3-5 Days"
    },
    {
      name: "Starter Business Website",
      price: "R5,000",
      description: "Perfect for small businesses getting started online",
      features: [
        "5 Pages",
        "Mobile Responsive",
        "Contact Form",
        "Google Business Profile",
        "Basic SEO Setup",
        "1 Month Support"
      ],
      deliveryTime: "5-7 Days"
    },
    {
      name: "Professional Growth Website",
      price: "R10,000",
      description: "Most Popular - Ideal for growing businesses",
      features: [
        "10 Pages",
        "Blog Setup",
        "Advanced SEO",
        "Social Media Integration",
        "Analytics Setup",
        "3 Months Support",
        "Content Management System"
      ],
      deliveryTime: "7-10 Days",
      popular: true
    },
    {
      name: "Enterprise Custom Solution",
      price: "R15,000",
      description: "Complete solution for established businesses",
      features: [
        "Unlimited Pages",
        "E-commerce Integration",
        "Advanced Analytics",
        "Priority Support",
        "Custom Features",
        "6 Months Support",
        "Performance Optimization"
      ],
      deliveryTime: "10-14 Days"
    }
  ];

  const webSupportPackages = [
    {
      name: "Essential Web Support",
      price: "R1,500/month",
      description: "Basic ongoing support for your website",
      features: [
        "Monthly security updates",
        "Basic bug fixes",
        "Performance monitoring",
        "Email support",
        "Monthly backup & maintenance"
      ]
    },
    {
      name: "Premium Web Support",
      price: "R3,500/month",
      description: "Comprehensive ongoing support and optimization",
      features: [
        "Weekly security updates",
        "Priority bug fixes & feature requests",
        "Advanced performance optimization",
        "Phone & email support",
        "Weekly backup & maintenance",
        "Content updates & modifications",
        "SEO monitoring & improvements"
      ],
      popular: true
    }
  ];

  const whyChooseUs = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Delivered in 7 Days",
      description: "Fast turnaround without compromising quality"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Conversion-Focused",
      description: "Designed to turn visitors into customers"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Client-First Approach",
      description: "Your success is our priority"
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Dedicated Support",
      description: "Personal support throughout your project"
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
              Professional websites in 7 days
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="gradient-text">Web Design</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We create high-performing websites using no-code tools like Framer, Figma, and Airtable.
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

      {/* Website Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing, no hidden fees, guaranteed delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover-lift animate-scale-in relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`} style={{animationDelay: `${index * 200}ms`}}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <Badge variant="secondary" className="mx-auto">
                    Delivery: {pkg.deliveryTime}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"} 
                    size="lg"
                    asChild
                  >
                    <Link to="/contact">Choose This Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Web Support Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ongoing Web Support
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Keep your website running smoothly with our ongoing support packages
            </p>
            {/* Lightning feature for first month free - centered */}
            <div className="flex justify-center mb-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2">
                <Zap className="h-4 w-4 mr-2 text-primary" />
                First Month Free on All Support Packages
              </Badge>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {webSupportPackages.map((pkg, index) => (
              <Card key={index} className={`hover-lift animate-scale-in relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`} style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link to="/contact">Get Started →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Architeq?
            </h2>
            <p className="text-xl text-muted-foreground">
              We deliver results that matter to your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover-lift animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses that have transformed their online presence with Architeq.
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

export default WebDesign;
