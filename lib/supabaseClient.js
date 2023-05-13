import { createClient } from '@supabase/supabase-js'

const options = {
    db: {
      schema: 'next_auth',
    },
  }

export const supabaseAuth = createClient('https://aqcxdikpzwbomkxxxnuo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxY3hkaWtwendib21reHh4bnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzNzgyODAsImV4cCI6MTk5ODk1NDI4MH0.GpuG9gn6b7EM3nVLWE22zRLY5Sc-a3haUWGBQKohYzE', options)
export const supabasePublic = createClient('https://aqcxdikpzwbomkxxxnuo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxY3hkaWtwendib21reHh4bnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzNzgyODAsImV4cCI6MTk5ODk1NDI4MH0.GpuG9gn6b7EM3nVLWE22zRLY5Sc-a3haUWGBQKohYzE')    