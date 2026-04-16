import { countPendingTasks } from '../data/tasksRepository.js';

export async function homePageController(req, res, next) {
    // TODO: Añade la variable que falta a la vista.
    res.render('index.html', {
        title: 'Server HTTP Básico',
    });
}