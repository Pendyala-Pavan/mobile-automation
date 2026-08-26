import { readFile, writeFile } from 'node:fs/promises';

const filePath = './test/data/signupLogin.json';

export async function saveSignupLogin(phoneNumber, password) {
    await writeFile(
        filePath,
        JSON.stringify({ phoneNumber, password })
    );
}

export async function getSignupLogin() {
    return JSON.parse(
        await readFile(filePath, 'utf8')
    );
}
