import { readFile } from 'node:fs/promises';

// TODO 
export async function getTasks() {
    const fileUrl = new URL('./tasks.json', import.meta.url);
    const fileContents = await readFile(fileUrl);
    return JSON.parse(fileContents);
}
