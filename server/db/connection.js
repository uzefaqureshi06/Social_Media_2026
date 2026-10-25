import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vnmhymttelryqgynwpzz.supabase.co",
  "sb_publishable_fzXHahaIEAfdqvud2wiZuQ_px-oHgnS",
);

console.log("Supabase connected");
