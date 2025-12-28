import type { Session, User } from "@supabase/supabase-js";
import { create } from "zustand";

type AuthStoreProps = {
  session: null | Session;
  setSession: (nwSession: null | Session) => void;
  user: User | null;
  setUser: (newUSer: User | null) => void;
};

export const useAuthstore = create<AuthStoreProps>((set) => ({
  session: null,
  setSession: (newSession) => {
    set({ session: newSession });
  },
  user: null,
  setUser: (newUser) => {
    set({ user: newUser });
  },
}));
