import nodemailer from 'nodemailer';
import path from 'path';

const hbs = require('nodemailer-express-handlebars');

import { mailConfig } from '../config/mail';

const transport = nodemailer.createTransport({
    host: `${mailConfig.host}`,
    port: mailConfig.port,
    auth: {
      user: `${mailConfig.user}`,
      pass: `${mailConfig.pass}`
    }
});

export default transport;