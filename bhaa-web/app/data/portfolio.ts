export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  isLive?: boolean;
}

export const projectsLive: Project[] = [
  {
    title: "QuackyQ",
    description:
      "A live appointment-management ecosystem on the App Store connecting clients with local service providers. Features real-time store discovery and category-based filtering.",
    stack: [
      "React Native",
      "Node.js",
      "REST APIs",
      "Mobile UX",
      "Springboot",
      "Java",
    ],
    link: "https://apps.apple.com/us/app/quackyq/id6757319308",
    isLive: true,
  },
  {
    title: "Digital Yoman",
    description:
      "Enterprise B2B management platform synchronizing real-time employee reporting with manager oversight to ensure operational transparency and data accuracy.",
    stack: ["React", "TypeScript", "B2B Systems", "Real-time Data"],
    link: "https://quacky-web-production.up.railway.app/digital-yoman",
    isLive: true,
  },
  {
    title: "Linkna",
    description:
      "Web for generateing dynamic QR codes for sharing contact information, social media profiles, and more. Built with Next.js, it offers customizable designs and analytics.",
    stack: ["Next.js", "TypeScript", "CSS", "Analytics"],
    link: "https://www.linkna.org/discover",
    isLive: true,
  },
];

export const projectsGitHub: Project[] = [
  {
    title: "AI & Rational Engine Suite",
    description:
      "This project is a high-performance implementation of core AI paradigms, ranging from deterministic search to competitive game theory. Developed as part of the Ben-Gurion University AI curriculum, the suite focuses on optimizing agent decision-making through multi-threaded execution and advanced heuristic modeling.",
    stack: ["Java", "Search Theory", "Heuristics", "Optimization"],
    link: "https://github.com/orgs/Ai-Course-BGU/repositories",
  },
  {
    title: "Distributed Blackjack Engine",
    description:
      "A networked multiplayer game architecture built using Python socket programming. Designed a custom communication protocol to synchronize game states across remote clients and implemented multithreaded request handling to ensure non-blocking gameplay.",
    stack: ["Python", "Socket Programming", "Network Protocols", "Concurrency"],
    link: "https://github.com/sarismo/BlackJack-Hackthon-",
    isLive: false, // Since it's a local server/client project
  },
  {
    title: "Workshop Market",
    description:
      "An advanced e-commerce engine supporting auctions and complex bidding logic. Led an 8-member team using professional GitHub workflows and PR reviews.",
    stack: ["SpringBoot", "Java", "SQL", "Team Leadership"],
    link: "https://github.com/AmeenKassem/WorkShop",
    isLive: false,
  },
  {
    title: "Rufoof Desktop",
    description:
      "A desktop application for managing and organizing personal files with a user-friendly interface and advanced search capabilities.",
    stack: [
      "Java",
      "OS processes",
      "JavaScript",
      "Desktop UX",
      "Google Extensions",
    ],
    link: "https://github.com/Rufoof-Student/Rufoof_V1",
  },
  {
    title: "Arraba Events Hub",
    description:
      "A localized event management platform engineered in 24 hours. Built to centralize community gatherings, featuring an intuitive dashboard for organizers and a mobile-optimized discovery feed for residents.",
    stack: ["React", "Tailwind CSS", "MVP Development", "Product Strategy"],
    link: "https://github.com/bhaah/arraba_hack",
    isLive: false,
  },
];

export const skills: string[] = [
  "Software Architecture",
  "Distributed Systems",
  "Full-Stack Development",
  "Algorithms & Data Structures",
  "Multithreaded Programming",
  "CI/CD & Git Workflows",
];

// Additional categorization for your "Tech Stack" section
export const techStack = {
  languages: ["Java", "Python", "C++", "C#", "TypeScript"],
  frameworks: ["React", "SpringBoot", ".NET", "Node.js"],
  tools: ["Docker", "Linux", "Postman", "MongoDB", "SQL"],
};
