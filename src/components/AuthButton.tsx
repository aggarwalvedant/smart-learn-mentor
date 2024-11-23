import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogIn, LogOut } from "lucide-react";

export function AuthButton() {
  const { user, login, logout } = useAuth();

  return user ? (
    <Button variant="ghost" onClick={logout} className="gap-2">
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  ) : (
    <Button variant="ghost" onClick={() => login("demo@example.com", "password")} className="gap-2">
      <LogIn className="h-4 w-4" />
      Login
    </Button>
  );
}