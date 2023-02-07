import express from 'express';
import cors from 'cors';
// eslint-disable-next-line import/extensions
import router from './route/LudoRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// eslint-disable-next-line no-console
app.listen(6407, () => console.log('Server up and running'));
