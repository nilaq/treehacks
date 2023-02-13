import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import {candidateRouter} from "./routers/candidate";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  message: exampleRouter,
  candidate: candidateRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
