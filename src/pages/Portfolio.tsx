
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "TechStart Landing Page",
      description: "Modern landing page for a tech startup with conversion optimization",
      category: "Website",
      tags: ["Landing Page", "Tech", "Conversion"],
      deliveryTime: "5 Days"
    },
    {
      id: 2,
      title: "Restaurant Management SaaS",
      description: "Complete restaurant management system with ordering and inventory",
      category: "SaaS",
      tags: ["Restaurant", "Management", "E-commerce"],
      deliveryTime: "4 Weeks"
    },
    {
      id: 3,
      title: "Local Services Directory",
      description: "Directory website for local service providers with booking system",
      category: "Website",
      tags: ["Directory", "Local Business", "Booking"],
      deliveryTime: "7 Days"
    },
    {
      id: 4,
      title: "E-commerce Fashion Store",
      description: "Complete online store with payment processing and inventory management",
      category: "Website",
      tags: ["E-commerce", "Fashion", "Payment"],
      deliveryTime: "10 Days"
    },
    {
      id: 5,
      title: "Project Management Tool",
      description: "Team collaboration SaaS with task management and time tracking",
      category: "SaaS",
      tags: ["Project Management", "Collaboration", "Teams"],
      deliveryTime: "4 Weeks"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "Property listing website with advanced search and filters",
      category: "Website",
      tags: ["Real Estate", "Listings", "Search"],
      deliveryTime: "8 Days"
    }
  ];

  const categories = ["All", "Website", "SaaS"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              50+ projects completed successfully
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Real projects, real results. See what we've built for businesses like yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/clients">View Client Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="hover-lift animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-brand-purple/20 to-brand-purple-light/20 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl mb-2">
                        {project.category === "SaaS" ? "⚡" : "🌐"}
                      </div>
                      <p className="text-sm opacity-80">Project Preview</p>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={project.category === "SaaS" ? "default" : "secondary"}>
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.deliveryTime}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that showcase our impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center animate-scale-in">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="text-center animate-scale-in" style={{animationDelay: "200ms"}}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </CardContent>
            </Card>
            
            <Card className="text-center animate-scale-in" style={{animationDelay: "400ms"}}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">7</div>
                <p className="text-muted-foreground">Avg. Days Delivery</p>
              </CardContent>
            </Card>
            
            <Card className="text-center animate-scale-in" style={{animationDelay: "600ms"}}>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-muted-foreground">Avg. Conversion Boost</p>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something amazing together. Your project could be our next showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  Learn About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
