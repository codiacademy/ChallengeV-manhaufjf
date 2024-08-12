import { randomUUID } from 'crypto'
import { sql } from './db.js' 


export class DatabasePostgres {

    async list(){
        const formlist = await sql`select * from formslist`

        return formlist
    }

    async create(form){
        const formId = randomUUID()

        await sql`
            insert into formslist (
                id,
                name,
                email,
                phone,
                company_name,
                department,
                segment,
                solution,
                message
            ) values (
                ${formId},
                ${form.name},
                ${form.email},
                ${form.phone},
                ${form.company_name},
                ${form.department},
                ${form.segment},
                ${form.solution},
                ${form.message}
            )
        `
    }

    async delete(id){
        await sql`delete from formslist where id = ${id}`
    }
}