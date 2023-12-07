const { connectMysql } = require('../dbconnection');
class TemasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('temas');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('temas').where('id_tema', id);
    }

    static async agregar(Temas) {
        let db = await connectMysql();

        let query = db('temas').insert(Temas)
        return await query;
    }
    static async editar(id,Temas) {
        let db = await connectMysql();
        let query = db('temas')
        .where({ id_tema: id })
        .update(Temas)
        return await query;
    }
    static async actualizar(id_tema, campos) {
        let db = await connectMysql();
        return await db('temas').where('id_tema', id_tema).update(campos);
    }
}

module.exports = TemasModel;