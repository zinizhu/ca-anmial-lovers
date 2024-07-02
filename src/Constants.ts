// TODO: Types should be managed centrally.
type Gender = "male" | "female";

type MedicalCondition = "none" | "exist";

export type Dog = {
  id: number;
  name: string;
  year: number;
  month: number;
  weight: number;
  deadline: string;
  breed: string;
  gender: Gender;
  medical_condition: MedicalCondition;
  medical_condition_note: string;
  description: string;
  image_urls: string[];
  video_urls: string[];
};

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
