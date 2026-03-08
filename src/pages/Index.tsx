import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap } from "lucide-react";


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
      quote: "They built our first website 3 years ago and built our new one now. Seamless procedure, always a phone call away and beautiful work as always. Definitely the best around.",
      author: "H & N House of Beauty"
    },
    {
      quote: "I had such a great experience with Architeq. They made the whole process of building my website super easy and enjoyable, and the final result looks amazing. The site is clean, simple to use, and exactly what I wanted.",
      author: "Kebogile Mokgoebo"
    },
    {
      quote: "Best services and a Great Web Agency I can recommend. I've gotten the best service and the best outcome, everything running smoothly to the tea.",
      author: "PHILLY JAROAM"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Apple style centered */}
      <section className="hero-gradient py-24 lg:py-40">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 rounded-full px-5 py-1.5 text-sm font-medium">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Build Faster. Launch Smarter. Scale Immediately.
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Transform Your Online<br />
              Presence Within{" "}
              <span className="gradient-text">7 Days</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light">
              Get a professional, fast, high-converting website — fully optimised for every device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 text-base">
                <Link to="/contact">Get A Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-12 text-base">
                <Link to="/contact">Book Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution - Apple style clean grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              We Solve Your Biggest Challenges
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Transform problems into opportunities with our expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((item, index) => (
              <div key={index} className="glass-card p-8 text-center animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {item.problem}
                </h3>
                <div className="w-10 h-px bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4"></div>
                <p className="text-primary font-medium text-sm">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages - Apple style pricing */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Affordable solutions for every business size
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`glass-card p-6 relative animate-scale-in ${pkg.popular ? 'ring-2 ring-primary' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary rounded-full px-4">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full rounded-full ${pkg.popular ? '' : ''}`} variant={pkg.popular ? "default" : "outline"} asChild>
                  <Link to="/services">Choose Plan</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Apple style cards */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Real feedback from real businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                <blockquote className="text-base mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Apple minimal */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Transform<br />Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 font-light">
              Join our growing family of successful businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12 text-base">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-12 text-base">
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
