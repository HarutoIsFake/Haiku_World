import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ulcmabyqxwjxwfgqmsmt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsY21hYnlxeHdqeHdmZ3Ftc210Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4MTYzODIsImV4cCI6MjAxODM5MjM4Mn0.foBko7umGtOdPNKb6c5bZ_up51lFhsFP357J5fEDEQ0';
export const supabase = createClient(supabaseUrl, supabaseKey);