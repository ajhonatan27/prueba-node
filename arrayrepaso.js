const tareas = require('./tareas.js');
//const tareasJSON = require('./tareas.json');
//const tareas= JSON.parse(tareasJSON);
const accion = process.argv[2];
switch(accion)
{
    case 'listar':
        {
            const tareasArray = tareas.leer();
            /*for(let i=0; i < tareasArray.length; i++)
            {
                console.log(i+1 + '-Descripcion: ' +tareasArray[i].descripcion + ' - Estado: ' + tareasArray[i].estado);
            }*/

            tareasArray.forEach((tarea, i) => {
                console.log((i + 1) + ' - ' + 'Descripción: ' + tarea.descripcion + ' -' + ' Estado ' + tarea.estado);
            });
    
        }
    break;

    case 'agregar':
            const validacionTarea=process.argv[3];

                if(!validacionTarea)
                {
                    console.log("Para agregar una tarea es necesario un titulo");
                }

            tareas.guardar(process.argv[3]);
            console.log('listar');
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