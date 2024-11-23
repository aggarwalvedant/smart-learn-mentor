import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateCourseContent, generateQuestions } from "@/services/openAI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, BookOpen, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AICoursesGenerator() {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [courseContent, setCourseContent] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);

  const handleGenerate = async () => {
    if (!topic) return;
    
    setIsGenerating(true);
    try {
      const content = await generateCourseContent(topic);
      const practiceQuestions = await generateQuestions(topic);
      
      setCourseContent(content);
      setQuestions(practiceQuestions);
    } catch (error) {
      console.error("Error generating course:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Input
          placeholder="Enter a topic (e.g., 'Machine Learning Basics')"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="max-w-xl"
        />
        <Button 
          onClick={handleGenerate}
          disabled={isGenerating || !topic}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Brain className="mr-2 h-4 w-4" />
              Generate Course
            </>
          )}
        </Button>
      </div>

      <AnimatePresence>
        {courseContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{courseContent.title}</CardTitle>
                    <CardDescription className="mt-2">{courseContent.description}</CardDescription>
                  </div>
                  <Badge>{courseContent.difficulty}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Topics Covered</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {courseContent.topics.map((topic: string, index: number) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Prerequisites</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {courseContent.prerequisites.map((prereq: string, index: number) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Estimated Duration: {courseContent.estimatedDuration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {questions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Practice Questions</CardTitle>
                  <CardDescription>Test your knowledge with these AI-generated questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {questions.map((q, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-medium">Question {index + 1}: {q.question}</h3>
                        <ul className="space-y-1">
                          {q.options.map((option: string, optIndex: number) => (
                            <li key={optIndex} className="flex items-center gap-2">
                              <input
                                type="radio"
                                name={`question-${index}`}
                                id={`q${index}-opt${optIndex}`}
                                className="w-4 h-4"
                              />
                              <label htmlFor={`q${index}-opt${optIndex}`}>{option}</label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
