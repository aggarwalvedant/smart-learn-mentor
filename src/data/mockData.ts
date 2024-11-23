import { Course, Quiz, UserProfile, LearningPath, Achievement } from '../types';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Python Programming',
    description: 'Learn the basics of Python programming language with hands-on exercises and projects.',
    level: 'Beginner',
    duration: '8 weeks',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.8,
    enrolledCount: 1250,
    thumbnail: '/course-thumbnails/python.jpg',
    progress: 45,
    category: 'Programming'
  },
  {
    id: '2',
    title: 'Advanced Machine Learning',
    description: 'Deep dive into machine learning algorithms and their real-world applications.',
    level: 'Advanced',
    duration: '12 weeks',
    instructor: 'Prof. Michael Chen',
    rating: 4.9,
    enrolledCount: 850,
    thumbnail: '/course-thumbnails/ml.jpg',
    progress: 20,
    category: 'Data Science'
  },
  {
    id: '3',
    title: 'Web Development Fundamentals',
    description: 'Master HTML, CSS, and JavaScript to build modern websites.',
    level: 'Beginner',
    duration: '10 weeks',
    instructor: 'Emma Davis',
    rating: 4.7,
    enrolledCount: 2100,
    thumbnail: '/course-thumbnails/web-dev.jpg',
    category: 'Web Development'
  }
];

export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Python Basics Quiz',
    questions: [
      {
        id: 'q1',
        text: 'What is the output of print(type(5))?',
        options: ['<class "int">', '<class "str">', '<class "float">', '<class "number">'],
        correctAnswer: 0,
        explanation: 'In Python, 5 is an integer, so type(5) returns <class "int">',
        points: 10
      },
      {
        id: 'q2',
        text: 'Which of the following is a valid Python variable name?',
        options: ['2variable', '_variable', 'variable-name', 'class'],
        correctAnswer: 1,
        explanation: 'Variable names can start with an underscore but not with a number or contain hyphens.',
        points: 10
      }
    ],
    timeLimit: 15,
    totalPoints: 20
  }
];

export const mockUserProfile: UserProfile = {
  id: 'user1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'student',
  preferences: {
    language: 'English',
    notifications: true,
    theme: 'light'
  },
  enrolledCourses: ['1', '2'],
  achievements: [
    {
      id: 'ach1',
      title: 'Quick Learner',
      description: 'Completed first course within 2 weeks',
      icon: '🚀',
      earnedDate: '2024-01-15'
    },
    {
      id: 'ach2',
      title: 'Perfect Score',
      description: 'Achieved 100% in a quiz',
      icon: '🏆',
      earnedDate: '2024-01-20'
    }
  ]
};

export const mockLearningPaths: LearningPath[] = [
  {
    id: 'path1',
    title: 'Full Stack Developer Path',
    description: 'Comprehensive path to become a full stack developer',
    courses: ['1', '3'],
    difficulty: 'Intermediate',
    estimatedDuration: '6 months'
  },
  {
    id: 'path2',
    title: 'Data Science Career Path',
    description: 'Complete path to become a data scientist',
    courses: ['1', '2'],
    difficulty: 'Advanced',
    estimatedDuration: '8 months'
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: 'ach1',
    title: 'Quick Learner',
    description: 'Completed first course within 2 weeks',
    icon: '🚀',
    earnedDate: '2024-01-15'
  },
  {
    id: 'ach2',
    title: 'Perfect Score',
    description: 'Achieved 100% in a quiz',
    icon: '🏆',
    earnedDate: '2024-01-20'
  },
  {
    id: 'ach3',
    title: 'Social Butterfly',
    description: 'Participated in 10 forum discussions',
    icon: '🦋',
    earnedDate: '2024-01-25'
  }
];
