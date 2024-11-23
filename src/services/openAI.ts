import OpenAI from "openai";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const QuestionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  correctAnswer: z.number(),
  explanation: z.string(),
});

export const CourseContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  topics: z.array(z.string()),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  estimatedDuration: z.string(),
  prerequisites: z.array(z.string()),
});

export const AnswerAnalysisSchema = z.object({
  isCorrect: z.boolean(),
  feedback: z.string(),
  conceptsToReview: z.array(z.string()),
  suggestedResources: z.array(z.string()),
  confidenceScore: z.number(),
});

export async function generateQuestions(topic: string, count: number = 5) {
  const QuestionsArraySchema = z.array(QuestionSchema);

  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `Generate ${count} multiple-choice questions about ${topic}. Each question should have 4 options.`
      }
    ],
    response_format: zodResponseFormat(QuestionsArraySchema, "questions"),
  });

  return completion.choices[0].message.parsed;
}

export async function generateCourseContent(topic: string) {
  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `Create a comprehensive course outline for ${topic}. Include detailed topics, prerequisites, and estimated duration.`
      }
    ],
    response_format: zodResponseFormat(CourseContentSchema, "course"),
  });

  return completion.choices[0].message.parsed;
}

export async function analyzeAnswer(question: string, correctAnswer: string, userAnswer: string) {
  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Analyze the user's answer and provide detailed feedback."
      },
      {
        role: "user",
        content: `Question: ${question}\nCorrect Answer: ${correctAnswer}\nUser's Answer: ${userAnswer}`
      }
    ],
    response_format: zodResponseFormat(AnswerAnalysisSchema, "analysis"),
  });

  return completion.choices[0].message.parsed;
}

export async function searchWebResources(query: string) {
  const ResourceSchema = z.object({
    title: z.string(),
    url: z.string(),
    description: z.string(),
    type: z.enum(["article", "video", "tutorial", "documentation"]),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  });

  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Find and curate relevant learning resources from the web."
      },
      {
        role: "user",
        content: query
      }
    ],
    response_format: zodResponseFormat(z.array(ResourceSchema), "resources"),
  });

  return completion.choices[0].message.parsed;
}
