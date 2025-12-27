import { supabase } from "@/lib/supabase";
import { useAuthstore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Spinner } from "./ui/spinner";

function PublicRoute() {
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

  if (session) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}

export default PublicRoute;
