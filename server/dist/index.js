"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("@trpc/server/adapters/express");
const cors_1 = __importDefault(require("cors"));
const routers_1 = require("./routers");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: 'http://localhost:5173' }));
app.use("/trpc", (0, express_2.createExpressMiddleware)({ router: routers_1.appRouter }));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(8080, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:8080. Yaaay!`);
});
