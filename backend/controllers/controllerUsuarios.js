function guardarUsuario(usuario){
    try {
       
        const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIO);
        Insert(JSON.parse (usuario),sheetUsuarios);

        return {
            titulo: "Registro exitoso",
            descripcion: "Ya se encuentra el usurio registrado en la base de datos."
        }
    } catch (error) {
        return{
            titulo:"Ops ha ocurrido un error! "+error,
            descripcion: "Por favor contacte a soporte."
        }
   }

   
} 

function listarUsuarios(id = undefined){
    return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRO_USUARIO), id));
}

function actualizarUsuario (id,datos){
    
    try {
        const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIO);
        Update(id,datos,sheetUsuarios);
        return {
            titulo: "Actualizado correctamente",
            descripcion: "Ya se encuentra el usurio actulizado en la base de datos."
        }
    } catch (error) {
        return{
            titulo:"Ops ha ocurrido un error! "+error,
            descripcion: "Por favor contacte a soporte."
        }
   }
   
}

function eliminarUsuario(id){
    const sheetUsuarios=obtenerSheet(env_().SH_REGISTRO_USUARIO);
    const usuarioAEliminar = _read(sheetUsuarios,id);
    sheetUsuarios.deleteRow(usuarioAEliminar.row);
    return{
        titulo:"**Confirmaciòn**",
        descripcion: "Usuario Eliminado."
    }
}