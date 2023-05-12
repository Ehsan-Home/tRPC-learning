"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const trpc_1 = require("../trpc");
exports.usersRoutes = trpc_1.t.router({
    getUsers: trpc_1.t.procedure.query(() => {
        return [{ ID: 1, name: 'ehsan', sex: "M" }, { ID: 2, name: 'sasan', sex: "M" }];
    })
});
