import { countPendingTasks } from '../data/tasksRepository.js';


export async function loginPageController(req, res, next) {
    res.render('login.html', {
        title: 'Inicia Sesión',
        values: {}
    });
}