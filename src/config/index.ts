import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ryan Alvita - Full-stack software developer",
  author: "Ryan Alvita",
  description:
    "Developer based in the Netherlands. I specialize in full-stack software development, including databases, back-end, and front-end development.",
  lang: "en",
  siteLogo: "/ryan-alvita-small.jpg",
  navLinks: [
    { text: "Work", href: "#work" },
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "GitHub", href: "https://github.com/ryanalvita" },
    { text: "LinkedIn", href: "https://linkedin.com/in/ryanalvita" },
    { text: "Email", href: "mailto:ryanalvita@gmail.com" },
  ],
  canonicalURL: "https://ryanalvita.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ryan Alvita",
    specialty: "Full-stack software developer",
    summary:
      "Developer based in the Netherlands. I specialize in full-stack software development, including databases, back-end, and front-end.",
    email: "ryanalvita@gmail.com",
  },
  work: [
    {
      company: "Van Oord",
      position: "Full-stack software developer",
      startDate: "May 2021",
      endDate: "Present",
      summary: [
        "Part of the Datalab team within the Engineering & Estimate department at Van Oord, a leading international contractor specializing in dredging, marine engineering, and offshore projects (oil, gas, and wind) with over 150 years of experience.",
        "Developed multiple web applications used within Van Oord, primarily using Python (Pyramid framework) for the backend and JavaScript (Vue-Quasar framework) for the frontend. One of the most used application recorded ~1 million requests a week.",
        "Built and maintained Python packages to support internal workflows, leveraging tools such as Python, Azure Functions, Azure Blob Storage, and Jupyter Notebooks.",
        "Managed application integrations and deployments using Kubernetes, GitHub Actions, Docker, and Microsoft Azure.",
        "Collaborated effectively within an agile, scrum-based environment to ensure timely and efficient project delivery.",
      ],
    },
  ],
  education: [
    {
      institution: "Delft University of Technology",
      degree: "MSc Hydraulic Engineering",
      startDate: "September 2018",
      endDate: "October 2020",
      summary: [
        "Master's Thesis: A Tool for Container Terminal Design - Developing an automated tool in determining container terminal design on a concept design phase while taking into account area limitations",
        "Supervised by Prof. Mark van Koningsveld, Dr. Poonam Taneja, Dr. Bart Wiegmans",
      ],
    },
    {
      institution: "Bandung Institute of Technology",
      degree: "BSc Ocean Engineering",
      startDate: "September 2013",
      endDate: "October 2017",
      summary: [
        "Bachelor's Thesis: Container Terminal Design for Port of Patimban Container Terminal Stage 1, West Java, Indonesia",
        "Supervised by Prof. Andojo Wurjanto",
      ],
    },
  ],
  projects: [
    {
      name: "Windrose",
      summary:
        "A straightforward wind rose plot generator tool. Easily generate and download wind rose plot and table in PNG format.",
      linkPreview: "https://ryanalvita.com/windrose",
      linkSource: "https://github.com/ryanalvita/windrose",
      image: "/windrose.png",
    },
    {
      name: "Breakwater Design",
      summary:
        "Design a conceptual breakwater design using user-friendly streamlit app, powered by the open-source breakwater package.",
      linkPreview: "https://breakwater.streamlit.app/",
      linkSource: "https://github.com/ryanalvita/windrose",
      image: "/breakwater-design.png",
    },
    {
      name: "Burgernomics Salary Converter",
      summary:
        "Convert salary from one country to another using the Big Mac Index.",
        linkPreview: "https://burgernomics-salary-converter.streamlit.app/",
        linkSource: "https://github.com/ryanalvita/windrose",
        image: "/burgernomics-salary-converter.png",
      },
    {
      name: "Income Tax Calculator (NL)",
      summary:
        "Calculate your basic income tax (in the Netherlands) in the most simple yet descriptive way.",
        linkPreview: "https://income-tax-calculator-nl.streamlit.app/",
        linkSource: "https://github.com/ryanalvita/windrose",
        image: "/income-tax-calculator-nl.png",
      },
    {
      name: "Retirement Fund Strategy",
      summary:
        "Calculate required retirement fund using the 4% rule and determine the investment strategy over time.",
        linkPreview: "https://ryanalvita.com/retirement_fund_strategy/index.html",
        linkSource: "https://github.com/ryanalvita/windrose",
        image: "/retirement-fund-strategy.png",
      },
  ],
  about: {
    description: `
    Hello! I'm Ryan, a full-stack software developer based in the Netherlands. I have a strong education background in engineering and hands-on work experience in software development.
    I specialize in turning complex engineering problems into working and practical software solutions. 
    I'm passionate for democratizing engineering technology and making it accessible such that people can use it to solve their problems.
    `,
    image: "/ryan-alvita-big.jpg",
  },
};

// #C678DD
