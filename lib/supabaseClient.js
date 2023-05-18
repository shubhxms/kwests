import { createClient } from '@supabase/supabase-js'

const options = {
    db: {
      schema: 'next_auth',
    },
  }

export const supabaseAuth = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, options)
export const supabasePublic = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)    