const { connectMysql } = require('../dbconnection');
class UsuariosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Usuarios');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Usuarios').where('id_usuario', id);
    }

    static async agregar(Usuarios) {
        let db = await connectMysql();

        let query = db('Usuarios').insert(Usuarios)
        return await query;
    }
    static async editar(id,Usuarios) {
        let db = await connectMysql();
        let query = db('Usuarios')
        .where({ id_usuario: id })
        .update(Usuarios)
        return await query;
    }
    static async actualizar(id_usuario, campos) {
        let db = await connectMysql();
        return await db('Usuarios').where('id_usuario', id_usuario).update(campos);
    }
}

module.exports = UsuariosModel;