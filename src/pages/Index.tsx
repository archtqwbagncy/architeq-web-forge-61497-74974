import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Users, Calendar, Settings, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Index = () => {
  const problems = [
    {
      problem: "Losing leads to competitors?",
      solution: "We build conversion-optimized websites."
    },
    {
      problem: "Website not matching your brand?",
      solution: "We design modern websites that reflect your excellence."
    },
    {
      problem: "Not found online?",
      solution: "SEO-friendly builds ensure you rank."
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "R2,000",
      description: "Perfect for getting started",
      features: ["Single Page Website", "Mobile Responsive", "Google Business Profile", "Contact Form"]
    },
    {
      name: "Starter",
      price: "R5,000",
      description: "Perfect for small businesses",
      features: ["5 Pages", "Mobile Responsive", "Contact Form", "Google Business Profile"]
    },
    {
      name: "Professional",
      price: "R10,000",
      description: "Most Popular Choice",
      features: ["10 Pages", "Blog", "SEO Setup", "Social Media Integration"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "R15,000+",
      description: "For growing businesses",
      features: ["Unlimited Pages", "E-commerce & Analytics", "Priority Support", "Custom Features"]
    }
  ];

  const testimonials = [
    {
      quote: "Architeq delivered our website in just 5 days. The quality exceeded our expectations!",
      author: "Thabo Nkosi"
    },
    {
      quote: "Fast, professional, and affordable. The team understood our vision perfectly.",
      author: "Lerato Molefe"
    },
    {
      quote: "The platform they built for us launched in 4 weeks. Incredible speed and quality.",
      author: "Pieter van der Merwe"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Zap className="h-4 w-4 mr-2 text-primary" />
                Build Faster. Launch Smarter. Scale Immediately.
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Online Presence Within{" "}
                <span className="gradient-text">7 Days</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Get a professional, fast, high-converting website — without code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Get A Free Quote</Link>
                </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Book Discovery Call</Link>
              </Button>
              </div>
            </div>
            <div className="animate-fade-in lg:block hidden" style={{animationDelay: "200ms"}}>
              <img 
                src={heroPhone} 
                alt="Modern website design showcase" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Solve Your Biggest Challenges
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform problems into opportunities with our expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((item, index) => (
              <Card key={index} className="hover-lift animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {item.problem}
                    </h3>
                    <div className="w-12 h-px bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4"></div>
                    <p className="text-primary font-medium">
                      {item.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-muted-foreground">
              Affordable solutions for every business size
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover-lift animate-scale-in relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`} style={{animationDelay: `${index * 200}ms`}}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link to="/services">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from real businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6">
                  <blockquote className="text-lg mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.author}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our growing family of successful businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
