import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Users, Settings, X, Star, Shield, Clock, Rocket, Target, Gauge } from "lucide-react";

const SaaSServices = () => {
  const packages = [{
    name: "MVP Development Package",
    price: "Starting at R13,000",
    description: "Complete MVP development in 4-5 weeks",
    features: ["Web application/Mobile App", "Modern, scalable tech stack", "Seamless integrations (payments, auth, etc.)", "Personalized, founder-led development", "Regular updates and transparent process"],
    popular: true,
    badge: "Most Popular"
  }, {
    name: "Growth Retainer Package",
    price: "R11,000/month",
    description: "Dedicated monthly services for serious growth",
    features: ["60 hours of development time per month", "Flexible hours allocation", "Weekly strategy calls", "Priority feature development", "Continuous maintenance & optimization", "Same-day emergency support"],
    badge: "Ongoing Support"
  }];
  const features = [{
    title: "Complete Package",
    description: "Your MVP includes a sleek web application, a high-converting landing page, and SEO-ready content. Everything is built to launch fast and scale effortlessly.",
    icon: <Target className="h-6 w-6 text-primary" />
  }, {
    title: "Seamless Integrations",
    description: "We set up all necessary integrations for you, including payment gateways, user authentication, and email marketing platforms.",
    icon: <Settings className="h-6 w-6 text-primary" />
  }, {
    title: "Modern, Scalable Tech",
    description: "We use the latest technologies combined with AI to ensure your MVP is fast, stable, and built to scale.",
    icon: <Rocket className="h-6 w-6 text-primary" />
  }];
  const projects = [{
    name: "Braindump.ai",
    description: "An AI-powered productivity tool that transforms scattered thoughts into organized, actionable insights. Users can brain dump their thoughts and let AI organize them into personalized insights and clear action items.",
    tags: ["AI", "Productivity", "Mental Clarity", "Task Management"]
  }, {
    name: "TripChats",
    description: "TripChats is a social travel app designed for solo travelers to connect with locals and other travelers in popular destinations worldwide.",
    tags: ["Mobile App", "Social Networking", "Solo Travelers"]
  }, {
    name: "ThinkAI",
    description: "Think.ai is a smart study assistant that helps users engage deeply with study materials like PDFs and videos.",
    tags: ["AI", "EdTech", "Study Companion", "PDF/Video Analysis"]
  }, {
    name: "Outreach Hub",
    description: "Outreach Hub is a centralized platform that consolidates outreach campaign data from SmartLead and HeyReach. Users can connect their accounts, monitor key performance metrics in real-time.",
    tags: ["Payments", "Real-time Analytics", "Dashboard Creation"]
  }];
  const process = [{
    step: "01",
    title: "Initial Consultation",
    description: "Book a call with our founder to discuss your vision. We'll explore your idea and understand your business goals in detail."
  }, {
    step: "02",
    title: "MVP Planning & PRD",
    description: "Receive a detailed MVP plan followed by a comprehensive PRD with technical implementation approach for complete clarity."
  }, {
    step: "03",
    title: "Development Sprint",
    description: "Once the proposal is signed, development begins. Your MVP will be ready in 5 weeks with regular updates throughout the process."
  }, {
    step: "04",
    title: "MVP Delivery",
    description: "Get your fully functional MVP with all planned features, ready for market launch and user acquisition."
  }, {
    step: "05",
    title: "Maintenance & Support",
    description: "Enjoy a week of maintenance support including critical bug fixes and necessary optimizations."
  }];
  const comparison = [{
    feature: "Development Timeline",
    traditional: "Months of planning and design before any code is written, delaying time-to-market",
    us: "From concept to market-ready MVP in 5 weeks with iterative development",
    advantage: true
  }, {
    feature: "Team Structure",
    traditional: "Large teams with project managers adding unnecessary overhead and complexity",
    us: "Small, efficient team leveraging AI tools for faster decision-making and execution",
    advantage: true
  }, {
    feature: "Design Process",
    traditional: "Weeks spent on static wireframes and mockups before seeing anything functional",
    us: "Skip lengthy design phases with Lovable/V0, creating working UI and app logic immediately",
    advantage: true
  }, {
    feature: "Investment Required",
    traditional: "$10K-$20K invested before validating if your idea has market traction",
    us: "Validate your idea with real users before investing significant capital",
    advantage: true
  }, {
    feature: "Infrastructure",
    traditional: "Time and resources wasted on managing servers and complex deployment pipelines",
    us: "Modern stack with Supabase and Vercel for automatic scaling without maintenance headaches",
    advantage: true
  }];
  const benefits = [{
    icon: <Gauge className="h-8 w-8 text-primary" />,
    title: "Lightning-Fast Development",
    description: "Turn your vision into a market-ready product in just 5 weeks, giving you the edge in today's fast-paced tech landscape"
  }, {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "AI-Powered Approach",
    description: "Our AI-augmented team delivers faster decision-making and execution compared to traditional agencies"
  }, {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Proven Track Record",
    description: "We've helped founders launch innovative MVPs that validate ideas and attract users from day one"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              High-demand MVP development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your <span className="gradient-text">MVP</span>, Fast, Affordable, and Stress-Free
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Turning ideas into reality, fast. Let us take your idea from concept to a market-ready MVP in just a few weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Share Your Vision</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View All Projects (9)</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Ready to transform your idea into reality? Share your vision and we'll reply within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* From Concept to Launch Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Concept to Launch in Weeks, Not Months
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ignite your idea with our lightning-fast MVP development. We turn your vision into a market-ready product in just 5 weeks, giving you the edge in today's fast-paced tech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground">
              The advantages of choosing our AI-powered development approach
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="hover-lift animate-fade-in-up" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-lg font-semibold ml-2">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="hover-lift animate-fade-in-up" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-lg font-semibold ml-2">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future of Development Is Here
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our AI-powered approach redefines what's possible compared to traditional agencies
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-3 bg-muted p-4 font-semibold">
                <div>Feature</div>
                <div className="text-center">Traditional Approach</div>
                <div className="text-center">Our AI-Powered Approach</div>
              </div>
              {comparison.map((item, index) => <div key={index} className="grid grid-cols-3 p-4 border-b last:border-b-0 text-sm">
                  <div className="font-medium">{item.feature}</div>
                  <div className="text-center flex items-center justify-center text-muted-foreground px-2">
                    <X className="h-4 w-4 text-destructive mr-2 flex-shrink-0" />
                    <span>{item.traditional}</span>
                  </div>
                  <div className="text-center flex items-center justify-center px-2">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>{item.us}</span>
                  </div>
                </div>)}
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build Your MVP The Modern Way
            </h2>
            <p className="text-xl text-muted-foreground">
              Our proven development process - A transparent, efficient journey from your initial idea to a market-ready MVP in just 5 weeks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => <div key={index} className="text-center animate-fade-in-up" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ignite Your Idea?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect package for your project and get started today
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => <Card key={index} className={`hover-lift animate-scale-in relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                {pkg.badge && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    {pkg.badge}
                  </Badge>}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link to="/contact">Share Your Vision →</Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};

export default SaaSServices;
