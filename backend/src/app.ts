import express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';

const app = express();
app.set('port', process.env.PORT);
app.use(bodyParser.json());

if (process.env.NODE_ENV !== "production") {
    app.use(errorhandler());
}
export default app;