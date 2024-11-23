import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  level: string;
  subject: string;
};

export function CourseCard({ id, title, description, level, subject }: CourseCardProps) {
  return (
    <Link to={`/courses/${id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <BookOpen className="h-5 w-5 text-muted-foreground" />
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Badge variant="secondary">{level}</Badge>
            <Badge variant="outline">{subject}</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}