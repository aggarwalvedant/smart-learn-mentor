import { motion } from "framer-motion";
import { Achievement } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { mockAchievements } from "@/data/mockData";

interface AchievementsListProps {
  achievements?: Achievement[];
  showAll?: boolean;
}

export function AchievementsList({ achievements = mockAchievements, showAll = false }: AchievementsListProps) {
  const displayAchievements = showAll ? achievements : achievements.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayAchievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
