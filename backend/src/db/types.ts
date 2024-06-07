export type Gender = 'male' | 'female'

export type MedicalCondition = 'none' | 'exist'

export type Dog = {
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
