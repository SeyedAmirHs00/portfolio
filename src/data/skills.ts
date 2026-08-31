export type SkillLevel =
  | "Advanced"
  | "Intermediate"
  | "Beginner";

export interface Skill {
  name: string;
  level: SkillLevel;
  /** Numeric value 0–100 for visual progress bars */
  value?: number;
  /** Years of experience */
  years?: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: "Advanced", value: 85, years: 5 },
      { name: "C++", level: "Intermediate", value: 60, years: 4 },
      { name: "Java", level: "Intermediate", value: 55, years: 3 },
      { name: "JavaScript", level: "Intermediate", value: 50, years: 2 },
      { name: "TypeScript", level: "Beginner", value: 35, years: 1 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Django", level: "Intermediate", value: 55, years: 2 },
      { name: "React", level: "Beginner", value: 30, years: 1 },
      { name: "Astro", level: "Beginner", value: 30, years: 1 },
      { name: "PyTorch", level: "Intermediate", value: 55, years: 2 },
      { name: "NumPy / Pandas", level: "Intermediate", value: 60, years: 3 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Beginner", value: 30, years: 1 },
      { name: "SQLite", level: "Intermediate", value: 50, years: 2 },
    ],
  },
  {
    title: "DevOps & Operating Systems",
    skills: [
      { name: "Linux", level: "Intermediate", value: 65, years: 4 },
      { name: "Docker", level: "Beginner", value: 30, years: 1 },
      { name: "Kubernetes", level: "Beginner", value: 20, years: 1 },
      { name: "Git / GitHub", level: "Intermediate", value: 55, years: 3 },
      { name: "Bash", level: "Beginner", value: 35, years: 2 },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Visual Studio Code", level: "Intermediate", value: 60, years: 4 },
      { name: "tmux", level: "Beginner", value: 35, years: 2 },
      { name: "Jupyter", level: "Intermediate", value: 55, years: 3 },
    ],
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "Algorithms", level: "Intermediate", value: 70, years: 5 },
      { name: "Problem Solving", level: "Intermediate", value: 75, years: 6 },
      { name: "Mathematics", level: "Intermediate", value: 70, years: 6 },
      { name: "Data Structures", level: "Intermediate", value: 70, years: 5 },
    ],
  },
  {
    title: "Reinforcement Learning",
    skills: [
      { name: "Deep RL", level: "Intermediate", value: 65, years: 2 },
      { name: "Preference-based RL", level: "Intermediate", value: 60, years: 1 },
      { name: "Zero-shot RL", level: "Intermediate", value: 55, years: 1 },
      { name: "Model-based RL", level: "Intermediate", value: 50, years: 1 },
      { name: "Offline RL", level: "Beginner", value: 35, years: 1 },
      { name: "Imitation Learning", level: "Beginner", value: 30, years: 1 },
    ],
  },
  {
    title: "RL Techniques & Topics",
    skills: [
      { name: "Representation Learning", level: "Intermediate", value: 55, years: 1 },
      { name: "World Models", level: "Intermediate", value: 50, years: 1 },
      { name: "Actor-Critic Methods", level: "Intermediate", value: 55, years: 1 },
      { name: "Policy Gradients", level: "Intermediate", value: 55, years: 1 },
      { name: "Reward Learning", level: "Intermediate", value: 55, years: 1 },
      { name: "Unsupervised Skill Discovery", level: "Beginner", value: 35, years: 1 },
      { name: "Goal-conditioned RL", level: "Beginner", value: 30, years: 1 },
      { name: "Meta-RL", level: "Beginner", value: 25, years: 1 },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Machine Learning", level: "Intermediate", value: 55, years: 2 },
      { name: "Artificial Intelligence", level: "Intermediate", value: 60, years: 2 },
      { name: "Deep Learning", level: "Intermediate", value: 50, years: 1 },
      { name: "Supervised Learning", level: "Intermediate", value: 55, years: 2 },
      { name: "Unsupervised Learning", level: "Intermediate", value: 50, years: 2 },
    ],
  },
];

export interface ResearchInterest {
  area: string;
  description: string;
}

export const researchInterests: ResearchInterest[] = [
  {
    area: "Preference-based RL",
    description:
      "Robust reward learning from noisy and conflicting preferences, multi-expert feedback, preference aggregation, and benchmarking (PEBBLE, RIME, B-Pref).",
  },
  {
    area: "Zero-shot & Representation Learning",
    description:
      "Unsupervised zero-shot RL, successor & Hilbert representations, functional reward encodings, forward-backward representations, and latent skill discovery.",
  },
  {
    area: "World Models & Model-based RL",
    description:
      "Latent predictive models (TD-MPC2, DINO-WM, TD-JEPA), planning with learned dynamics, offline-to-online transfer.",
  },
  {
    area: "Unsupervised RL & Skill Discovery",
    description:
      "Diversity-based skill discovery (DIAYN), unsupervised pretraining for RL, learning without extrinsic rewards.",
  },
];
