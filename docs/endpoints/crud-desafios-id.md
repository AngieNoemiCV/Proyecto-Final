# Endpoint: `desafios/{id}`

Permite obtener información detallada sobre un desafio específico mediante su identificador único.  En donde se estaran registrando los datos del id_desafio, titulo, descripcion, nivel, tema e imagen.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del desafio que se desea recuperar.

## Ejemplo de Solicitud GET
```http
GET/desafios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id_desafio": 1,
"titulo": "Suma de Animales",
"descripcion": "¿Cuántos animales hay en total? Suma los números de patas de cada animal.",
"nivel": 1,
"tema": "Aritmética",
"imagen": "animal_suma.jpg"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el tema."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Ejemplo de Solicitud `PATCH`

Permite reemplazar un dato de un desafio.
```http
PATCH/desafios/2

Content-Type: application/json
{
  
"id_desafio": 2,
"titulo": "Rompecabezas Matemático",
"descripcion": "Encuentra el camino correcto sumando y restando números en el Rompecabezas.",
"nivel": 6,
"tema": "Aritmética",
"imagen": ""
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_desafio": 2,
    "titulo": "Rompecabezas Matemático",
    "descripcion": "Encuentra el camino correcto sumando y restando números en el Rompecabezas.",
    "nivel": 6,
    "tema": "Aritmética",
    "imagen": ""
}
```

## Respuestas de Errores Posibles

- Código 400 Bad Request
  ```json
  {
    "errno": 400,
    "error": "Bad Request"
  }
  ```

- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "Not Found"
  } 
  ```
  ## Ejemplo de Solicitud `POST`

Permite agregar un desafio.
```http
POST/desafios

Content-Type: application/json
{
  
"id_desafio": 7,
"titulo": "Juegos Matemático",
"descripcion": "Encuentra el camino correcto multiplicando y restando números en el laberinto.",
"nivel": 6,
"tema": "Aritmética",
"imagen": "",
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_desafio": 7,
    "titulo": "Juegos Matemático",
    "descripcion": "Encuentra el camino correcto multiplicando y restando números en el laberinto.",
    "nivel": 6,
    "tema": "Aritmética",
    "imagen": "",
}
```

## Respuestas de Errores Posibles

  Código 400 Bad Request
  ```json
  {
    "errno": 400,
    "error": "Bad Request"
  }
  ```


## Ejemplo de Solicitud `PUT`
Permite reemplazar un desafio.

```http
PUT/desafios

Content-Type: application/json
{
  "id_desafio": 5,
"titulo": "Laberinto Matemático",
"descripcion": "Encuentra el camino correcto sumando y restando números en el laberinto.",
"nivel": 6,
"tema": "Aritmética",
"imagen": ""
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_desafio": 5,
    "titulo": "Laberinto Matemático",
    "descripcion": "Encuentra el camino correcto sumando y restando números en el laberinto.",
    "nivel": 6,
    "tema": "Aritmética",
    "imagen": ""
}
```

## Respuestas de Errores Posibles

- Código 400 Bad Request
  ```json
  {
    "errno": 400,
    "error": "Bad Request"
  }
  ```

- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "Not Found"
  } 
  ```

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un desafio en específico.
