===========================================================================
      CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS - UNIMINUTO
      FACULTAD DE INGENIERÍA - PROGRAMA DE INGENIERÍA DE SISTEMAS
===========================================================================

MATERIA: Ingeniería Web 2
PROYECTO: GreenPaths - Plataforma de Gestión Sostenible
ESTUDIANTES: 
   - Sebastian Castillo Salamanca
   - Juan Felipe Guerrero Quiroga
   - Victor Manuel Sanchez Narvaez
   - Juan Nicolas Contreras Peña

FECHA: Febrero de 2026
TECNOLOGÍA: Angular 20.2.0, Supabase

---------------------------------------------------------------------------
1. DESCRIPCIÓN DEL PROYECTO
---------------------------------------------------------------------------
**GreenPaths** es una aplicación web full-stack desarrollada con **Angular** y **Supabase**, diseñada para la gestión y visualización de rutas ecológicas y de movilidad sostenible. El proyecto busca conectar a los ciudadanos con entornos naturales urbanos, promoviendo estilos de vida saludables y la conciencia ambiental, en línea con el **ODS 17: Alianzas para lograr los objetivos**.

---------------------------------------------------------------------------
2. REQUERIMIENTOS TÉCNICOS
---------------------------------------------------------------------------
* Node.js: Versión 20.20.0
* frontend: Angular 20.2.0, TypeScript, RxJS, Leaflet.
* backend: Supabase (PostgreSQL, Auth, Storage), Node.js (scripts)
* shared: TypeScript, tipos generados automáticamente desde Supabase
* herramientas: Git, npm, Angular CLI, Supabase CLI

---------------------------------------------------------------------------
3. GUÍA DE INSTALACIÓN (FLUJO GIT)
---------------------------------------------------------------------------

Requisitos Previos

- Node.js (versión 20.2.0 o superior) – [Descargar](https://nodejs.org/)
- npm (incluido con Node.js)
- Angular CLI (instalación global): `npm install -g @angular/cli@20.2.0`
- Git – [Descargar](https://git-scm.com/)
- Supabase CLI (opcional, para desarrollo local con Supabase): `npm install -g supabase`

Instalación y Configuración

- Paso 1: Clonar el Repositorio
   Para obtener el código fuente desde la nube, abra una terminal (Git Bash 
   o CMD) en su escritorio y ejecute:
   
      git clone https://github.com/svictornmanuel/GreenPaths-Angular.git

- Paso 2: Acceso al Directorio
   Entre a la carpeta recién creada:
   
      cd GreenPaths-Angular

- Paso 3: Configurar variables de entorno

   - Backend:
   
      Copia el archivo de ejemplo ".env.example" y renómbralo a ".env" dentro de la carpeta backend:
      
         cd backend
      
         cp .env.example .env

      Edita ".env" con tus credenciales de Supabase (URL y claves). Puedes obtenerlas desde tu panel de Supabase.

         VITE_SUPABASE_URL=https://tu-proyecto.supabase.co

         VITE_SUPABASE_ANON_KEY=tu-clave-anon-publica

         SUPABASE_SERVICE_ROLE_KEY=tu-clave-service-role
      
   - frontend

      Verifica que en la carpeta "frontend/src/environments/.": Asegúrate de que environment.ts (desarrollo) y environment.prod.ts (producción) tengan las mismas credenciales de Supabase (las claves anónimas son públicas y seguras para el cliente).

- Paso 4: Intalar Dependencias

   En la carpeta "backend":

      # si no estas en la carpeta backend entra:
      cd backend

      # si ya estas en la carpeta de backend ejecuta directamente:
      npm install
   
   En la carpeta "frontend":

      # entramos a frontend:
      cd ../frontend

      # instalamos dependencias:
      npm install

- Paso 5: Ejecutar migraciones de la Base de Datos

   Desde la carpeta de frontend ejecutamos:

      # entremos a la carpeta backend
      cd ../backend

      # hacemos la migración
      npx supabase migration up
   
   O tambien puedes ejecutar manualmente los scripts SQL ubicados en "backend/supabase/migrations/".

- Paso 6: Generar tipos compartidos (Opcional)

   Si realizas cambios en el esquema de la base de datos, puedes regenerar los tipos TypeScript ejecutando:

      cd backend
      npm run generate-types

   Esto actualizará el archivo shared/types/database.types.ts con las definiciones más recientes.

Paso 3: Abrir en Visual Studio Code
   Una vez dentro de la carpeta, ejecute:
   code .

---------------------------------------------------------------------------
4. CONFIGURACIÓN DEL ENTORNO (PERMISOS DE WINDOWS)
---------------------------------------------------------------------------
Es INDISPENSABLE habilitar la ejecución de scripts en PowerShell para que 
el comando 'npm' funcione correctamente:

1. Ejecute PowerShell como Administrador.
2. Ingrese: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
3. Escriba "S" y presione Enter.

---------------------------------------------------------------------------
5. EJECUCIÓN DEL PROYECTO
---------------------------------------------------------------------------

Una vez completados los pasos de instalación, inicia el servidor de desarrollo:

```bash
# Desde la carpeta frontend
cd frontend
npx ng serve --configuration development -o
```

URL de acceso: http://localhost:4200/
===========================================================================