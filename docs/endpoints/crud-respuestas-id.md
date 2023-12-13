# Endpoint: `GET /respuestas/{id}`

Permite obtener información detallada sobre una respuestas específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la respuesta que se desea recuperar.

## Ejemplo de Solicitud GET
```http
GET/respuestas_usuario_des/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id_respuesta": 1,
"desafio_id": 1,
"usuario_id": 1,
"respuesta": "Conté 8 patas en total.",
"fecha_envio": "2023-01-02T00:00:00.000Z"
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

Permite reemplazar un dato de un respuesta.
```http
PATCH/respuestas_usuario_des/1

Content-Type: application/json
{
  "respuesta": "Conté 9 pelotas",
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

Permite agregar un respuesta.
```http
POST/respuestas_usuario_des

Content-Type: application/json
{
  "respuesta": "SI",
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
Permite reemplazar un respuesta.

```http
PUT/respuestas_usuario_des

Content-Type: application/json
{
  "respuesta": "Conto 10 bolitas",
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
  sobre un desafio en específico.
