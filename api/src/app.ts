import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';

import MasterRouter from './routes/master.route';

import Errorhandler from './models/err/ErrorHandler';
import ErrorHandler from './models/err/ErrorHandler';

dotenv.config({
    path: '.env'
});

class Server {
    public app = express();
    public router = MasterRouter;
}

// init api
const server = new Server();
server.app.use('/api', server.router);

server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message
    });
});

// listen on port 3000
((port = process.env.APP_PORT || 3000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
