### Ejecutar Pruebas con Jest y npm

1. **Instalar Dependencias:**

   Antes de ejecutar las pruebas, asegúrate de tener todas las dependencias instaladas. Puedes instalarlas ejecutando el siguiente comando en la raíz de tu proyecto:

   ```bash
   npm install
   ```

2. **Ejecutar Todas las Pruebas:**

   Para ejecutar todas las pruebas en tu proyecto, utiliza el siguiente comando:

   ```bash
   npm test
   ```

   Este comando buscará automáticamente las pruebas en tu proyecto y las ejecutará.

3. **Ejecutar Pruebas en un Módulo Específico:**

   Si solo quieres ejecutar pruebas en un módulo específico, navega a la carpeta del módulo y ejecuta:

   ```bash
   cd path/to/your/module
   npm test
   ```

   Asegúrate de reemplazar `path/to/your/module` con la ruta correcta a la carpeta del módulo que deseas probar.

### Incluir en tu README

Puedes agregar una sección en tu README con estas instrucciones:

## Ejecutar Pruebas

Antes de ejecutar las pruebas, asegúrate de tener todas las dependencias instaladas en la raíz del proyecto:

```bash
npm install
```

### Ejecutar Todas las Pruebas

Para ejecutar todas las pruebas en tu proyecto, utiliza el siguiente comando:

```bash
npm test
```

### Ejecutar Pruebas en un Módulo Específico

Si deseas ejecutar pruebas solo en un módulo específico, navega a la carpeta del módulo y ejecuta:

```bash
cd <nombre-de-carpeta>
npm test <nombre-del-archivo>
```
