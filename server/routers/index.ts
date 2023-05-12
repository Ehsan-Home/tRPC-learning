import {t} from "../trpc"
import { usersRoutes } from "./users";

export const appRouter = t.router({
    sayHi:t.procedure.query(() => {
      return "Hi from server!"
    }),
    sayHi2: t.procedure.input((v) => {
      if(typeof v === 'number') return v + 10;
  
      throw new Error("Invalid type. Expected number")
    }).query((v) => {
      return `Server said: ${v.input} is received`
    }),
    logToServer:t.procedure.input((v) => {
      if (typeof v === 'string') return v
  
      throw new Error("Invalid type. Expected string")
    }).mutation(req => {
      console.log(`Client says: ${req.input}`);
      return req.input;
    }),
    users:usersRoutes,
  })
  