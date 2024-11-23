import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CourseList } from "@/components/CourseList";
import { LearningPathsList } from "@/components/LearningPathsList";
import { AchievementsList } from "@/components/AchievementsList";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <Hero />
      <Features />

      {/* Courses Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Achievements
            </h2>
            <p className="text-muted-foreground">
              Track your progress and celebrate your learning milestones
            </p>
          </motion.div>

          <AchievementsList />
        </div>
      </section>
    </div>
  );
};

export default Index;