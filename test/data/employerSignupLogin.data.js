import { readFile, writeFile } from 'node:fs/promises';

const filePath = './test/data/employerSignupLogin.json';

export async function saveEmployerSignupLogin(phoneNumber, password) {
    await writeFile(
        filePath,
        JSON.stringify({ phoneNumber, password })
    );
}

export async function getEmployerSignupLogin() {
    return JSON.parse(
        await readFile(filePath, 'utf8')
    );
}
