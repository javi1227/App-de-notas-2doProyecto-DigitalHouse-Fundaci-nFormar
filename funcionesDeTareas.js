const fs = require("fs");

let funcionesDeTareas= {
    LeerJson: function () {
        let tareasJson = fs.readFileSync("./tareas.json", "utf-8"); // Leemos el archivo Json
        let tareasParseadas = JSON.parse(tareasJson);
    return tareasParseadas
    }
}

module.exports = funcionesDeTareas
