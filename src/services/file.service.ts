import { writeFile } from 'fs';
import { injectable } from 'inversify';
import { promisify } from 'util';
import UserData from '../domain/models/user.data';

const writeFileAsync = promisify(writeFile);

@injectable()
export default class FileService {
    constructor() { }

    public async writeUserData(userData: UserData[]) {
        try {
            await writeFileAsync('./users.json', JSON.stringify(userData), 'utf8');
        } catch (err) {
            throw new Error(`Fail to write user file: ${err.message}`);
        }
    }
}