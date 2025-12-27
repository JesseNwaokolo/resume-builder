import { supabase } from "@/lib/supabase";

type Props = {
  email: string;
  password: string;
};

export const SignUp = async ({ email, password }: Props) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (data.session) {
      return data;
    } else {
      return error;
    }
  } catch (error) {
    console.log(error);
  }
};
