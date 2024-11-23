import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  level: string;
  category: string;
  duration: string;
  instructor: string;
  rating: number;
  enrolledCount: number;
  progress?: number;
  thumbnail?: string;
};

export function CourseCard({ 
  id, 
  title, 
  description, 
  level, 
  category,
  duration,
  instructor,
  rating,
  enrolledCount,
  progress,
  thumbnail 
}: CourseCardProps) {
  return (
    <Link to={`/courses/${id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-200 overflow-hidden">
        {thumbnail && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <BookOpen className="h-5 w-5 text-muted-foreground" />
          </div>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{level}</Badge>
              <Badge variant="outline">{category}</Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{enrolledCount} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">By {instructor}</span>
              </div>
            </div>

            {progress !== undefined && (
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}