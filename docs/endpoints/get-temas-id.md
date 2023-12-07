# Endpoint: `GET /temas/{id}`

Permite obtener información detallada sobre un tema específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /temas/123
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_tema": 4,
  "foro_id": 2,
  "titulo": "Números Mágicos",
  "descripcion": "Descubre el encanto de los números en situaciones cotidianas.",
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

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.
- Para consultar más detalle sobre los libros relacionados con el tema consultar
  la documentación del endpoint [`/temas/{id}/libros`](./get-temas-id-libros.md).