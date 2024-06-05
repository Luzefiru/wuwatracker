import { createClient } from ".";

const supabase = (() => {
  return createClient();
})();

export default supabase;
