// FamilyFlow — Supabase configuration
// Publishable key is safe for use in the public frontend.
// Database security will be enforced by Supabase RLS.

const SUPABASE_URL = 'https://lfnjtucluzhugtgttltr.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
    'sb_publishable_auCmMzuNlGSknhMjNXUazw_Yffu4BiL';

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
