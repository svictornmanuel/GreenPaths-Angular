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

FECHA: 01 Febrero de 2026
TECNOLOGÍA: Angular 20.2.0

---------------------------------------------------------------------------
1. DESCRIPCIÓN DEL PROYECTO
---------------------------------------------------------------------------
"GreenPaths" es una aplicación web diseñada bajo el marco del ODS 17: 
"Alianzas para lograr los objetivos". La plataforma centraliza iniciativas 
ambientales y facilita la colaboración ciudadana mediante una arquitectura 
moderna de componentes en Angular.

---------------------------------------------------------------------------
2. REQUERIMIENTOS TÉCNICOS
---------------------------------------------------------------------------
* Git: Para el control de versiones y clonación.
* Node.js: Versión 20.2.0
* Angular CLI: v20.2.0

---------------------------------------------------------------------------
3. GUÍA DE INSTALACIÓN (FLUJO GIT)
---------------------------------------------------------------------------

Paso 1: Clonar el Repositorio
   Para obtener el código fuente desde la nube, abra una terminal (Git Bash 
   o CMD) en su escritorio y ejecute:
   
   git clone https://github.com/svictornmanuel/GreenPaths-Angular.git

Paso 2: Acceso al Directorio
   Entre a la carpeta recién creada:
   cd GreenPaths-Angular

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
5. INSTALACIÓN DE DEPENDENCIAS Y EJECUCIÓN
---------------------------------------------------------------------------

1. Instalar dependencias: 
   En la terminal de VS Code, ejecute: npm install

2. Iniciar servidor local: 
   Para evitar errores de SSR (Server Side Rendering), use este comando:
   npx ng serve --configuration development -o

URL de acceso: http://localhost:4200/
===========================================================================