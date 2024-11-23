import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
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
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Learn Smarter with
              <span className="text-accent"> AI-Powered</span> Education
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience personalized learning through advanced artificial intelligence.
              Master any subject at your own pace with our adaptive learning system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg bg-accent text-white font-medium hover-scale flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 rounded-lg bg-secondary text-foreground font-medium hover-scale flex items-center justify-center gap-2">
                Explore Courses
                <BookOpen className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-muted-foreground">
              Discover the benefits of AI-powered learning with our cutting-edge features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl hover-scale"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "AI-Powered Learning",
    description: "Personalized learning experience adapted to your unique needs and pace",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Interactive Sessions",
    description: "Engage in dynamic learning sessions with real-time AI feedback",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Comprehensive Courses",
    description: "Access a wide range of subjects taught by expert AI tutors",
    icon: <BookOpen className="w-6 h-6" />,
  },
];

export default Index;