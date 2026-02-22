import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Zap } from "lucide-react";

const Portfolio = () => {
  const currentYear = new Date().getFullYear();

  const projects = [
    {
      name: "H & N House of Beauty",
      image: "/portfolio/hn-house-of-beauty.png",
      category: "Beauty & Wellness",
      timeline: "3 days",
      cost: "R5,000",
    },
    {
      name: "Dr Maise T",
      image: "/portfolio/dr-maise-t.png",
      category: "Healthcare",
      timeline: "2 days",
      cost: "R2,000",
    },
    {
      name: "Lumavu Trading Enterprises",
      image: "/portfolio/lumavu-trading.png",
      category: "Construction",
      timeline: "4 days",
      cost: "R5,000",
    },
    {
      name: "Home of Accounting Consulting",
      image: "/portfolio/hac-accounting.png",
      category: "Finance",
      timeline: "2 days",
      cost: "R5,000",
    },
    {
      name: "GT Testing Civil & Construction",
      image: "/portfolio/gt-testing.png",
      category: "Construction & Testing",
      timeline: "3 days",
      cost: "R5,000",
    },
    {
      name: "BlueEdge Designs",
      image: "/portfolio/blueedge-designs.png",
      category: "Design Agency",
      timeline: "1 day",
      cost: "R2,000",
    },
    {
      name: "KTL Makeup Glam",
      image: "/portfolio/ktl-makeup-glam.png",
      category: "Beauty & Makeup",
      timeline: "1 day",
      cost: "R2,500 (custom request)",
    },
    {
      name: "Katthales Holdings",
      image: "/portfolio/katthales-holdings.png",
      category: "Cleaning Services",
      timeline: "3 days",
      cost: "R5,000",
    },
    {
      name: "MusicEar",
      image: "/portfolio/musicear.png",
      category: "Entertainment & Events",
      timeline: "1 day",
      cost: "R2,000",
    },
    {
      name: "Netshifhefhe Attorneys",
      image: "/portfolio/netshifhefhe-attorneys.png",
      category: "Legal Services",
      timeline: "4 days",
      cost: "R7,000 (custom request)",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Our Work
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Real websites we've built for real businesses. See how we've helped our clients establish a powerful online presence.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} website screenshot`}
                    className="w-full aspect-[4/3] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Timeline: {project.timeline}</span>
                    <span>Cost: {project.cost}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Portfolio?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build something amazing for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Get A Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
