const { connectMysql } = require('../dbconnection');
class PublicacionesModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('publicaciones');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('publicaciones').where('id_publicacion', id);
    }

    static async agregar(publicaciones) {
        let db = await connectMysql();

        let query = db('publicaciones').insert(publicaciones)
        return await query;
    }
    static async editar(id,publicaciones) {
        let db = await connectMysql();
        let query = db('publicaciones')
        .where({ id_publicacion: id })
        .update(publicaciones)
        return await query;
    }
    static async actualizar(id_publicacion, campos) {
        let db = await connectMysql();
        return await db('publicaciones').where('id_publicacion', id_publicacion).update(campos);
    }
}

module.exports = PublicacionesModel;