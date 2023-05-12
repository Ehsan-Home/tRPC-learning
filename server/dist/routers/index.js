"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const trpc_1 = require("../trpc");
const users_1 = require("./users");
exports.appRouter = trpc_1.t.router({
    sayHi: trpc_1.t.procedure.query(() => {
        return "Hi from server!";
    }),
    sayHi2: trpc_1.t.procedure.input((v) => {
        if (typeof v === 'number')
            return v + 10;
        throw new Error("Invalid type. Expected number");
    }).query((v) => {
        return `Server said: ${v.input} is received`;
    }),
    logToServer: trpc_1.t.procedure.input((v) => {
        if (typeof v === 'string')
            return v;
        throw new Error("Invalid type. Expected string");
    }).mutation(req => {
        console.log(`Client says: ${req.input}`);
        return req.input;
    }),
    users: users_1.usersRoutes,
});
