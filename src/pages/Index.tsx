import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { mockCourses } from "@/services/mockData";

const Index = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-200">
      <nav className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!user ? (
                <button
                  onClick={() => login("demo@example.com", "password")}
                  className="px-8 py-4 rounded-lg bg-accent text-white font-medium hover-scale flex items-center justify-center gap-2"
                >
                  Try Demo Login
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={logout}
                  className="px-8 py-4 rounded-lg bg-accent text-white font-medium hover-scale flex items-center justify-center gap-2"
                >
                  Logout
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <button className="px-8 py-4 rounded-lg bg-secondary text-foreground font-medium hover-scale flex items-center justify-center gap-2 dark:bg-gray-800 dark:text-white">
                Explore Courses
                <BookOpen className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {mockCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl hover-scale dark:bg-gray-800/80 dark:backdrop-blur-lg dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{course.title}</h3>
                <p className="text-muted-foreground dark:text-gray-400 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent">{course.level}</span>
                  <span className="text-muted-foreground dark:text-gray-400">{course.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;