import { injectable } from 'inversify';
import IntegrationService from '../services/integration.service';

@injectable()
export default class App {
    constructor(
        private integrationService: IntegrationService,
    ) { }
    public async start() {
        console.log('Integration service started!');

        await this.integrationService.requestAndSaveData();

        console.log('Finish! Check the "users.json" file in this folder.')
    }
}
