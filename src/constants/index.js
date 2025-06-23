import {
  bing,
  canva,
  chatGpt,
  facebook,
  googleAds,
  googleAnalytics,
  googleTagManager,
  instagram,
  jira,
  slack,
  linkedin,
  magento,
  mailchimp,
  pinterest,
  wordpress,
  x,
  youtube,
  seo,
  smm,
  ppc,
  cro,
  analytics,
  audits,
  meta,
  shopify,
  pennywise,
  dcw,
  mantra,
  modiBuilders,
  suman,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "SEO",
    icon: seo,
  },
  {
    title: "SMM",
    icon: smm,
  },
  {
    title: "PPC",
    icon: ppc,
  },
  {
    title: "CRO",
    icon: cro,
  },
  {
    title: "Analytics",
    icon: analytics,
  },
  {
    title: "Audits",
    icon: audits,
  },
];

const technologies = [
  { name: "chatGpt", icon: chatGpt },
  { name: "facebook", icon: facebook },
  { name: "googleAds", icon: googleAds },
  { name: "googleAnalytics", icon: googleAnalytics },
  { name: "googleTagManager", icon: googleTagManager },
  { name: "instagram", icon: instagram },
  { name: "jira", icon: jira },
  { name: "slack", icon: slack },
  { name: "linkedin", icon: linkedin },
  { name: "magento", icon: magento },
  { name: "mailchimp", icon: mailchimp },
  { name: "pinterest", icon: pinterest },
  { name: "wordpress", icon: wordpress },
  { name: "x", icon: x },
  { name: "youtube", icon: youtube },
  { name: "meta", icon: meta },
  { name: "shopify", icon: shopify },
  { name: "bing", icon: bing },
  { name: "canva", icon: canva },
];

const experiences = [
  {
    title: "Digital Marketing",
    company_name: "Pennywise Solution",
    icon: pennywise,
    iconBg: "#ffffff",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Xyz",
    company_name: "DCW",
    icon: dcw,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Xyz",
    company_name: "mantra",
    icon: mantra,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Suman",
    company_name: " Suman Tv",
    icon: suman,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " modiBuilders",
    company_name: " modiBuilders",
    icon: modiBuilders,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { services, technologies, experiences };
