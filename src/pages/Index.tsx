import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Games from "@/components/Games";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Games />
      <Blogs />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gaming-dark border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              June's Gaming
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            All casino needs at one place.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 June's Gaming. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
