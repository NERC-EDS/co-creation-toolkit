export interface TeamProfile {
  name: string;
  role: string;
  description: string;
  avatar: string;
}

export const teamProfiles: TeamProfile[] = [
  {
    name: "Paulius Tvaranavičius",
    role: "UX Designer / BGS",
    description:
      "UX Designer with a background in human-computer interaction and psychology. I enjoy creating digital products, running design sprint workshops, and applying human-centred research and design methods to solve challenging problems that usually involve environmental data. I'm also the maintainer of this toolkit.",
    avatar: "/co-creation-toolkit/assets/avatars/pt-profile.png",
  },
  {
    name: "Carl Watson",
    role: "Head of Analysis and Design / BGS",
    description:
      "Experienced business analyst and agile project manager. I specialise in integrating user research, UX design, and service design principles into the development of environmental data services. My focus is on requirements gathering and facilitating co-creation to ensure projects meet user needs, delivering impactful and user-centered outcomes.",
    avatar: "/co-creation-toolkit/assets/avatars/cw-profile.png",
  },
  {
    name: "Poppy Townsend",
    role: "Community Manager / CEDA",
    description:
      "Community Manager at CEDA. I bring experience in environmental science communication, impact evaluation, and data management to help connect the Co-Creation Toolkit with its users. I focus on gathering user feedback, promoting the toolkit, and fostering a community of practice around user-centered design for environmental data.",
    avatar: "/co-creation-toolkit/assets/avatars/pt-profile.jpg",
  },
  {
    name: "Shwetha Raveendran",
    role: "UX Designer / BGS",
    description:
      "UX/UI Designer at BGS, specialising in co-creating user-centered environmental data services. I bring expertise in user research, UI design, prototyping, and translating user needs into effective solutions.",
    avatar: "/co-creation-toolkit/assets/avatars/sr-profile-2.jpg",
  },
  {
    name: "David Green",
    role: "Senior Design Researcher / CEH",
    description:
      "I am a Design Researcher with a background in documentary making, digital arts, and experience-centered design. I am interested in applying this knowledge to the design of new systems and services to support environmental science.",
    avatar: "/co-creation-toolkit/assets/avatars/dg-profile.jpg",
  },
  {
    name: "Jesse Alexander",
    role: "Scientific Programming and Outreach Graduate",
    description:
      "Jesse started working at CEDA as part of the graduate scheme in July 2023. He graduted with a BSc in Cognitive Science from the University of Edinburgh. He specialises in interactions between humans and technology with a focus on user experience. At CEDA he works across different teams with developers and data scientists as well as in communications.",
    avatar: "/co-creation-toolkit/assets/avatars/jesse-alexander-2800x2800.webp",
  },
  {
    name: "Danny Lloyd",
    role: "Graduate Research Computing Service Support",
    description:
      "Danny joined the JASMIN team within CEDA in 2024 on the STFC graduate scheme, having converted from a BA in Classics at UCL and graduating with an MSc in Computer Science from the University of Birmingham. He supports users on the JASMIN helpdesk, improves documentation and training materials, and contributes development towards automating various processes. Danny reviewed the toolkit to improve its readability and usefulness.",
    avatar: "/co-creation-toolkit/assets/avatars/danny-lloyd-2800x2800.webp",
  },
];
