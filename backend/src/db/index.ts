import pg from "pg";

// Rename to populateLocalDB.ts

const DB_CONFIG = {
    user: "caal",
    password: "caal",
    host: "127.0.0.1",
    database: "caal",
    port: 5432,
    max: 3
}

const CREATE_ENUM_GENDER = `
CREATE TYPE GENDER AS ENUM (
    'male',
    'female'
);
`

const CREATE_ENUM_MEDICAL_CONDITION = `
CREATE TYPE MEDICAL_CONDITION AS ENUM (
    'none',
    'exist'
);
`

const CREATE_TABLE_DOGS = `
CREATE TABLE IF NOT EXISTS dogs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    year SMALLINT DEFAULT 0,
    month SMALLINT DEFAULT 0,
    weight INT DEFAULT 0,
    deadline DATE NOT NULL,
    breed VARCHAR(80) DEFAULT 'unknown',
    gender GENDER NOT NULL,
    medical_condition MEDICAL_CONDITION DEFAULT 'none',
    medical_condition_note TEXT, 
    description TEXT,
    image_urls TEXT[],
    video_urls TEXT[]
);
`

type Gender = 'male' | 'female'
type MedicalCondition = 'none' | 'exist'

type Dog = {
    name: string;
    year: number;
    month: number;
    weight: number;
    deadline: string;
    breed: string;
    gender: Gender;
    medicalCondition: MedicalCondition;
    medicalConditionNote: string;
    description: string;
    image_urls: string[];
    video_urls: string[];
}

const DOGS_INFO: Dog[] = [
    {
        name: 'Chichi',
        year: 2,
        month: 0,
        weight: 60,
        deadline: '2024-05-02',
        breed: 'German Shepherd Dog & Husky mix',
        gender: 'male',
        medicalCondition: 'exist',
        medicalConditionNote: 'Chichi needs medical care.',
        description: 'Chichi is adorable!',
        video_urls: ["../videos/AnimalLovers.mp4"],
        image_urls: ["../images/Chichi.jpeg", "../images/Chichi_2.jpeg"],
    },
    {
        name: 'Levi',
        year: 3,
        month: 0,
        weight: 50,
        deadline: '2024-05-02',
        breed: 'German Shepherd Dog',
        gender: 'male',
        medicalCondition: 'exist',
        medicalConditionNote: 'Levi needs medical care.',
        description: 'Levi is smart',
        video_urls: ["../videos/AnimalLovers.mp4"],
        image_urls: ["../images/Levi.jpeg"],
    },
    {
        name: 'Claire',
        year: 7,
        month: 0,
        weight: 40,
        deadline: '2024-05-03',
        breed: 'German Shepherd Dog',
        gender: 'female',
        medicalCondition: 'none',
        medicalConditionNote: '',
        description: 'Claire is cute',
        video_urls: ["../videos/AnimalLovers.mp4"],
        image_urls: ["../images/Claire.jpeg"],
    },
]

const DROP_TABLE_DOGS = `
    DROP TABLE dogs
`

const INSERT_DOG = `
INSERT INTO dogs(
    name,
    year,
    month,
    weight, 
    deadline,
    breed,
    gender,
    medical_condition,
    medical_condition_note,
    description,
    image_urls,
    video_urls
) VALUES(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11,
    $12
);
`

const SELECT_ALL_DOGS = `
SELECT * FROM dogs;
`

const createDogsTable = async (client: pg.PoolClient) => {
    try {
        await client.query('BEGIN')
        await client.query(CREATE_ENUM_GENDER)
        await client.query(CREATE_ENUM_MEDICAL_CONDITION)
        await client.query(CREATE_TABLE_DOGS)
        await client.query('COMMIT')
        console.log('Dogs table successfully created.')
    }
    catch(error) {
        await client.query('ROLLBACK')
        console.log('Detect error: ', error)
        console.log('Create dogs table action terminated.')
    }
    finally {
        console.log('Client has disconnected.')
    }
}

const dropsDogsTable = async (client: pg.PoolClient) => {
    try {
        await client.query('BEGIN')
        await client.query(DROP_TABLE_DOGS)
        await client.query('COMMIT')
        console.log('Dogs table successfully deleted.')
    }
    catch(error) {
        await client.query('ROLLBACK')
        console.log('Detect error: ', error)
        console.log('Delete dogs table action terminated.')
    }
}

const populateDogsTable = async (client: pg.PoolClient) => {
    try {
        await client.query('BEGIN')

        for (let dog of DOGS_INFO) {
            await client.query(INSERT_DOG, Object.values(dog))
        }
        
        await client.query('COMMIT')
        console.log('Dogs table successfully populated.')
    }
    catch(error) {
        await client.query('ROLLBACK')
        console.log('Detect error: ', error)
        console.log('Populate dogs table action terminated.')
    }
    finally {
        console.log('Client has disconnected.')
    }
}

const dropExistingDogsTable = async () => {
    const client = await pool.connect()
    try {
        await dropsDogsTable(client)
    }
    finally {
        client.release()
        console.log("Pool Client released.")
    }
}

const createAndPopulateDogsTable = async () => {
    const client = await pool.connect()
    try {
        await createDogsTable(client)
        await populateDogsTable(client)
    }
    finally {
        client.release()
        console.log("Pool Client released.")
    }
}

const { Pool } = pg;
const pool = new Pool(DB_CONFIG)

if (process.env.DELETE_EXISTING_TABLE_DOGS === 'true') {
    await dropExistingDogsTable()
}

await createAndPopulateDogsTable()

pool.end()
console.log('Connection pool closed.')