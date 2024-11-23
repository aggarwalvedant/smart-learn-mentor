export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  instructor: string;
  rating: number;
  enrolledCount: number;
  thumbnail: string;
  progress?: number;
  category: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  timeLimit: number; // in minutes
  totalPoints: number;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
}

export interface UserProgress {
  userId: string;
  courseId: string;
  progress: number;
  quizScores: { [quizId: string]: number };
  lastAccessed: string;
  completedLessons: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'parent' | 'teacher';
  preferences: {
    language: string;
    notifications: boolean;
    theme: 'light' | 'dark';
  };
  enrolledCourses: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedDate: string;
}

export interface Feedback {
  id: string;
  userId: string;
  courseId: string;
  rating: number;
  comment: string;
  timestamp: string;
}

export interface Discussion {
  id: string;
  courseId: string;
  userId: string;
  title: string;
  content: string;
  timestamp: string;
  replies: Reply[];
}

export interface Reply {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedDuration: string;
}
