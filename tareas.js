const fs = require('fs');
const tareas = {
    archivo: 'tareas.json',
    leer:function (){
        return JSON.parse(fs.readFileSync(this.archivo,'utf-8'));
    },
    escribirJSON: function(contenido){
        fs.writeFileSync(this.archivo,JSON.stringify(contenido, null,' '));
    },
    guardar: function(nuevaTarea){
        const contenido = this.leer();
        contenido.push({
            descripcion: nuevaTarea,
            estado: 'no cumplido'
        }
        
        )
        this.escribirJSON(contenido);
        
    },
    filtrar: function(estado){
        const arrayTareas = this.leer();
        const arrayEstados=[];

        arrayTareas.forEach((tarea) => {
            arrayEstados.push(tarea.estado);
        });
        
        if (!arrayEstados.includes(estado)) {
            console.log("Es necesario indicar el estado correspondiente");
        }
        console.log(arrayEstados);
        return arrayTareas.filter(tarea => tarea.estado === estado);
    },
    borrar: function(numero){
        const arrayTareas = this.leer();
        arrayTareas.splice(numero-1,1);
        this.escribirJSON(arrayTareas);
    }
    
}
module.exports=tareas;