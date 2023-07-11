# Ejercicio 5 del TP Backend: Blog de Recetas de Cocina

## Descripción

Crear un proyecto de backend con los endpoints necesarios para poder
administrar recetas de cocina, crear usuarios y realizar el login de los mismos.
Pueden modelar las propiedades de las recetas con los valores deseados, los
usuarios deben contener como mínimo un mail y password.
Modelar la base de datos necesaria con MongoDB para almacenar estos datos y
validar los datos recibidos en los request antes de almacenar en la base de datos.

## Tecnologias / Herramientas 🛠

- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Javascript](https://www.w3schools.com/js/)
- [NodeJs](https://nodejs.org/es)
- [ExpressJs](https://expressjs.com/es/)
- [BabelJs](https://babeljs.io/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://github.com/expressjs/cors#readme)
- [Morgan](https://github.com/expressjs/morgan)
- [Express Validator](https://express-validator.github.io/docs)
- [Markdown](https://markdown.es/)

## Pasos para clonar y ejecutar el Servidor 🖥

Sigue estos pasos para clonar y ejecutar el servidor en tu entorno local:

1.  **Requisitos previos:** Asegúrate de tener Node.js instalado en tu sistema. Puedes descargar la versión más reciente desde el sitio web oficial de Node.js (https://nodejs.org).
    Asegúrate también de tener un administrador de paquetes de Node.js instalado, como npm (que se instala junto con Node.js) o Yarn.

2.  **Clona el repositorio:** En tu línea de comandos, ejecuta el siguiente comando para clonar el repositorio:

    ```
    git clone https://github.com/jgromerou/ej5-practico-backend.git
    ```

3.  **Accede al directorio:** Ve al directorio de la aplicación clonada:

    ```
    cd <ej5-practico-backend>
    ```

4.  **Instala las dependencias:** Ejecuta el siguiente comando para instalar las dependencias de la aplicación:

    ```
    npm install
    ```

5.  **Inicia el servidor:** Utiliza el siguiente comando para iniciar la aplicación en tu entorno local:

        ```
        npm run dev
        ```

    Esto ejecutará el script definido en el archivo package.json para iniciar el servidor Node.js.

6.  **Accede al servidor:** Abre tu navegador web y visita la siguiente URL: _http://localhost:4000_. El servidor debería cargarse, mostrar el siguiente mensaje: 'Bienvenidos al Backend de Recetas de Cocina' y estar lista para usar. Se recomienda usar [Postman](https://www.postman.com/) para las solicitudes al servidor.

## Llamadas a la API

URL -> http://localhost:4000/apirecetas/

## Métodos de Recetas

| Método | #Url de Recetas | #Acción                     |
| ------ | --------------- | --------------------------- |
| POST   | /recetas        | Crear nueva receta          |
| GET    | /recetas        | Muestra la lista de recetas |
| PUT    | /recetas/:id    | Edita una receta por su id  |
| DELETE | /recetas/:id    | Borra una receta por su id  |
| GET    | /recetas/:id    | Busca una receta por su id  |

Ejemplo de Body en el envío de Crear nueva Receta:

```
    {
      "nombreReceta": "Tarta de fresas y albahaca",
      "descripcionReceta": "Combinar fresas y albahaca, ¿no te parece un acierto maravilloso? Por si te queda alguna duda, la receta de hoy las disipará todas con solo dar un mordisco a la maravillosa tarta de fresas y albahaca que hoy te muestro. Una tarta con mucho sabor y llena de aromas frescos y primaverales, perfecta para servir en cualquier momento del día.",
      "ingredientes": "150 g de mantequilla cortada en dados, 100 g de azúcar glas, 60 g de harina de almendra (almendras molidas muy finamente), 1 huevo, 1 pizca de sal, 250 g de harina",
      "instrucciones": "1. En un procesador de alimentos (a falta de él, en un bol amplio), bate la mantequilla hasta ablandarla a punto pomada.\n2. Añade el azúcar glas y la harina de almendra y mezcla.\n3.Añade la sal y el huevo y sigue mezclando hasta conseguir una consistencia homogénea.\n4. Añade la harina y mezcla el tiempo mínimo, lo justo hasta que esté integrada.\n5.Recoge la masa en una bola, envuélvela en film transparente y déjala en la nevera como mínimo una hora.\n6.Pasado ese tiempo, retírala del film y llévala a una superficie de trabajo enharinada.'\n7. Estírala con ayuda de un rodillo, dándole forma circular (los de mármol van estupendos en este tipo de masas, porque mantienen la masa fría más tiempo).\n8.Pasa la masa al molde perforado De Buyer con base extraíble (o a una bandeja perforada, disponiendo en ella un aro perforado) previamente engrasado.\n9.Baja la masa a la base y presiónala con los dedos hacia las paredes del molde (debe formar un ángulo recto entre paredes y base).\n10.Deja la masa en el molde tapada en film durante mínimo una hora (¡idealmente toda la noche!, hasta el día siguiente).\n11.Hecho el reposo, hornea la masa en el horno precalentado a 160 °C, durante 15 minutos.Transcurridos los 15 minutos, saca la masa del horno y reserva. Mantén el horno encendido.",
      "imagen": "https://cdn.shopify.com/s/files/1/0191/9978/files/1_5f502ef5-6c01-4694-b1ed-be0fb7ff2904.jpg",
      "categoria": "Dulce"
    }
```

## Métodos de Usuarios

| Método | #Url de Usuarios   | #Acción                      |
| ------ | ------------------ | ---------------------------- |
| POST   | /auth              | Login de un usuario          |
| POST   | /auth/usuarios     | Crear nueva receta           |
| GET    | /auth/usuarios     | Muestra la lista de usuarios |
| GET    | /auth/usuarios/:id | Busca un usuario por su id   |

Ejemplo de Body en el envío de Crear nuevo Usuario:

```
    {
        "nombreUsuario":"admin",
        "email":"admin@rollingcode.com",
        "password":"123456aA"
    }
```

Ejemplo de Body en el envío de Loguear nuevo Usuario:

```
    {
        "email":"admin@rollingcode.com",
        "password":"123456aA"
    }
```

## Repositorio Frontend

[Frontend Blog de Recetas de Cocina](https://github.com/jgromerou/tp6-practico-backend)

## Autor

1. Juan Gerardo Romero Uro [github](https://github.com/jgromerou)
