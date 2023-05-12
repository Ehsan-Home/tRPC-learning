import express, { Express, Request, Response } from 'express';
import {createExpressMiddleware} from "@trpc/server/adapters/express"
import cors from "cors"
import { appRouter } from './routers';

const app: Express = express();

app.use(cors({origin:'http://localhost:5173'}))

app.use("/trpc", createExpressMiddleware({router:appRouter}))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(8080, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:8080. Yaaay!`);
});

export type AppRouter = typeof appRouter