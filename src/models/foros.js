const { connectMysql } = require('../dbconnection');
class ForosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('foros');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('foros').where('id_foro', id);
    }
    static async agregar(foros) {
        let db = await connectMysql();

        let query = db('foros').insert(foros)
        return await query;
    }
    static async editar(id,foros) {
        let db = await connectMysql();
        let query = db('foros')
        .where({ id_foro: id })
        .update(foros)
        return await query;
    }
    static async actualizar(id_foro, campos) {
        let db = await connectMysql();
        return await db('foros').where('id_foro', id_foro).update(campos);
    }
}

module.exports = ForosModel;