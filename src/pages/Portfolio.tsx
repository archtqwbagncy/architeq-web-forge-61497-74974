import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    { name: "H & N House of Beauty", image: "/portfolio/hn-house-of-beauty.png", category: "Beauty & Wellness", timeline: "3 days", cost: "R5,000" },
    { name: "Dr Maise T", image: "/portfolio/dr-maise-t.png", category: "Healthcare", timeline: "2 days", cost: "R2,000" },
    { name: "Lumavu Trading Enterprises", image: "/portfolio/lumavu-trading.png", category: "Construction", timeline: "4 days", cost: "R5,000" },
    { name: "Home of Accounting Consulting", image: "/portfolio/hac-accounting.png", category: "Finance", timeline: "2 days", cost: "R5,000" },
    { name: "GT Testing Civil & Construction", image: "/portfolio/gt-testing.png", category: "Construction & Testing", timeline: "3 days", cost: "R5,000" },
    { name: "BlueEdge Designs", image: "/portfolio/blueedge-designs.png", category: "Design Agency", timeline: "1 day", cost: "R2,000" },
    { name: "KTL Makeup Glam", image: "/portfolio/ktl-makeup-glam.png", category: "Beauty & Makeup", timeline: "1 day", cost: "R2,500 (custom request)" },
    { name: "Katthales Holdings", image: "/portfolio/katthales-holdings.png", category: "Cleaning Services", timeline: "3 days", cost: "R5,000" },
    { name: "MusicEar", image: "/portfolio/musicear.png", category: "Entertainment & Events", timeline: "1 day", cost: "R2,000" },
    { name: "Netshifhefhe Attorneys", image: "/portfolio/netshifhefhe-attorneys.png", category: "Legal Services", timeline: "4 days", cost: "R7,000 (custom request)" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-36">
        <div className="container mx-auto px-4 lg:px-6 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 rounded-full px-5 py-1.5">
            <Zap className="h-4 w-4 mr-2" />
            Our Work
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 font-light max-w-3xl mx-auto">
            Real websites we've built for real businesses. See how we've helped our clients establish a powerful online presence.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="overflow-hidden bg-muted/20">
                  <img
                    src={project.image}
                    alt={`${project.name} website screenshot`}
                    className="w-full max-h-[400px] object-contain object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 rounded-full text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span><strong className="text-foreground">Timeline:</strong> {project.timeline}</span>
                    <span><strong className="text-foreground">Cost:</strong> {project.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Join Our Portfolio?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 font-light">
              Let's build something amazing for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
                <Link to="/contact">Get A Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-12">
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
