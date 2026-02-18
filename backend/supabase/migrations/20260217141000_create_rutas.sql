-- Crear tabla de rutas
CREATE TABLE public.rutas (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  imagen_url TEXT,
  coordenadas NUMERIC[] NOT NULL,
  direccion TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- Habilitar RLS
ALTER TABLE public.rutas ENABLE ROW LEVEL SECURITY;

-- Políticas para administradores
CREATE POLICY "Solo administradores pueden ver rutas" ON public.rutas
  FOR SELECT USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Solo administradores pueden crear rutas" ON public.rutas
  FOR INSERT WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Solo administradores pueden actualizar rutas" ON public.rutas
  FOR UPDATE USING (auth.jwt() ->> 'role' = 'admin') WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Solo administradores pueden eliminar rutas" ON public.rutas
  FOR DELETE USING (auth.jwt() ->> 'role' = 'admin');