// A simple Hello World Edge Function
import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

serve((req) => {
  return new Response("Hello from Supabase Edge Function!", {
    headers: { "Content-Type": "text/plain" },
  })
})
