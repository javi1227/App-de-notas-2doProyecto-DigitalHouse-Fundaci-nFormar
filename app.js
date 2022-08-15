//FS nos permite trabajar con los archivos del sistema operativo
const process = require("process");
const funcionesDeTareas = require("./funcionesDeTareas");
let action = process.argv[2] && process.argv[2].toLowerCase();

switch (action) {
  case "listar":
    let listaDeTareas = funcionesDeTareas.LeerJson();
    for (let i = 0; i < listaDeTareas.length; i++) {
      console.log(
        `Tarea: ${listaDeTareas[i].titulo} \nEstado: ${listaDeTareas[i].estado}`
      );
      console.log("-----------------------------------------------------");
    }
    break;
  case undefined:
    console.log("Atención tienes que pasar una acción");
    break;
  default:
    console.log("No entiendo qué quieres hacer");
}
