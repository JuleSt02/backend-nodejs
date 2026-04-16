import { connectToDB } from '../lib/database.js';
import { User } from '../models/user-model.js';
import { Task } from '../models/task-model.js'; 


console.log("Inicializando SeedDb");
const connection = await connectToDB();
console.log(`Conectado a MongoDB: ${connection.name}`);

await seedUsers();
await seedTasks();

// Al final del proceso
await connection.close();
process.exit(0);
// 0 -> Ha finalizado correctamente
// != 0 -> Ha finalizado con errores

async function seedUsers() {

    const USERS = [
        { name: 'Joe Don', email: 'jd@kc.io', password: '1234' },
        { name: 'Admin', email: 'ad@kc.io', password: '1234' },
    ];

    const deleteResult = await User.deleteMany({});
    console.log(`Eliminados [${deleteResult.deletedCount}] User`);

    const insertedUsers = await User.insertMany(USERS);
    console.log(`Insertados [${insertedUsers.length}] User`);

}

async function seedTasks() {

    const TASKS = [
        {
            "title": "Preparar la clase de asincronía",
            "done": true
        },
        {
            "title": "Revisar los ejemplos de fs/promises",
            "done": false
        },
        {
            "title": "Explicar Promise.all en directo",
            "done": true
        },
        {
            "title": "Refactorizar la función de render",
            "done": false
        }
    ]
}