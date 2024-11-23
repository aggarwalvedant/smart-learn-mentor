import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { searchWebResources } from "@/services/openAI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Search, ExternalLink, Video, FileText, Book, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const resourceTypeIcons = {
  article: FileText,
  video: Video,
  tutorial: Book,
  documentation: Code,
};

export function ResourceSearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [resources, setResources] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!query) return;
    
    setIsSearching(true);
    try {
      const results = await searchWebResources(query);
      setResources(results);
    } catch (error) {
      console.error("Error searching resources:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Input
          placeholder="What do you want to learn about?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-xl"
        />
        <Button 
          onClick={handleSearch}
          disabled={isSearching || !query}
        >
          {isSearching ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              Search Resources
            </>
          )}
        </Button>
      </div>

      <AnimatePresence>
        {resources.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {resources.map((resource, index) => {
              const Icon = resourceTypeIcons[resource.type] || FileText;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Icon className="h-5 w-5 mt-1 text-muted-foreground" />
                          <div>
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {resource.description}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant={
                          resource.difficulty === "advanced" ? "destructive" :
                          resource.difficulty === "intermediate" ? "default" :
                          "secondary"
                        }>
                          {resource.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        Visit Resource
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
