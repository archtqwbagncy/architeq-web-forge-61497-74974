import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Calendar, Settings, Check } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Speed & Efficiency",
      description: "We deliver and launch websites within 7 days, without compromising quality."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-First Approach",
      description: "Your success is our priority. We listen, understand, and deliver exactly what you need."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Modern Technology",
      description: "Using cutting-edge no-code tools to build scalable, maintainable solutions."
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "Founded Architeq",
      description: "Started with a vision to make professional web development accessible to all businesses."
    },
    {
      year: "2023",
      title: "First 10 Clients",
      description: "Delivered outstanding websites and established our reputation for speed and quality."
    },
    {
      year: "2024",
      title: "Service Expansion",
      description: "Expanded services and grew our client base across multiple industries."
    },
    {
      year: "2025",
      title: "50+ Projects",
      description: "Growing strong with over 50 successful projects and 100% client satisfaction rate."
    }
  ];

  const services = [
    "Website Design & Development",
    "Custom Web Applications", 
    "E-commerce Solutions",
    "Mobile-First Design",
    "SEO Optimization",
    "Performance Analytics",
    "Ongoing Support & Maintenance",
    "Digital Strategy Consulting"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Architeq</span> Web Agency
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're a solo no-code web agency passionate about helping businesses grow online — affordably, professionally, and fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Work With Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.instagram.com/architeqwebagency/" target="_blank" rel="noopener noreferrer">See Our Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Architeq Web Agency was born from a simple observation: too many businesses struggle with expensive, slow, and complex web development processes.
                </p>
                <p>
                  We saw talented entrepreneurs and growing companies held back by outdated development approaches that took months and cost fortunes. There had to be a better way.
                </p>
                <p>
                  That's why we built Architeq around no-code technology and rapid delivery. We believe every business deserves a professional online presence without the traditional headaches of web development.
                </p>
                <p>
                  Today, we've helped over 100 businesses transform their online presence, delivering and launching websites within 7 days. Our clients love the speed, quality, and affordability we bring to every project.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: "200ms"}}>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
                  <blockquote className="text-lg text-center italic text-muted-foreground">
                    "To democratize professional web development by making it fast, affordable, and accessible to businesses of all sizes."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground">
              The core values that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our growth story
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="flex-shrink-0 w-20 text-primary font-bold text-lg">
                    {item.year}
                  </div>
                  <div className="flex-1 ml-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive web solutions for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl">Core Services</CardTitle>
                <CardDescription>Everything you need for online success</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in-up" style={{animationDelay: "200ms"}}>
              <CardHeader>
                <CardTitle className="text-xl">Why No-Code?</CardTitle>
                <CardDescription>The advantages of modern development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Faster Development:</strong> Launch in weeks, not months
                  </p>
                  <p>
                    <strong className="text-foreground">Lower Costs:</strong> Affordable pricing for every budget
                  </p>
                  <p>
                    <strong className="text-foreground">Easy Maintenance:</strong> Updates and changes made simple
                  </p>
                  <p>
                    <strong className="text-foreground">Proven Reliability:</strong> Built on stable, tested platforms
                  </p>
                  <p>
                    <strong className="text-foreground">Scalable Solutions:</strong> Grows with your business
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and see how we can help transform your online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/clients">
                  Meet Our Clients <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
