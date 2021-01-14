function createUserMutacion() {
    let mutation = {
        insert_usuario_one(object: {apellidos: "", correo: "", estado: false, fecha_creacion: "", fk_cargo: 10, fk_dependencia: 10, id: "", nombres: ""}) {
          apellidos
          correo
          estado
          fecha_creacion
          fk_cargo
          fk_dependencia
          id
        }
      }
    return mutation;
}