export const mockCourses = [
  {
    id: "1",
    title: "Introduction to Mathematics",
    description: "Learn the fundamentals of mathematics",
    level: "Beginner",
    duration: "8 weeks",
    topics: ["Algebra", "Geometry", "Trigonometry"],
  },
  {
    id: "2",
    title: "Advanced Physics",
    description: "Explore complex physics concepts",
    level: "Advanced",
    duration: "12 weeks",
    topics: ["Quantum Mechanics", "Relativity", "Thermodynamics"],
  },
  {
    id: "3",
    title: "Chemistry Basics",
    description: "Master the basics of chemistry",
    level: "Intermediate",
    duration: "10 weeks",
    topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
  },
];

export const mockProgress = [
  {
    courseId: "1",
    userId: "1",
    progress: 75,
    completedTopics: ["Algebra", "Geometry"],
    quizScores: [85, 90, 78],
  },
  {
    courseId: "2",
    userId: "1",
    progress: 30,
    completedTopics: ["Quantum Mechanics"],
    quizScores: [88, 92],
  },
];

export const mockAnalytics = {
  weeklyProgress: [
    { week: "Week 1", progress: 20 },
    { week: "Week 2", progress: 45 },
    { week: "Week 3", progress: 65 },
    { week: "Week 4", progress: 85 },
  ],
  subjectPerformance: [
    { subject: "Math", score: 85 },
    { subject: "Physics", score: 78 },
    { subject: "Chemistry", score: 92 },
  ],
};