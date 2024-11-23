import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LearningPath } from "@/types";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LearningPathCardProps {
  path: LearningPath;
  enrolledCourseIds?: string[];
}

export function LearningPathCard({ path, enrolledCourseIds = [] }: LearningPathCardProps) {
  const completedCourses = path.courses.filter(courseId => 
    enrolledCourseIds.includes(courseId)
  ).length;

  const progress = (completedCourses / path.courses.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold">{path.title}</CardTitle>
              <CardDescription className="mt-2">{path.description}</CardDescription>
            </div>
            <Badge 
              variant={path.difficulty === 'Advanced' ? 'destructive' : 
                      path.difficulty === 'Intermediate' ? 'default' : 
                      'secondary'}
            >
              {path.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{path.estimatedDuration}</span>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{completedCourses} of {path.courses.length} courses completed</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <Link to={`/learning-paths/${path.id}`}>
              <Button className="w-full">
                Continue Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
