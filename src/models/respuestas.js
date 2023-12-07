const { connectMysql } = require('../dbconnection');
class RespuestasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('respuestas_usuario_des');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('respuestas_usuario_des').where('id_respuesta', id);
    }

    static async agregar(respuestas) {
        let db = await connectMysql();

        let query = db('respuestas_usuario_des').insert(respuestas)
        return await query;
    }
    static async editar(id,respuestas) {
        let db = await connectMysql();
        let query = db('respuestas_usuario_des')
        .where({ id_respuesta: id })
        .update(respuestas)
        return await query;
    }
    static async actualizar(id_respuesta, campos) {
        let db = await connectMysql();
        return await db('respuestas_usuario_des').where('id_respuesta', id_respuesta).update(campos);
    }
}

module.exports = RespuestasModel;