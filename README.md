# Journal Note
![imagen-de-pagina-desplegada]
***
## Índice

* [1. Introducción](#1-introducción)
* [2. Descripción del Proyecto](#2-descripción-del-proyecto)
* [3. Objetivos del Proyecto](#3-objetivos-del-proyecto)
* [3.1 Objetivos generales](#3.1-objetivos-generales)
* [3.2 Objetivos específicos](#3.2-objetivos-específicos)
* [3.3 Objetivos de aprendizaje](#3.3-objetivos-de-aprendizaje)
* [4. Desarrollo del proyecto](#4-Desarrollo-del-proyecto)
* [4.1 Historia de usuaria 1](#4.1-historia-de-usuaria-1)
* [4.2 Historia de usuaria 2](#4.2-historia-de-usuaria-2)
* [4.3 Historia de usuaria 3](#4.3-historia-de-usuaria-3)
* [4.4 Historia de usuaria 4](#4.4-historia-de-usuaria-4)
* [4.5 Historia de usuaria 5](#4.5-historia-de-usuaria-5)
* [5. Prototipos](#5-prototipos)
* [5.1 Prototipos de baja fidelidad](#5.1-prototipos-de-baja-fidelidad)
* [5.2 Prototipos de alta fidelidad](#5.2-prototipos-de-alta-fidelidad)
* [6. Consideraciones generales](#6-consideraciones-generales)
* [7. Criterios de aceptación mínimos del proyecto](#7-criterios-de-aceptación-mínimos-del-proyecto)
* [8. Consideraciones técnicas](#8-consideraciones-técnicas)
* [9. Tecnologías utilizadas](#9-tecnologías-utilizadas)
* [10. Conclusiones del proyecto](#10-conclusiones-del-proyecto)

***

## 1. Introducción
***
PENDIENTE ...................................................

## 2. Descripción del proyecto
***
En este proyecto se construyó una aplicación llamada ‘JOURNAL NOTE’ que tiene como objetivo permitir a la usuaria de manera digital tomar notas,  editar, eliminar y consultarlas cuando así lo requiera.
La ventaja que tiene esta app es que puedes apuntar  cualquier información que necesites en muy poco tiempo.
Debido a lo anterior, se elaboró un producto digital en el cual se pueda capturar datos importantes del día a día de forma dinámica y de acuerdo a sus necesidades y haciéndolo desde  un ordenador, tablet o en el móvil.

Para este proyecto fue necesario completar los OAs trabajando de manera colaborativa (dupla).  Para ello fue indispensable realizar prototipos de baja y alta fidelidad, manejo de React (librería JS) HTML semántico, JavaScript, CSS, web APIs, base de datos como firebase(AUTH) y firestore, Vite como empaquetador, control de versiones con GIT-GITHUB así como testeos de usabilidad. El conjunto de estas funciones nos llevará a una interfaz donde se mostrará la aplicación una vez se registre con correo electrónico o google para entrar y crear sus notas personalizadas de manera organizada y manejable para el usuario final.

## 3. Objetivos del proyecto
***
Reflexionar y luego marcar los objetivos que hemos llegado a entender y aplicarlo. 

### 3.1 Objetivos generales

El objetivo principal de este proyecto es aprender a diseñar y construir una interfaz web donde se pueda visualizar y manipular sus notas y mantener la interfaz y el estado sincronizados.

### 3.2 Objetivos específicos

Buscar  y entender quién es la usuaria y cuales son sus necesidades creando una interfaz dinámica y fácil de manejar que permite registrar en su propia base de datos de todas sus notas así como, editar, guardar y eliminar de ser necesario.

### 3.2 Objetivos de aprendizaje

### HTML

-  Uso de HTML semántico

### CSS

-  Uso de selectores de CSS
-  Modelo de caja (box model): borde, margen, padding
-  Uso de flexbox en CSS**
-  Uso de CSS Grid Layout
-  Uso de media queries

### JavaScript

- Arrays (arreglos)
- Objetos (key, value)
- Diferenciar entre tipos de datos primitivos y no primitivos
- Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
- Funciones (params, args, return)
- Pruebas unitarias (unit tests)
- Pruebas asíncronas
- Uso de mocks y espías
- Uso de linter (ESLINT)
- Uso de identificadores descriptivos (Nomenclatura y Semántica)
- Diferenciar entre expresiones (expressions) y sentencias (statements)

### Control de Versiones (Git y GitHub)

- Git: Instalación y configuración
- Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
- Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)
- GitHub: Creación de cuenta y repos, configuración de llaves SSH
- GitHub: Despliegue con GitHub Pages

### Firebase

- Firebase Auth
- Firestore

### React

- JSX
- Componentes y propiedades (props)
- Manejo de eventos
- Listas y keys
- Renderizado condicional
- Elevación de estado
- Hooks
- CSS modules
- React Router
- Datos y métodos
- Uso y creación de componentes
- Props
- Directivas (v-bind | v-model)
- Iteración (v-for)
- Eventos (v-on)
- Propiedades Computadas y Observadores

## 4. Desarrollo del proyecto
***
### 4.1 Historia de usuaria 1

* Debería poder crear cuenta, iniciar y cerrar sesión.

* Yo como usuaria debo poder crear una cuenta y autenticarse usando el login de Google para acceder a mis notas.

### 4.2 Historia de usuaria 2

* Debería poder tomar nota

* Yo como usuaria quiero tomar nota para no depender de mi mala memoria y tener presente en todo momento los apuntes o cosas importantes que antes escribía en papel.

### 4.3 Historia de usuaria 3

* Debería poder ver las notas

* yo como usuaria quiero leer mis notas para poder modificar lo que escribí antes.

### 4.4 Historia de usuaria 4

* Debería poder editar mis notas

* Yo como usuaria quiero editar mis notas para poder modificar lo que escribí antes.

### 4.5 Historia de usuaria 5

* Debería poder borrar notas

* Yo como usuaria quiero borrar una nota para no volver a verla.

## 5. Prototipos

### 5.1 prototipos de baja fidelidad

![imagen-prototipos-de-baja-fidelidad] .....................
***
Estos prototipos fueron pensados para la mujer digital, buscando como objetivo que la utilización sea sumamente fácil y simple.


### 5.2 prototipos de alta fidelidad

![imagen-prototipos-de-alta-fidelidad] ......................
***
Basándonos en los prototipos de baja fidelidad, reestructuramos y determinamos paleta de colores a utilizar, así como la fuentes de las letras, el logo y dinámica de cómo se mostrará la página de primeras en una tablet usando como recurso Figma.

## 6. Consideraciones generales
***
- El proyecto se resolvió en dupla.
- duración estimada del proyecto de 4 sprints, con una duración de una semana cada uno.
- La aplicación debe ser Single Page App, las notas serán realizadas a partir de una tablet pero a la vez responsive.
- Necesitamos pensar bien en el aspecto UX de quienes van a tomar las notas, el tamaño y aspecto de los botones, la visibilidad del estado actual del pedido, etc.
- implementación de pruebas unitarias de sus componentes.

## 7. Criterios de aceptación mínimos del proyecto
***
Lo que debe ocurrir para que se satisfagan las necesidades del usuario.
- Anotar el título de la nota
- Agregar contenido de la nota
- Ver todas mis notas
- Ver la última modificación de mi nota
- Eliminar notas
- Se ve y funciona bien en una tablet

## 8. Consideraciones técnicas
***
El proyecto deberá contener los siguientes archivos base de configuración,
aunque no serán los únicos archivos que quizás tendrás que crear.

* `README.md` es donde se encontrará la descripción del proyecto y elementos
  relevantes de tu proyecto.
* `.editorconfig` este archivo contiene la configuración para editores de texto.
* `.gitignore`  este archivo contiene reglas para ignorar `node_modules` u otras
  carpetas que no deban incluirse en control de versiones (`git`).
* `.eslintrc` este archivo contiene reglas para formatear el código además de
  ser una buena practica tener configurado un linter.

Para este proyecto se crea una Web App con una librería de JavaScript en nuestro caso React y Firebase.

## 9. Tecnologías utilizadas
***
- Visual Studio Code
- Git y GitHub
- React
- Vite
- Figma


## 10. Conclusiones del proyecto
***
PENDIENTE...............................