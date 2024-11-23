import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function Hero() {
  const { user } = useAuth();

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Welcome to Smart Learn Mentor
            {user && `, ${user.name}`}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Transform Learning with
            <span className="text-gradient"> AI-Powered</span> Education
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience the future of education with our intelligent tutoring platform.
            Personalized learning paths, real-time feedback, and interactive content designed for your success.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/ai-learning">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full font-medium inline-flex items-center gap-2">
                Try AI Learning <Brain className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="px-8 py-6 rounded-full font-medium inline-flex items-center gap-2 hover:bg-accent/5">
                Browse Courses <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}