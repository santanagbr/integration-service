import { injectable } from 'inversify';

import { RequestService } from './request.service';
import FileService from './file.service';
import UserBuilder from '../domain/builders/user.builder';

@injectable()
export default class IntegrationService {
    constructor(
        private requestService: RequestService,
        private fileService: FileService,
        private userBuilder: UserBuilder
    ) { }

    public async requestAndSaveData() {
        let users = await this.requestService.getUserData();
        // users = users.slice(0,50); // Descomentar se a máquina travar por excesso de dados.

        if (!users) throw new Error('Invalid users.');

        const usersAddressesRequests = users.map((user) => (this.requestService.getUserAddress(user.id)));
        const usersAddresses = await Promise.all(usersAddressesRequests);

        const buildedUsers = users.map((user, index) => this.userBuilder.build(user, usersAddresses[index]))

        await this.fileService.writeUserData(buildedUsers);
    }
}