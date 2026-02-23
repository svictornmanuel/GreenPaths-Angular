import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // Este es el servicio automático que trae todas las rutas de la tabla
  getAllRutas() {
    return this.supabase
      .from('rutas') 
      .select('*');
  }
}