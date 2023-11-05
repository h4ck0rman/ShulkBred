import prisma from '$lib/db.server'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        data: await prisma.logs.findMany()
    }
}