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
    whileHover={{ scale: 1.02 }}
    className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-all"
  >
    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Empowering Features for
            <span className="bg-gradient-to-r from-primary to-primary text-transparent bg-clip-text"> Modern Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the tools and technologies that make Smart Learn Mentor the perfect platform for your educational journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}