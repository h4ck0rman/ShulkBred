import prisma from '$lib/db.server'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        data: await prisma.logs.findMany()
    }
}

/** @type {import('./$types').Actions} */
export const actions = {

	create: async ({ request }) => {
		// TODO create the record
        const data = await request.formData();
        console.log(data)
        
        const state = data.get('state');
        const weight = Number(data.get('weight'));
        console.log(state, weight)
        await prisma.logs.create({
            data: {
                state, 
                weight
            },
        })
	},
	edit: async (event) => {
		// TODO edit the record
	},
    delete: async (event) => {
        // TODO delete the record 
    }
};