import { countPendingTasks, getTasks } from '../data/tasksRepository.js';


// TODO
// Refactorizar este controlador para utilizar el "motor de plantillas" que hemos generado con el middleware
export async function tasksPageController(req, res, next) {
    const title = 'Listado de Tareas';
    const pendingTasks = await countPendingTasks();
    const tasks = await getTasks();
    const htmlTasks = tasks.map(t => `<li>#${t.id} - ${t.title} - [${t.done ? 'x' : ' '}] </li>`).join('');
    const content = `
        <h1>Listado de Tasks</h1>
        <p>Filtrar tareas:</p>
        <nav>
            <a href="/tasks?status=all">Todas las tareas</a>
            <a href="/tasks?status=pending">Pendientes</a>
            <a href="/tasks?status=done">Finalizadas</a>
        </nav>
        <ul>
            ${htmlTasks.length === 0 ? '<li>No se han encontrado tareas</li>' : htmlTasks}
        </ul>
    `;
    res.send(`
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="/app.css">
                <link rel="icon" href="/icon.webp">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                <title>${title}</title>
            </head>
            <body style="">
                <nav class="container">
                    <a href="/">Inicio</a>
                    <a href="/tasks">Lista de tareas (${pendingTasks})</a>
                    <a href="/health">Estado de la aplicación</a>
                </nav>
                ${content}

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            </body>
        </html>
    `);
}