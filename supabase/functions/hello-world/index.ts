// A simple Hello World Edge Function
import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

serve((req) => {
  return new Response("Supabase Edge Function Hello!", {
    headers: { "Content-Type": "text/plain" },
  })
})
