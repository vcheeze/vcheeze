export type ExperienceItem = {
  title: string;
  subTitle: string;
  description: string;
  projects: Array<{
    title: string;
    link?: string;
    description: string;
    role?: string;
    technologies?: Array<{ type: string; details: string }>;
  }>;
};
