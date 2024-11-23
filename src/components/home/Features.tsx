import { motion } from "framer-motion";
import { Brain, Sparkles, Zap, Users, BookMarked, BarChart } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized learning paths adapted to your unique needs and progress"
  },
  {
    icon: Sparkles,
    title: "Interactive Content",
    description: "Engaging quizzes, simulations, and gamified elements for enhanced learning"
  },
  {
    icon: Zap,
    title: "Real-Time Feedback",
    description: "Instant feedback and detailed explanations to reinforce understanding"
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Connect with peers through forums and group projects"
  },
  {
    icon: BookMarked,
    title: "Comprehensive Courses",
    description: "Wide range of subjects for all educational levels"
  },
  {
    icon: BarChart,
    title: "Progress Tracking",
    description: "Advanced analytics to monitor your learning journey"
  }
];

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all card-hover"
  >
    <Icon className="w-10 h-10 text-accent mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-muted-foreground">
            Discover the tools and features that make learning effective and enjoyable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}