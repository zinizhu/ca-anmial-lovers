import { Dog } from "./types";

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
export const GET_DOG_BY_ID = `
SELECT * FROM dogs WHERE id=$1;
`;

export const DOGS_INFO: Dog[] = [
  {
    name: "Chichi",
    year: 2,
    month: 0,
    weight: 60,
    deadline: "2024-05-02",
    breed: "German Shepherd Dog & Husky mix",
    gender: "male",
    medicalCondition: "exist",
    medicalConditionNote: "Chichi needs medical care.",
    description: "Chichi is adorable!",
    video_urls: ["../videos/AnimalLovers.mp4"],
    image_urls: ["../images/Chichi.jpeg", "../images/Chichi_2.jpeg"],
  },
  {
    name: "Levi",
    year: 3,
    month: 0,
    weight: 50,
    deadline: "2024-05-02",
    breed: "German Shepherd Dog",
    gender: "male",
    medicalCondition: "exist",
    medicalConditionNote: "Levi needs medical care.",
    description: "Levi is smart",
    video_urls: ["../videos/AnimalLovers.mp4"],
    image_urls: ["../images/Levi.jpeg"],
  },
  {
    name: "Claire",
    year: 7,
    month: 0,
    weight: 40,
    deadline: "2024-05-03",
    breed: "German Shepherd Dog",
    gender: "female",
    medicalCondition: "none",
    medicalConditionNote: "",
    description: "Claire is cute",
    video_urls: ["../videos/AnimalLovers.mp4"],
    image_urls: ["../images/Claire.jpeg"],
  },
];
