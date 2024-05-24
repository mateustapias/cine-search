// import express from 'express';
// // import * as express from 'express';
// import 'express-async-errors';

// import errorMiddleware from './middlewares/errorMiddleware';
// import router from './routes';
// import sequelize from './database/models/index'; // Importe o Sequelize aqui

// class App {
//   public app: express.Express;

//   constructor() {
//     this.app = express();

//     this.config();

//     // Não remover essa rota
//     this.app.get('/', (req, res) => res.json({ ok: true }));

//     this.routes();

//     // Não remova esse middleware de erro, mas fique a vontade para customizá-lo
//     // Mantenha ele sempre como o último middleware a ser chamado
//     this.app.use(errorMiddleware);
//   }

//   private config(): void {
//     const accessControl: express.RequestHandler = (_req, res, next) => {
//       res.header('Access-Control-Allow-Origin', '*');
//       res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
//       res.header('Access-Control-Allow-Headers', '*');
//       next();
//     };

//     this.app.use(express.json());
//     this.app.use(accessControl);
//   }

//   private routes(): void {
//     this.app.use(router);

//     // Adicione a rota de teste de conexão aqui
//     this.app.get('/test-connection', async (req, res) => {
//       try {
//         await sequelize.authenticate();
//         res.send('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//         res.status(500).send('Unable to connect to the database.');
//       }
//     });
//   }

//   public start(PORT: string | number): void {
//     this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
//   }
// }

// export { App };

// // Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
// export const { app } = new App();

import express from 'express';
import cors from 'cors';
import router from './routes';

// const corsOptions = {
//   origin: ['https://my-cine-search.vercel.app'], // url do front
//   exposedHeaders: ['Content-Type', 'Location', 'x-amzn-requestid'],
//   optionsSuccessStatus: 200,
// };

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();

    // Rota básica para teste
    this.app.get('/', (req, res) => res.json({ ok: true }));

    this.routes();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();
