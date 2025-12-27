import { useEffect, useState, type ReactNode } from "react";
import { Spinner } from "./ui/spinner";
import { useAuthstore } from "@/store/useAuthStore";
import { Navigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  const session = useAuthstore((state) => state.session);
  const setSession = useAuthstore((state) => state.setSession);

  useEffect(() => {
    async function getSession() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.log(error);
        }
        setSession(data.session);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getSession();
  }, []);

  if (loading)
    return (
      <div className="h-dvh bg-gray-200 grid place-items-center">
        <Spinner className="size-10 text-blue-400" />
      </div>
    );

  if (!session) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
}

export default ProtectedRoute;
