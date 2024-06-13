export type DogInfo = {
  id: number;
  name: string;
  images: string[];
  age: number;
  deadline: string;
  breed: string;
  gender: string;
  weight: number;
  medicalCondition: string;
  description: string;
  videos: string[];
};

export const DOGS_INFO: DogInfo[] = [
  {
    id: 1,
    name: "Chichi",
    images: ["../images/Chichi.jpeg", "../images/Chichi_2.jpeg"],
    age: 2,
    deadline: "05/02",
    breed: "Huskey",
    gender: "Male",
    weight: 60,
    medicalCondition: "Needs Care",
    description: "Chichi is adorable!",
    videos: ["../videos/AnimalLovers.mp4"]
  },
  {
    id: 2,
    name: "Levi",
    images: ["../images/Levi.jpeg"],
    age: 3,
    deadline: "05/02",
    breed: "GSD",
    gender: "Male",
    weight: 50,
    medicalCondition: "Needs Care",
    description: "Levi is smart.",
    videos: ["../videos/AnimalLovers.mp4"]
  },
  {
    id: 3,
    name: "Claire",
    images: ["../images/Claire.jpeg"],
    age: 7,
    deadline: "05/03",
    breed: "GSD",
    gender: "Female",
    weight: 40,
    medicalCondition: "Good",
    description: "Claire is cute!",
    videos: ["../videos/AnimalLovers.mp4"]
  },
];

export type VolunteersInfo = {
  id: number;
  name: string;
  phone_number: string;
};
  
export const VOLUNTEERS_INFO: VolunteersInfo[] = [
  {
      id: 1,
      name: "A",
      phone_number: "12345",
  },
  {
      id: 2,
      name: "B",
      phone_number: "98765",
  },
];

export const DOG_VOLUNTEER_MAPPING: Record<number, number> = {
  1: 1,
  2: 2,
};

export type DOGSTATUS = {
  rescue_status: string;
  adopter_foster_status: string;
  number_of_interested: number;
}

export const DOGS_STATUS: Record<number, DOGSTATUS> = {
  1: 
  { 
    rescue_status: "In Contact",
    adopter_foster_status: "In Need",
    number_of_interested: 0
  },
  2:
  {
    rescue_status: "Tagged",
    adopter_foster_status: "In Contact",
    number_of_interested: 1
  },
  3:
  {
    rescue_status: "Tagged",
    adopter_foster_status: "Commited",
    number_of_interested: 2
  }
};
