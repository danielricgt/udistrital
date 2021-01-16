function createUserMutation(identificacion,nombres,apellidos,correo,fecha_creacion,fk_cargo,fk_dependencia) {
  const mutacion = `mutation {
    insert_usuario(objects: {id: "${identificacion}", nombres: "${nombres}",apellidos: "${apellidos}", correo: "${correo}", estado: true, fecha_creacion: "${fecha_creacion}", fk_cargo: ${fk_cargo}, fk_dependencia: ${fk_dependencia}}) {
      returning {
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
  }`;

  return mutacion
}


module.exports = {
  createUserMutation
};
