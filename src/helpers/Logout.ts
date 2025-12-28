import { supabase } from "@/lib/supabase";

export const Logout = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.log("Log out Error", error);
  }
};
