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

export type DogStatus = {
  dog_id: number;
  rescue_status: string;
  adopter_foster_status: string;
  number_of_interested: number;
}

export type DogStatusResponse = {
  dog_status: DogStatus | null;
  err: any;
};
