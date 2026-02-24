-- Crear tipo ENUM para roles
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('admin', 'user');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Tabla user_profiles
CREATE TABLE user_profiles (
    id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    username text NOT NULL
);

-- Tabla routes
CREATE TABLE routes (
    id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    created_by uuid NOT NULL REFERENCES auth.users(id),
    coordinates numeric[] NOT NULL,
    is_hidden boolean NOT NULL,
    direction text,
    image_url text,
    name text NOT NULL,
    description text
);

-- Políticas RLS de user_profiles
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Administradores actualizan cualquier perfil" ON user_profiles
    FOR UPDATE TO public
    USING ((auth.uid() IN ( SELECT user_profiles_1.id
        FROM user_profiles user_profiles_1
        WHERE (user_profiles_1.role = 'admin'::user_role))));

CREATE POLICY "Administradores eliminan perfiles" ON user_profiles
    FOR DELETE TO public
    USING ((auth.uid() IN ( SELECT user_profiles_1.id
        FROM user_profiles user_profiles_1
        WHERE (user_profiles_1.role = 'admin'::user_role))));

CREATE POLICY "Administradores ven todos los perfiles" ON user_profiles
    FOR SELECT TO public
    USING ((auth.uid() IN ( SELECT user_profiles_1.id
        FROM user_profiles user_profiles_1
        WHERE (user_profiles_1.role = 'admin'::user_role))));

CREATE POLICY "Usuarios actualizan su perfil excepto role" ON user_profiles
    FOR UPDATE TO public
    USING ((auth.uid() = id))
    WITH CHECK (((auth.uid() = id) AND (role = ( SELECT user_profiles_1.role
        FROM user_profiles user_profiles_1
        WHERE (user_profiles_1.id = auth.uid())))));

CREATE POLICY "Usuarios ven su propio perfil" ON user_profiles
    FOR SELECT TO public
    USING ((auth.uid() = id));

-- Políticas RLS de routes
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Administradores ven todas las rutas" ON routes
    FOR SELECT TO public
    USING ((auth.uid() IN ( SELECT user_profiles.id
        FROM user_profiles
        WHERE (user_profiles.role = 'admin'::user_role))));

CREATE POLICY "Solo administradores actualizan rutas" ON routes
    FOR UPDATE TO public
    USING ((auth.uid() IN ( SELECT user_profiles.id
        FROM user_profiles
        WHERE (user_profiles.role = 'admin'::user_role))));

CREATE POLICY "Solo administradores eliminan rutas" ON routes
    FOR DELETE TO public
    USING ((auth.uid() IN ( SELECT user_profiles.id
        FROM user_profiles
        WHERE (user_profiles.role = 'admin'::user_role))));

CREATE POLICY "Ver rutas no ocultas" ON routes
    FOR SELECT TO public
    USING ((NOT is_hidden));