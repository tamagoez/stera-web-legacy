import { createClient } from '@supabase/supabase-js'
import { DB_KEY, DB_URL } from './globalvar'

export const supabase = createClient(DB_URL, DB_KEY)