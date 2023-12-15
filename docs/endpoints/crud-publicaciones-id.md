# Endpoint: `publicaciones/{id}`

Permite obtener información detallada sobre una publicacion específico mediante su identificador único. En donde se estaran registrando los datos del id_publicacion, tema_id, usuario_id, contenido y fecha_creacion.


## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la publicacion que se desea recuperar.

## Ejemplo de Solicitud GET
```http
GET/publicaciones/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id_publicacion": 9,
"tema_id": 1,
"usuario_id": 1,
"contenido": "¡Hola a todos! Hoy resolví un desafío de suma y resta. ¿Alguien más lo intentó?",
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

Permite reemplazar un dato de un publicacion.
```http
PATCH/publicaciones/1

Content-Type: application/json
{
"id_publicacion": 9,
"tema_id": 1,
"usuario_id": 1,
"contenido": "¡Hola a todos! Hoy resolví un desafío de división. ¿Alguien más lo intentó?",
"fecha_creacion": "2023-12-02 T00:00:00.000Z"

}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_publicacion": 9,
    "tema_id": 1,
    "usuario_id": 1,
    "contenido": "¡Hola a todos! Hoy resolví un desafío de división. ¿Alguien más lo intentó?",
    "fecha_creacion": "2023-12-02 T00:00:00.000Z"

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

Permite agregar un publicacion.
```http
POST/publicaciones

Content-Type: application/json
{
"id_publicacion": 9,
"tema_id": 1,
"usuario_id": 1,
"contenido": "¡Hola a todos! Hoy resolví un desafío de división. ¿Alguien más lo intentó?",
"fecha_creacion": "2023-12-02 T00:00:00.000Z"

}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_publicacion": 15,
    "tema_id": 5,
    "usuario_id": 5,
    "contenido": "¡Hola a todos! Hoy resolví un desafío de rompecabezas sumando. ¿Alguien más lo intentó?",
    "fecha_creacion": "2023-01-02 T00:00:00.000Z"
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
Permite reemplazar un publicacion.

```http
PUT/publicaciones

Content-Type: application/json
{
    "id_publicacion": 5,
    "tema_id": 1,
    "usuario_id": 1,
    "contenido": "¡Hola a todos! Hoy resolví un desafío de división. ¿Alguien más lo intentó?",
    "fecha_creacion": "2023-12-02 T00:00:00.000Z"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_publicacion": 5,
    "tema_id": 1,
    "usuario_id": 1,
    "contenido": "¡Hola a todos! Hoy resolví un desafío de división. ¿Alguien más lo intentó?",
    "fecha_creacion": "2023-12-02 T00:00:00.000Z"
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
