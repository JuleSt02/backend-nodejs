import { countPendingTasks, getTasks } from '../data/tasksRepository.js';


// TODO
// Refactorizar este controlador para utilizar el "motor de plantillas" que hemos generado con el middleware
export async function tasksPageController(req, res, next) {
    const title = 'Listado de Tareas';
    const pendingTasks = await countPendingTasks();
    const tasks = await getTasks();
    // TODO: implementa el done[x] o [ ] en la vista de ejs
    // let htmlTasks = tasks.map(t => `<li>#${t.id} - ${t.title} - [${t.done ? 'x' : ' '}] </li>`).join('');
    // htmlTasks = htmlTasks.length === 0 ? '<li>No se han encontrado tareas</li>' : htmlTasks;

    // htmlTasks+= '<script> alert("XSS Injection"); </script>'
    // El codigo HTML siempre se tiene que escapar, en caso de no ser asi supone riesgo de XSS.

    // TODO: refactorizar a nuestro motor de plantillas.
    // Enviando el htmlTasks como variable
    const status = req.query.status ?? 'all';
    let filteredTasks = tasks;
    if ( status === 'pending' ) {
        filteredTasks = tasks.filter(t => t.done === false);
    } else if ( status === 'done' ) {
         filteredTasks = tasks.filter(t => t.done === true);
    };

    res.render('tasks.html', {
        title: title,
        pendingTasks: pendingTasks,
        // htmlTasks: htmlTasks,
        tasks: filteredTasks,
    });
}