import prisma from '$lib/db.server'
import { fail } from '@sveltejs/kit';

const states = ['Shredding', 'Bulking', 'Maintenenance']

const uuid_regex = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')


/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        data: await prisma.logs.findMany()
    }
}

/** @type {import('./$types').Actions} */
export const actions = {

	create: async ({ request }) => {
        const data = await request.formData();
        let state = data.get('state');
        let weight = data.get('weight');

        // Check for null parameters
        if (state == null || weight == null) {
            return fail(400, {message: "Malformed Request. Log parameters can not be null."});
        }

        // Check if the weight is a number
        if (isNaN(weight)) {
            return fail(400, {message: "Malformed Request. Please provide numbers for Weight."});
        } else {
            weight = Number(weight);
        }
        
        // Check whitelist for states
        if (!states.includes(state)) {
            return fail(400, {message: "Malformed Request. State is not recognised."});
        }

        await prisma.logs.create({
            data: {
                state, 
                weight
            },
        })
	},

	delete: async ({ request }) => {
        const data = await request.formData();
        let id = data.get('id')

        // Check for null parameters
        if (id == null) {
            return fail(400, {message: "Malformed Request. No ID provided"});
        }

        // Check for UUID format ID parameter input
        if (!uuid_regex.test(id)) {
            return fail(400, {message: "Malformed Request. ID format is wrong."});
        }

        const deleteLog = await prisma.logs.delete({
            where: {
                id
            }
        })
	},

    edit: async ({ request }) => {
        const data = await request.formData();
        let id = data.get('id');
        let weight = data.get('weight');
        let state = data.get('state');

        // Check for null parameters
        if (id == null || state == null || weight == null) {
            return fail(400, {message: "Malformed Request. Log parameters can not be null."});
        }

        // Check if the ID and weight are numbers
        if (isNaN(weight)) {
            return fail(400, {message: "Malformed Request. Please provide numbers for Weight."});
        } else {
            weight = Number(weight);
        }

        // Check for UUID format ID parameter input
        if (!uuid_regex.test(id)) {
            return fail(400, {message: "Malformed Request. ID format is wrong."});
        }
        
        // Check whitelist for states
        if (!states.includes(state)) {
            return fail(400, {message: "Malformed Request. State is not recognised."});
        }

        const updateLog = await prisma.logs.update({
            where: {
                id
            },
            data: {
                state, 
                weight
            },
        })
    }
};