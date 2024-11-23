import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Brain, 
  Sparkles, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Award, 
  BarChart, 
  Globe2,
  Shield,
  Zap,
  BookMarked,
  UserCheck
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthButton } from "@/components/AuthButton";
import { CourseList } from "@/components/CourseList";
import { LearningPathsList } from "@/components/LearningPathsList";
import { AchievementsList } from "@/components/AchievementsList";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-all"
  >
    <Icon className="w-10 h-10 text-accent mb-4" />
    <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const Index = () => {
  const { user } = useAuth();

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
              Welcome to Smart Learn Mentor
              {user && `, ${user.name}`}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight dark:text-white">
              Transform Learning with
              <span className="text-accent"> AI-Powered</span> Education
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the future of education with our intelligent tutoring platform.
              Personalized learning paths, real-time feedback, and interactive content designed for your success.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/ai-learning">
                <Button className="bg-accent text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2">
                  Try AI Learning <Brain className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="px-8 py-3 rounded-full font-medium inline-flex items-center gap-2">
                  Browse Courses <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-secondary/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
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

      {/* Courses Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Featured Courses
            </h2>
            <p className="text-muted-foreground">
              Explore our curated selection of courses designed to help you achieve your goals
            </p>
          </motion.div>

          <CourseList />
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-24 bg-secondary/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Learning Paths
            </h2>
            <p className="text-muted-foreground">
              Follow structured learning paths to master new skills and advance your career
            </p>
          </motion.div>

          <LearningPathsList />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Recent Achievements
            </h2>
            <p className="text-muted-foreground">
              Track your progress and celebrate your learning milestones
            </p>
          </motion.div>

          <AchievementsList />
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-secondary/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <Globe2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Multilingual Support</h3>
              <p className="text-muted-foreground">Learn in your preferred language</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">WCAG Compliant</h3>
              <p className="text-muted-foreground">Accessible learning for everyone</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <MessageSquare className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">24/7 Support</h3>
              <p className="text-muted-foreground">Get help whenever you need it</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <UserCheck className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Parent Portal</h3>
              <p className="text-muted-foreground">Track your child's progress</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;