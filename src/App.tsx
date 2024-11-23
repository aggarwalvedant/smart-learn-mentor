import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./contexts/AuthContext";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import AILearning from "@/pages/AILearning";

const queryClient = new QueryClient();

function App() { 
return (
<div className="App">
<QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider> 
          <Toaster />
          <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/ai-learning" element={<AILearning />} />
                <Route path="/courses/:id" element={<div>Course Details (Coming Soon)</div>} />
              </Routes>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
</div>
)};

export default App;