# Endpoint: `GET /desafios/{id}`

Permite obtener información detallada sobre un desafio específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del desafio que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /desafios
POST /desafios
PUT/desafios/1
PATCH /desafios/2
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
- Código 400 the client request is not valid or is corrupt:
  ```json
  {
    "errno": 400,
    "error": "Bad RequestError: insert into usuario (nombre) values ('juan') - Unknown column 'nombre' in 'field list'"
  }


## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un desafio en específico.
