import { DogInfo } from "./DogInfoCard";

export const dogsInfo: DogInfo[] = [
  {
    id: "1",
    name: "Chichi",
    images: ["../images/Chichi.jpeg", "../images/Chichi_2.jpeg"],
    age: 2,
    deadline: "05/02",
    breed: "Huskey",
    gender: "Male",
    weight: 60,
    medicalCondition: "Needs Care",
  },
  {
    id: "2",
    name: "Levi",
    images: ["../images/Levi.jpeg"],
    age: 3,
    deadline: "05/02",
    breed: "GSD",
    gender: "Male",
    weight: 50,
    medicalCondition: "Needs Care",
  },
  {
    id: "3",
    name: "Claire",
    images: ["../images/Claire.jpeg"],
    age: 7,
    deadline: "05/03",
    breed: "GSD",
    gender: "Female",
    weight: 40,
    medicalCondition: "Good",
  },
];
