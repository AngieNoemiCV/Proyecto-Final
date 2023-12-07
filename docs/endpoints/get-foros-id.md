# Endpoint: `GET /foros/{id}`

Permite obtener información detallada sobre un foro específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del foro que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /foros
POST /foros
PUT/foros/1
PATCH /foros/2
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id_foro": 4,
"descripcion": "Foro de Números Mágicos",
"titulo": "Números Mágicos",
"fecha_creacion": "2023-01-04T00:00:00.000Z"
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
- Código 400 the client request is not valid or is corrupt:
  ```json
  {
    "errno": 400,
    "error": "Bad RequestError: insert into usuario (nombre) values ('juan') - Unknown column 'nombre' in 'field list'"
  }


## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un desafio en específico.
