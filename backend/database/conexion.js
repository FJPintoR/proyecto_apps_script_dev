function conexion(){
    return SpreadsheetApp.openById(env_().ID_BASEDEDATOS);
}

function obtenerSheet(NAME){
    return conexion().getSheetByName(NAME);
}
function obtenerDatos(NAME){
    return obtenerSheet(NAME).getDataRange().getDisplayValues();
}