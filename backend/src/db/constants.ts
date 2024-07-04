import { Dog, DogStatus } from "./types";

export const DB_CONFIG = {
  user: "caal",
  password: "caal",
  host: "127.0.0.1",
  database: "caal",
  port: 5432,
  max: 3,
};

export const CREATE_ENUM_GENDER = `
CREATE TYPE GENDER AS ENUM (
    'male',
    'female'
);
`;

export const CREATE_ENUM_MEDICAL_CONDITION = `
CREATE TYPE MEDICAL_CONDITION AS ENUM (
    'none',
    'exist'
);
`;

export const DELETE_ENUM_GENDER = `
DROP TYPE IF EXISTS GENDER
`;

export const DELETE_ENUM_MEDICAL_CONDITION = `
DROP TYPE IF EXISTS MEDICAL_CONDITION
`;

export const CREATE_TABLE_DOGS = `
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
`;

export const DROP_TABLE_DOGS = `
    DROP TABLE IF EXISTS dogs
`;

export const INSERT_DOG = `
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
`;

export const CREATE_ENUM_RESCUE_STATUS = `
CREATE TYPE RESCUE_STATUS AS ENUM (
    'in_need',
    'in_contact',
    'tagged'
);
`;

export const CREATE_ENUM_ADOPTER_FOSTER_STATUS = `
CREATE TYPE ADOPTER_FOSTER_STATUS AS ENUM (
    'in_need',
    'in_contact',
    'committed'
);
`;

export const DELETE_ENUM_RESCUE_STATUS = `
DROP TYPE IF EXISTS RESCUE_STATUS
`;

export const DELETE_ENUM_ADOPTER_FOSTER_STATUS = `
DROP TYPE IF EXISTS ADOPTER_FOSTER_STATUS
`;

export const CREATE_TABLE_DOGS_STATUS = `
CREATE TABLE IF NOT EXISTS dogs_status (
    id SERIAL PRIMARY KEY,
    dog_id INT,
    rescue_status RESCUE_STATUS NOT NULL,
    adopter_foster_status ADOPTER_FOSTER_STATUS NOT NULL,
    number_of_interested INT DEFAULT 0
);
`;

export const DROP_TABLE_DOGS_STATUS = `
    DROP TABLE IF EXISTS dogs_status
`;

export const INSERT_DOG_STATUS = `
INSERT INTO dogs_status(
    dog_id,
    rescue_status,
    adopter_foster_status,
    number_of_interested
) VALUES(
    $1,
    $2,
    $3,
    $4
);
`;

export const GET_DOG_BY_ID = `
SELECT * FROM dogs WHERE id=$1;
`;

export const GET_DOGS_INFO = `
SELECT * FROM dogs;
`;

export const GET_DOG_STATUS_BY_ID = `
SELECT * FROM dogs_status WHERE dog_id=$1;
`;

export const GET_DOGS_STATUS = `
SELECT * FROM dogs_status;
`;

export const DOGS_INFO: Dog[] = [
  {
    name: "Chichi",
    year: 2,
    month: 0,
    weight: 60,
    deadline: "2024-05-02",
    breed: "German Shepherd & Husky mix",
    gender: "male",
    medical_condition: "exist",
    medical_condition_note: "Needs medical care.",
    description: "Chichi is adorable!",
    image_urls: ["../images/chichi1.jpeg", "../images/chichi2.jpeg"],
    video_urls: ["../videos/animalLovers.mp4"],
  },
  {
    name: "Levi",
    year: 3,
    month: 0,
    weight: 50,
    deadline: "2024-05-02",
    breed: "German Shepherd",
    gender: "male",
    medical_condition: "exist",
    medical_condition_note: "Needs medical care.",
    description: "Levi is smart",
    image_urls: ["../images/levi.jpeg"],
    video_urls: ["../videos/animalLovers.mp4"],
  },
  {
    name: "Claire",
    year: 7,
    month: 0,
    weight: 40,
    deadline: "2024-05-03",
    breed: "German Shepherd",
    gender: "female",
    medical_condition: "none",
    medical_condition_note: "",
    description: "Claire is cute",
    image_urls: ["../images/claire.jpeg"],
    video_urls: ["../videos/animalLovers.mp4"],
  },
];

export const DOGS_STATUS: DogStatus[] = [
  {
    dog_id: 1,
    rescue_status: "in_contact",
    adopter_foster_status: "in_need",
    number_of_interested: 0
  },
  {
    dog_id: 2,
    rescue_status: "tagged",
    adopter_foster_status: "in_contact",
    number_of_interested: 1
  },
  {
    dog_id: 3,
    rescue_status: "tagged",
    adopter_foster_status: "committed",
    number_of_interested: 2
  }
];