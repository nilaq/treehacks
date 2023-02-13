import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import {prisma} from "../../db";

export const candidateRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(({}) => {
            return prisma.candidate.findMany();
        }),
    create: publicProcedure.input(z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        gender: z.enum(["Male", "Female", "Other"]).optional(),
    }))
        .mutation(async ({input}) => {
            return prisma.candidate.create({
                data: {
                    firstName: input.firstName,
                    lastName: input.lastName,
                    email: input.email,
                    gender: input.gender
                }
            })
        })
});