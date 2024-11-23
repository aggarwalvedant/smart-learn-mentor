import { mockLearningPaths } from "@/data/mockData";
import { LearningPathCard } from "./LearningPathCard";
import { mockUserProfile } from "@/data/mockData";

export function LearningPathsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockLearningPaths.map((path) => (
        <LearningPathCard
          key={path.id}
          path={path}
          enrolledCourseIds={mockUserProfile.enrolledCourses}
        />
      ))}
    </div>
  );
}
