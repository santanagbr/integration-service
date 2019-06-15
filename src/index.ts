import container from './config/inversify.config';
import App from './app/app';

const app = container.get<App>(App);

app.start();
