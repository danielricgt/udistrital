function createUserMutacion(apellidos, correo, estado, fecha_creacion, fk_cargo, fk_dependencia, id) {
    let mutation = {
        insert_usuario_one(object: {apellidos: apellidos, correo: correo, estado: estado, fecha_creacion: fecha_creacion, fk_cargo: fk_cargo, fk_dependencia: fk_dependencia, id: id, nombres: nombres}) {
          apellidos
          correo
          estado
          fecha_creacion
          fk_cargo
          fk_dependencia
          id
          nombres
        }
      }
    return mutation;
}