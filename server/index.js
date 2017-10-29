const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config()
const properties_controller = require('./controllers/properties_controller');
const auth_controller = require('./controllers/auth_controller');
const checkForSession = require('./middlewares/checkForSession');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'ThisIsASooperSecret',
  resave: false,
  saveUninitialized: false
}));
app.use( checkForSession );
app.use( express.static( `${__dirname}/../public/build` ) );
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

/* Authentication Controller*/
app.post('/api/auth/login', auth_controller.login);
app.post('/api/auth/register', auth_controller.register);
app.post('/api/auth/logout', auth_controller.signout);
/*Logan messing around don't mind me!*/
app.post('/api/users', auth_controller.create);

/* Property Controller*/
app.post('/api/properties', properties_controller.create);
app.get('/api/properties', properties_controller.read);
app.delete('/api/properties/:id', properties_controller.delete);
app.get('/api/properties/filter', properties_controller.filter);

const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`Server listening on port ${port}.`); });
