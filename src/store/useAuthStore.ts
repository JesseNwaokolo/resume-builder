import type { Session } from "@supabase/supabase-js";
import { create } from "zustand";

type AuthStoreProps = {
  session: null | Session;
  setSession: (nwSession: null | Session) => void;
};

export const useAuthstore = create<AuthStoreProps>((set) => ({
  session: null,
  setSession: (newSession) => {
    set({ session: newSession });
  },
}));
