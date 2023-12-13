# Endpoint: `GET /foros/{id}`

Permite obtener información detallada sobre un foro específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del foro que se desea recuperar.

## Ejemplo de Solicitud GET
```http
GET/foros/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id_foro": 1,
"descripcion": "Foro de Sumar y Restar",
"titulo": "Sumar y Restar",
"fecha_creacion": "2023-01-01T00:00:00.000Z"
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

Permite reemplazar un dato de un foro.
```http
PATCH/foros/1

Content-Type: application/json
{
  "titulo": "Dividir jugando",
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Successfull partial update"
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

Permite agregar un foro.
```http
POST/foros

Content-Type: application/json
{
  "titulo": "Aprendamos bien",
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Created"
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
Permite reemplazar un foro.

```http
PUT/foros

Content-Type: application/json
{
  "titulo": "matematicaas",
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Updated successfully"
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
  sobre un foro en específico.
