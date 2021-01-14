function createUserMutacion( nombres,apellidos, correo, estado, fk_cargo, fk_dependencia, identificacion) {
    let mutation = `insert_usuario_one(object: {apellidos: ${apellidos}, correo: ${correo}, estado: ${estado}, fecha_creacion: ${Date.now()}, fk_cargo: ${fk_cargo}, fk_dependencia: ${fk_dependencia}, id: ${identificacion}, nombres: ${nombres}) {
          apellidos
          correo
          estado
          fecha_creacion
          fk_cargo
          fk_dependencia
          id
          nombres`
    return mutation;
}