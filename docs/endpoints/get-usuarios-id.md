# Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuarios específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuarios que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuarios
POST /usuarios
PUT/usuarios/1
PATCH /usuarios/2
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id_usuario": 5,
"nombre": "Juan Jose",
"email": "JJ@hotmail.com",
"contraseña": "1111",
"tipo_usuario": "estudiante",
"fecha_creacion": "2023-12-04T00:00:00.000Z"
}
```

## usuarios de Errores Posibles
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
- Código 400 the client request is not valid or is corrupt:
  ```json
  {
    "errno": 400,
    "error": "Bad RequestError: insert into usuario (nombre) values ('juan') - Unknown column 'nombre' in 'field list'"
  }


## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un desafio en específico.
