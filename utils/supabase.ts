import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";

// ADMIN APPLICATION ONLY USE ROLE BASED KEY
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY!
);

// BECAUSE WE USED HELPER SUPABASE WE WILL CREATE FROM HELPER

export const supabaseClient = createClientComponentClient();
