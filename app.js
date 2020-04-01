const tareas = require('./tareas.js');
const chalk = require('chalk');
//const tareasJSON = require('./tareas.json');
//const tareas= JSON.parse(tareasJSON);
const accion = process.argv[2];
switch (accion) {
    case 'listar':
        {
            const tareasArray = tareas.leer();
            /*for(let i=0; i < tareasArray.length; i++)
            {
                console.log(i+1 + '-Descripcion: ' +tareasArray[i].descripcion + ' - Estado: ' + tareasArray[i].estado);
            }*/

            tareasArray.forEach((tarea, i) => {
                console.log(chalk.red((i + 1) + ' - ' + 'Descripción: ' + tarea.descripcion + ' -' + ' Estado ' + tarea.estado));
            });

        }
        break;

    case 'agregar':
        const validacionTarea = process.argv[3];

        if (!validacionTarea) {
            console.log("Para agregar una tarea es necesario un titulo");
        }
        else{
            tareas.guardar(process.argv[3]);
        }
        
        break;

    case 'filtrar':
    {
        const estadoParaFiltrado = process.argv[3];
        if (!estadoParaFiltrado) 
        {
            console.log("Es necesario indicar el estado correspondiente");
        }
        
        const arrayTareasFiltradas = tareas.filtrar(estadoParaFiltrado);

        arrayTareasFiltradas.forEach((arrayTareasFiltradas, index) => {
            console.log((index + 1) + '- ' + arrayTareasFiltradas.descripcion + '.-  ' + arrayTareasFiltradas.estado);
        });
    }
        break;
    
    case 'borrar':
    {
        const numeroTareaBorrar=process.argv[3];
        const arrayTareas = tareas.leer();
        if(!numeroTareaBorrar || (numeroTareaBorrar > arrayTareas.length) || (numeroTareaBorrar <= 0))
        {
            console.log("Debe ingresar el numero de la tarea");
        }
        else{
            tareas.borrar(numeroTareaBorrar);
        }
        
    }
        break;
    case undefined:
        {
            console.log('Accion desconocida');
        }
        break;

    default:
        {
            console.log('No es una accion valida');
        }
}