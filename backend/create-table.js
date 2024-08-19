import {sql} from './db.js';

// sql`DROP TABLE IF EXISTS formslist;`.then(() => {
//     console.log('Table dropped');
// });

sql`
CREATE TABLE formslist (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company_name VARCHAR(255),
    department VARCHAR(255),
    segment VARCHAR(255),
    solution TEXT,
    message TEXT
);
`.then(() => {
    console.log('Table created');
})