export interface Article {
  title: string;
  authors: string;
  year?: string;
  venue?: string;
  url?: string;
  notes?: string;
}

export interface Book {
  title: string;
  authors: string;
  year?: string;
  url?: string;
  notes?: string;
}

export interface Course {
  title: string;
  provider: string;
  instructor?: string;
  year?: string;
  status: "Passed" | "Watched";
  url?: string;
  notes?: string;
}

export const articles: Article[] = [
  {
    title: "Experiential Reinforcement Learning",
    authors: "Taiwei Shi et al.",
    year: "2026",
    venue: "arXiv",
    url: "https://arxiv.org/abs/2602.13949",
  },
  {
    title: "Can We Really Learn One Representation to Optimize All Rewards?",
    authors: "Chongyi Zheng et al.",
    year: "2026",
    venue: "arXiv",
    url: "https://arxiv.org/abs/2602.11399",
  },
  {
    title: "Hierarchical Successor Representation for Robust Transfer",
    authors: "Changmin Yu, Máté Lengyel",
    year: "2026",
    venue: "arXiv",
    url: "https://arxiv.org/abs/2602.12753",
  },
  {
    title: "S-EPOA: Overcoming the Indistinguishability of Segments with Skill-Driven Preference-Based Reinforcement Learning",
    authors: "Mu et al.",
    year: "2025",
    url: "https://arxiv.org/pdf/2408.12130",
    notes: "This paper generates distinguishable segments from learned skills in an online unsupervised algorithm (such as DIAYN).",
  },
  {
    title: "Learning from Reward-Free Offline Data: A Case for Planning with Latent Dynamics Models",
    authors: "Vlad Sobal et al.",
    year: "2025",
    venue: "NeurIPS",
    url: "https://arxiv.org/abs/2502.14819",
  },
  {
    title: "TD-JEPA: Latent-predictive Representations for Zero-Shot Reinforcement Learning",
    authors: "Marco Bagatella et al.",
    year: "2025",
    venue: "ICLR",
    url: "https://arxiv.org/abs/2510.00739",
  },
  {
    title: "Experimental evidence that illusory feelings of prediction can be caused by familiarity detection",
    authors: "Andrew M. Huebert et al.",
    year: "2025",
    venue: "Consciousness and Cognition",
    url: "https://doi.org/10.1016/j.concog.2025.103904",
  },
  {
    title: "Unsupervised Zero-Shot Reinforcement Learning via Dual-Value Forward-Backward Representation",
    authors: "Jingbo Sun et al.",
    year: "2025",
    venue: "ICLR",
    url: "https://openreview.net/forum?id=0QnKnt411O",
  },
  {
    title: "PEARL: Zero-shot Cross-task Preference Alignment and Robust Reward Learning for Robotic Manipulation",
    authors: "Runze Liu et al.",
    year: "2024",
    venue: "ICML",
    url: "https://arxiv.org/abs/2306.03615",
  },
  {
    title: "Unsupervised Zero-Shot Reinforcement Learning via Functional Reward Encodings",
    authors: "Kevin Frans et al.",
    year: "2024",
    venue: "ICML",
    url: "https://arxiv.org/abs/2402.17135",
  },
  {
    title: "Foundation Policies with Hilbert Representations",
    authors: "Seohong Park et al.",
    year: "2024",
    venue: "ICML",
    url: "https://arxiv.org/abs/2402.15567",
  },
  {
    title: "DINO-WM: World Models on Pre-trained Visual Features enable Zero-shot Planning",
    authors: "Gaoyue Zhou et al.",
    year: "2024",
    venue: "arXiv",
    url: "https://arxiv.org/abs/2411.04983",
  },
  {
    title: "Unsupervised-to-Online Reinforcement Learning",
    authors: "Junsu Kim et al.",
    year: "2024",
    venue: "arXiv",
    url: "https://arxiv.org/abs/2408.14785",
  },
  {
    title: "TD-MPC2: Scalable, Robust World Models for Continuous Control",
    authors: "Nicklas Hansen et al.",
    year: "2024",
    venue: "ICLR",
    url: "https://arxiv.org/abs/2310.16828",
  },
  {
    title: "Does Zero-Shot Reinforcement Learning Exist?",
    authors: "Ahmed Touati et al.",
    year: "2023",
    venue: "ICLR",
    url: "https://arxiv.org/abs/2209.14935",
  },
  {
    title: "URLB: Unsupervised Reinforcement Learning Benchmark",
    authors: "Michael Laskin et al.",
    year: "2021",
    venue: "NeurIPS Workshop",
    url: "https://arxiv.org/abs/2110.15191",
  },
  {
    title: "Learning One Representation to Optimize All Rewards",
    authors: "Ahmed Touati, Yann Ollivier",
    year: "2021",
    venue: "NeurIPS",
    url: "https://arxiv.org/abs/2103.07945",
  },
  {
    title: "Diversity is All You Need: Learning Skills without a Reward Function",
    authors: "Benjamin Eysenbach et al.",
    year: "2019",
    venue: "ICLR",
    url: "https://arxiv.org/abs/1802.06070",
  },
  {
    title: "Verifiable Reinforcement Learning via Policy Extraction",
    authors: "Osbert Bastani et al.",
    year: "2018",
    venue: "NeurIPS",
    url: "https://proceedings.neurips.cc/paper_files/paper/2018/hash/e6d8545daa42d5ced125a4bf747b3688-Abstract.html",
    notes: "This paper introduces a method which extract a decision tree from a policy network, then use verification algorithms for this decision tree",
  },
  {
    title: "PEBBLE: Feedback-Efficient Interactive Reinforcement Learning via Relabeling Experience and Unsupervised Pre-training",
    authors: "Kimin Lee, Laura Smith, Pieter Abbeel",
    year: "2021",
    venue: "ICML — Oral",
    url: "https://arxiv.org/abs/2106.05091",
    notes: "Preference-based RL method improving feedback efficiency through off-policy learning, experience relabeling, active preference queries, and unsupervised pre-training.",
  },
  {
    title: "RIME: Robust Preference-based Reinforcement Learning with Noisy Preferences",
    authors: "Jie Cheng, Gang Xiong, Xingyuan Dai, Qinghai Miao, Yisheng Lv, Fei-Yue Wang",
    year: "2024",
    venue: "ICML — Spotlight",
    url: "https://arxiv.org/abs/2402.17257",
    notes: "Robust PbRL method that filters noisy preference feedback using dynamic sample selection and reward-model warm starting.",
  },
  {
    title: "B-Pref: Benchmarking Preference-Based Reinforcement Learning",
    authors: "Kimin Lee, Laura Smith, Anca Dragan, Pieter Abbeel",
    year: "2021",
    venue: "NeurIPS — Datasets and Benchmarks",
    url: "https://arxiv.org/abs/2111.03026",
    notes: "Benchmark for PbRL evaluating algorithms under simulated teacher irrationalities and varying preference quality.",
  },
];

export const books: Book[] = [];

export const courses: Course[] = [
  {
    title: "Stanford CS229 Machine Learning | Spring 2026",
    provider: "Stanford University",
    year: "2026",
    status: "Watched",
    url: "https://www.youtube.com/playlist?list=PLaqpC4kq8Gpw",
  },
  {
    title: "Stanford CS224R Deep Reinforcement Learning | Spring 2025",
    provider: "Stanford University",
    year: "2025",
    status: "Watched",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL",
  },
];
