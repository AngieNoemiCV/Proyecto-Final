const { connectMysql } = require('../dbconnection');
class DesafiosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('desafios');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('desafios').where('id_desafio', id);
    }

    static async agregar(desafios) {
        let db = await connectMysql();
        let query = db('desafios').insert(desafios)
        return await query;
    }

    static async editar(id,desafios) {
        let db = await connectMysql();
        let query = db('desafios')
        .where({ id_desafio: id })
        .update(desafios)
        return await query;
    }
    static async actualizar(id_desafio, campos) {
        let db = await connectMysql();
        return await db('desafios').where('id_desafio', id_desafio).update(campos);
    }


}

module.exports = DesafiosModel;