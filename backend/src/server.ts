import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);


//Query Params: http://localhost:3333/users?search=Gabriel console.log(request.query);
//Route Params: http://localhost:333/users/1 (identificar um recurso) console.log(request.params);
//Body: http://localhost:3333/users (recursos amplos) console.log(request.body);


app.listen(3333);

// REQ / RES
//localhost:3333