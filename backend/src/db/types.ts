export type Gender = "male" | "female";

export type MedicalCondition = "none" | "exist";

export type Dog = {
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

export type DogResponse = {
  dog: Dog | null;
  err: any;
};

export type RescueStatus = "in_need" | "in_contact" | "tagged";
export type AdopterFosterStatus = "in_need" | "in_contact" | "committed";

export type DogStatus = {
  dog_id: number;
  rescue_status: RescueStatus;
  adopter_foster_status: AdopterFosterStatus;
  number_of_interested: number;
}

export type DogStatusResponse = {
  dog_status: DogStatus | null;
  err: any;
};
