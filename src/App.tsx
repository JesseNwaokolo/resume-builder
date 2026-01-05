import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { supabase } from "./lib/supabase";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import { useAuthstore } from "./store/useAuthStore";

function App() {
  const setSession = useAuthstore((state) => state.setSession);
  const setUser = useAuthstore((state) => state.setUser);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="h-dvh">
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Route>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster richColors />
    </div>
  );
}

export default App;
