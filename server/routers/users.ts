import {t} from "../trpc"

export const usersRoutes = t.router({
    getUsers: t.procedure.query(() => {
        return [{ID:1,name:'ehsan',sex:"M"}, {ID:2,name:'sasan', sex:"M"}]
    })
})