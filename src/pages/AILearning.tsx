import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AICoursesGenerator } from "@/components/AICoursesGenerator";
import { ResourceSearch } from "@/components/ResourceSearch";

export default function AILearning() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">AI-Powered Learning</h1>
        <p className="text-muted-foreground mb-8">
          Generate personalized courses and find curated learning resources using artificial intelligence
        </p>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList>
            <TabsTrigger value="courses">Generate Courses</TabsTrigger>
            <TabsTrigger value="resources">Find Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <AICoursesGenerator />
          </TabsContent>

          <TabsContent value="resources">
            <ResourceSearch />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
