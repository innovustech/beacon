export interface CareerInterface {
  name: string;
  description: string;
  salary: string;
  companies: string[];
  qualifications: string[];
  strengths: string[];
  weaknessness: string[];
}

interface CareerAssessmentInterface {
  name: string;
  description: string;
  link: string;
}

export interface CareerSkillResourceInterface {
  name: string;
  description: string;
  link: string;
}

interface CareerSkillInterface {
  name: string;
  description: string;
  assessment: CareerAssessmentInterface;
  resources: CareerSkillResourceInterface[];
}

export interface CareerUpskillingInterface {
  skills: CareerSkillInterface[];
}

export interface CareerDetailsInterface {
  name: string;
  description: string;
  salary: string;
  companies: string[];
  qualifications: string[];
}

