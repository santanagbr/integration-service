import 'reflect-metadata';
import { Container } from 'inversify';

import FileService from '../services/file.service';
import IntegrationService from '../services/integration.service';
import App from '../app/app';
import { RequestService } from '../services/request.service';
import UserBuilder from '../domain/builders/user.builder';

const container = new Container();

// Services
container.bind(IntegrationService).toSelf();
container.bind(FileService).toSelf();
container.bind(RequestService).toSelf();

// Builders
container.bind(UserBuilder).toSelf();

// App
container.bind(App).toSelf();
export default container;