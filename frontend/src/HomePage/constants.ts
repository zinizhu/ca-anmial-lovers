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

export const DOG_DEFAULT: Dog = {
  id: 0,
  name: "unknown",
  year: 0,
  month: 0,
  weight: 0,
  deadline: "unknown",
  breed: "unknown",
  gender: "female",
  medical_condition: "exist",
  medical_condition_note: "",
  description: "",
  image_urls: [],
  video_urls: [],
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

type RescueStatus = "in_need" | "in_contact" | "tagged";
type AdopterFosterStatus = "in_need" | "in_contact" | "committed";

export type DogStatus = {
  dog_id: number;
  rescue_status: RescueStatus;
  adopter_foster_status: AdopterFosterStatus;
  number_of_interested: number;
};

export const DOG_STATUS_DEFAULT: DogStatus = {
  dog_id: 0,
  rescue_status: "in_need",
  adopter_foster_status: "in_need",
  number_of_interested: 0,
};
