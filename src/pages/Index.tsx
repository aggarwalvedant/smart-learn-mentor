import { motion } from "framer-motion";
import { ArrowRight, Brain, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthButton } from "@/components/AuthButton";
import { CourseList } from "@/components/CourseList";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-200">
      <nav className="fixed top-4 right-4 z-50 flex gap-4">
        <AuthButton />
        <ThemeToggle />
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent">
              Welcome to AI Tutoring
              {user && `, ${user.name}`}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight dark:text-white">
              Learn Smarter with
              <span className="text-accent"> AI-Powered</span> Education
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience personalized learning through advanced artificial intelligence.
              Master any subject at your own pace with our adaptive learning system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-secondary/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Available Courses
            </h2>
            <p className="text-muted-foreground dark:text-gray-400">
              Explore our wide range of courses designed to help you succeed
            </p>
          </motion.div>

          <CourseList />
        </div>
      </section>
    </div>
  );
};

export default Index;