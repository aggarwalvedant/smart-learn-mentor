import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthButton } from "@/components/AuthButton";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              Smart Learn Mentor
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/ai-learning">
                <Button variant="ghost">AI Learning</Button>
              </Link>
              <Link to="/courses">
                <Button variant="ghost">Courses</Button>
              </Link>
              <ThemeToggle />
              <AuthButton />
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
