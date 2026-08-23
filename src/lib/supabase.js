import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lbvmnenaguyuhkuoydpo.supabase.co";

const supabaseKey = "sb_publishable_jhaQH_jR0Qx9ZyF6CSPVXA_Ncv_kvkG";

export const supabase = createClient(supabaseUrl, supabaseKey);