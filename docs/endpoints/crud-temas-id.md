# Endpoint: `temas/{id}`

Permite obtener información detallada sobre un tema específico mediante su identificador único. En donde se estaran registrando los datos del id_tema, tema_id, titulo, descripcion y fecha_creacion.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud GET
```http
GET/temas/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id_tema": 1,
"tema_id": 1,
"titulo": "restas",
"descripcion": "Realiza las restas ",
"fecha_creacion": "2023-01-02T00:00:00.000Z"
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

Permite reemplazar un dato de un tema.
```http
PATCH/temas/1

Content-Type: application/json
{
"id_tema": 1,
"tema_id": 1,
"titulo": "Sumas",
"descripcion": "Realiza las sumas ",
"fecha_creacion": "2023-01-02T00:00:00.000Z"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_tema": 1,
    "tema_id": 1,
    "titulo": "Sumas",
    "descripcion": "Realiza las sumas ",
    "fecha_creacion": "2023-01-02T00:00:00.000Z"
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

Permite agregar un tema.
```http
POST/temas

Content-Type: application/json
{
"id_tema": 6,
"tema_id": 5,
"titulo": "Dividiendo aprendemos",
"descripcion": "Realiza las divisiones ",
"fecha_creacion": "2023-01-02T00:00:00.000Z"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_tema": 6,
    "tema_id": 5,
    "titulo": "Dividiendo aprendemos",
    "descripcion": "Realiza las divisiones ",
    "fecha_creacion": "2023-01-02T00:00:00.000Z"
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
Permite reemplazar un tema.

```http
PUT/temas

Content-Type: application/json
{
"id_tema": 6,
"tema_id": 3,
"titulo": "Dividiendo aprendemos",
"descripcion": "Realiza las divisiones ",
"fecha_creacion": "2023-01-02T00:00:00.000Z"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_tema": 6,
    "tema_id": 3,
    "titulo": "Dividiendo aprendemos",
    "descripcion": "Realiza las divisiones ",
    "fecha_creacion": "2023-01-02T00:00:00.000Z"
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
  sobre un tema en específico.