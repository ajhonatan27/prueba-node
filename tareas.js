const fs = require('fs');
const tareas = {
    archivo: 'tareas.json',
    leer:function (){
        return JSON.parse(fs.readFileSync(this.archivo,'utf-8'));
    },
    guardar: function(nuevaTarea){
        const contenido = this.leer();
        contenido.push({
            descripcion: nuevaTarea,
            estado: 'pendiente'
        }
        )
        fs.writeFileSync(this.archivo,JSON.stringify(contenido));
    }
}
module.exports=tareas;