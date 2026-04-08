import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface CitaFormData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

export async function submitCita(data: CitaFormData) {
  const { error } = await supabase.from('citas').insert([data]);
  if (error) throw error;
}
