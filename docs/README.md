# Documentación detallada sobre el proyecto de especialidad

Bienvenido a la documentación de la API de mi proyecto de especialidad donde tiene como objetivo el crear un sitio web de desafios matematicos para niños de entre 6 y 12 años de edad. A continuación, se presenta una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                    | Descripción |
| -------------------------- | ----------- |
[`CRUD /desafios/{id}`](./endpoints//crud-desafios-id.md)          | Obtiene información detallada sobre un desafio específico. |
[`CRUD /foros/{id}`](./endpoints//crud-foros-id.md)          | Obtiene información detallada sobre un foro específico. |
[`CRUD /publicaciones/{id}`](./endpoints//crud-publicaciones-id.md)          | Obtiene información detallada sobre una publicación específico. |
[`CRUD /respuestas/{id}`](./endpoints//crud-respuestas-id.md)          | Obtiene información detallada sobre una respuesta específico. |
| [`CRUD /temas/{id}`](./endpoints//crud-temas-id.md)          | Obtiene información detallada sobre un tema específico. |
[`CRUD /usuarios/{id}`](./endpoints//crud-usuarios-id.md)          | Obtiene información detallada sobre un usuario específico. |

A continuación, se hablará brevemente sobre qué hacen y cómo se usan los métodos utilizados en este proyecto de especialidad. El objetivo es optimizar la búsqueda de información sobre videojuegos, asegurando que los amantes de estos siempre tengan acceso a información de calidad.

# GET

Función: Solicita la representación de un recurso específico. Es un método seguro y sin efectos secundarios, lo que significa que no debe modificar el estado del servidor.

Uso: Se utiliza para recuperar información del servidor. Los parámetros de la solicitud se envían en la URL, lo que los hace visibles y limita la cantidad de datos que se pueden enviar.

# POST:

Función: Envía datos para ser procesados a un recurso específico. Puede utilizarse para crear un nuevo recurso o realizar una acción que modifique el estado del servidor.

Uso: Se utiliza para enviar datos que no deben ser visibles en la URL (como contraseñas) y para realizar operaciones que pueden tener efectos secundarios, como la creación de un nuevo recurso en el servidor.

# PUT:

Función: Actualiza un recurso específico o crea uno si no existe. Debe ser idempotente, lo que significa que realizar la misma operación varias veces produce el mismo resultado que realizarla una sola vez.

Uso: Se utiliza para actualizar recursos existentes en el servidor. La información completa del recurso se envía en la solicitud, lo que implica que si el recurso ya existe, se sobrescribirá con los nuevos datos proporcionados.

# PATCH:

Función: Similar a PUT, pero se utiliza para realizar actualizaciones parciales en un recurso. Al contrario de PUT, no es necesario enviar toda la información del recurso, solo los campos que se desean actualizar.

Uso: Útil cuando solo se necesita actualizar una parte de un recurso sin afectar el resto de la información. Es más eficiente en términos de ancho de banda y recursos del servidor cuando solo se necesitan realizar cambios específicos.