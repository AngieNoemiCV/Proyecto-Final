# Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuarios específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuarios que se desea recuperar.

## Ejemplo de Solicitud GET
```http
GET/usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id_usuario": 1,
"nombre": "Ana García",
"email": "ana.garcia@outlook.com",
"contraseña": "contrasena123",
"tipo_usuario": "Estudiante",
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

Permite reemplazar un dato de un usuario.
```http
PATCH/usuarios/1

Content-Type: application/json
{
  "nombre": "Juan Lopez",
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

Permite agregar un usuario.
```http
POST/usuarios

Content-Type: application/json
{
  "id_usuario": 8,
"nombre": "Jose García",
"email": "JJJ.garcia@outlook.com",
"contraseña": "Joseeq123",
"tipo_usuario": "Estudiante",
"fecha_creacion": "2023-01-01T00:00:00.000Z"
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
Permite reemplazar un usuario.

```http
PUT/usuarios

Content-Type: application/json
{
  "nombre": "Maria Jose",
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
