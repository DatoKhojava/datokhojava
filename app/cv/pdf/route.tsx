// import fs from "fs";
// import path from "path";
// import { NextResponse } from "next/server";
// import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";

// // Styles for PDF
// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 11,
//     lineHeight: 1.5,
//     color: "#000",
//   },
//   section: {
//     marginBottom: 15,
//   },
//   heading1: {
//     fontSize: 22,
//     marginBottom: 10,
//     fontWeight: "bold",
//   },
//   heading2: {
//     fontSize: 16,
//     marginBottom: 6,
//     fontWeight: "bold",
//     marginTop: 12,
//   },
//   heading3: {
//     fontSize: 13,
//     marginBottom: 4,
//     fontWeight: "bold",
//   },
//   list: {
//     marginLeft: 12,
//     marginBottom: 4,
//   },
//   listItem: {
//     marginBottom: 2,
//   },
//   link: {
//     color: "blue",
//     textDecoration: "underline",
//   },
// });

// const yearsOfExperience = new Date().getFullYear() - 2016;

// // Load sections.json
// function loadSections() {
//   const filePath = path.join(process.cwd(), "content/cv/sections.json");
//   const raw = fs.readFileSync(filePath, "utf8");
//   return JSON.parse(raw);
// }

// // PDF Layout Component
// function CVPDF({ sections }: any) {
//   return (
//     <Document>
//       <Page style={styles.page}>
//         {/* Header */}
//         <View style={styles.section}>
//           <Text style={styles.heading1}>Dato Khojava</Text>
//           <Text>Full-Stack Engineer | React-Native Engineer</Text>
//         </View>

//         {/* Cover Letter */}
//         <View style={styles.section}>
//           <Text style={styles.heading2}>Cover Letter</Text>
//           <Text>
//             I am a passionate Full-Stack Engineer with {yearsOfExperience}+ years of experience
//             delivering scalable web, backend, and mobile applications. My expertise spans TypeScript, React, Next.js, Node.js,
//             and cloud-native architectures using AWS, Docker, and CI/CD workflows. I am also skilled in mobile development
//             with React Native and Expo, and I bring a strong interest in exploring new technologies, including Java, Go,
//             and embedded systems such as Arduino and Raspberry Pi.
//           </Text>
//           <Text>
//             Throughout my career, I have led full-stack projects from concept to deployment, collaborated closely with
//             cross-functional teams, and delivered solutions that enhance user experience and operational efficiency.
//           </Text>
//           <Text>
//             I thrive in environments that challenge me to learn and grow, and I am excited about the opportunity to
//             contribute my skills to your team.
//           </Text>
//           <Text>Sincerely,</Text>
//           <Text>Dato Khojava</Text>
//         </View>

//         {/* Professional Summary */}
//         <View style={styles.section}>
//           <Text style={styles.heading2}>Professional Summary</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>• Full-stack engineer with {yearsOfExperience}+ years of experience delivering web, backend, and mobile applications.</Text>
//             <Text style={styles.listItem}>• Strong expertise in TypeScript, React, Next.js, and Node.js.</Text>
//             <Text style={styles.listItem}>• Actively exploring AWS, Docker, CI/CD, and cloud-native architectures.</Text>
//             <Text style={styles.listItem}>• Keen on mobile development using React Native and Expo.</Text>
//             <Text style={styles.listItem}>• Motivated to learn new languages such as Java and Go.</Text>
//             <Text style={styles.listItem}>• Passionate about electronics and robotics (Arduino, Raspberry Pi).</Text>
//             <Text style={styles.listItem}>• Adaptable, fast learner, committed to modern technologies and continuous growth.</Text>
//           </View>
//         </View>

//         {/* Experience */}
//         <View style={styles.section}>
//           <Text style={styles.heading2}>Experience</Text>

//           {/* Andersen Lab */}
//           <Text style={styles.heading3}>Software Engineer - Andersen Lab (Jan. 2025 - Present)</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>• Backend-focused development, later expanded to full-stack and React Native.</Text>
//             <Text style={styles.listItem}>• Contributed to multiple projects simultaneously.</Text>
//             <Text style={styles.listItem}>• Collaborated with cross-functional teams to refine requirements and implement features.</Text>
//           </View>

//           {/* Foodly */}
//           <Text style={styles.heading3}>Frontend Engineer — Foodly (Mar. 2024 – Jul. 2024)</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>• Developed responsive frontend interfaces based on UI/UX designs.</Text>
//             <Text style={styles.listItem}>• Integrated API data and collaborated with backend developers.</Text>
//             <Text style={styles.listItem}>• Optimized frontend performance and usability.</Text>
//           </View>

//           {/* Batumi Hospital */}
//           <Text style={styles.heading3}>Full-Stack Engineer — Batumi Republican Clinical Hospital (Jan. 2021 – Mar. 2024)</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>• Led end-to-end development, including UI/UX, content management, frontend, backend, and deployment.</Text>
//             <Text style={styles.listItem}>• Oversaw database process management and content integrity.</Text>
//           </View>

//           {/* Adjara Museum */}
//           <Text style={styles.heading3}>Full-stack Engineer — LEPL "Adjara Museum" (Jan. 2021 – Dec. 2021)</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>• Developed QR-based digital platform for museum exhibits.</Text>
//             <Text style={styles.listItem}>• Built admin interfaces and integrated frontend/backend workflows.</Text>
//           </View>

//           {/* Arduino Coach */}
//           <Text style={styles.heading3}>Arduino Team Coach (Jan. 2020 – Jun. 2020)</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>• Led a small team assembling robotic systems and explaining electronics concepts.</Text>
//             <Text style={styles.listItem}>• Developed Arduino prototypes combining multiple sensors and modules.</Text>
//           </View>
//         </View>

//         {/* Education */}
//         <View style={styles.section}>
//           <Text style={styles.heading2}>Education</Text>

//           <Text style={styles.heading3}>Bachelor’s Degree in Exact Sciences and Education — Batumi Shota Rustaveli State University (Sep 2016 – Jun 2022)</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>• Focus: Computer Science and Education</Text>
//             <Text style={styles.listItem}>• Key Coursework: Scripting, Algorithms, Mathematics, System Architecture, Data Structures, Software Development Principles</Text>
//           </View>

//           <Text style={styles.heading3}>Mobile App Development (React Native) — Georgia Innovation and Technology Agency (Apr 2022 – Jun 2022)</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>• Cross-platform mobile development with React Native and Expo.</Text>
//             <Text style={styles.listItem}>• Coursework: JavaScript/TypeScript, CLI tools, Mobile UI/UX, State Management, API Integration</Text>
//           </View>

//           <Text style={styles.heading3}>3rd Level Vocational Qualification — Computer Network and System Technician (Dec 2017 – Jun 2018)</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>• Focus: Networking and Systems Administration</Text>
//             <Text style={styles.listItem}>• Coursework: Operating Systems, Networks, System Configuration, Troubleshooting</Text>
//           </View>
//         </View>

//         {/* Skills */}
//         <View style={styles.section}>
//           <Text style={styles.heading2}>Skills</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>Languages: JavaScript, TypeScript, SQL</Text>
//             <Text style={styles.listItem}>Frontend: React, Next.js, Bootstrap, TailwindCSS</Text>
//             <Text style={styles.listItem}>Backend: Node.js, Nest.js, Express.js, GraphQL, PostgreSQL, MongoDB, WebSockets</Text>
//             <Text style={styles.listItem}>Cloud/Infra: AWS, Docker, CI/CD, Nginx</Text>
//             <Text style={styles.listItem}>Testing: Vitest, Jest, Playwright, Cypress</Text>
//             <Text style={styles.listItem}>Tools: Git, GitHub Actions, Figma, Linear, VS Code, Adobe Photoshop</Text>
//           </View>
//         </View>

//         {/* Contact */}
//         <View style={styles.section}>
//           <Text style={styles.heading2}>Contact</Text>
//           <View style={styles.list}>
//             <Text style={styles.listItem}>GitHub: <Text style={styles.link}>https://github.com/DatoKhojava</Text></Text>
//             <Text style={styles.listItem}>LinkedIn: <Text style={styles.link}>https://www.linkedin.com/in/khojava/</Text></Text>
//             <Text style={styles.listItem}>Website: <Text style={styles.link}>https://datokhojava.vercel.app/</Text></Text>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );
// }

// // Next.js Route
// export async function GET() {
//   const sections = loadSections();

//   const blob = await pdf(<CVPDF sections={sections} />).toBuffer();

//   return new NextResponse(blob, {
//     headers: {
//       "Content-Type": "application/pdf",
//       "Content-Disposition": 'attachment; filename="CV.pdf"'
//     }
//   });
// }

import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { Document, Page, Text, View, StyleSheet, Link, pdf } from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    lineHeight: 1.5,
    color: "#000",
  },
  section: {
    marginBottom: 16,
  },
  heading1: {
    fontSize: 22,
    marginBottom: 8,
    fontWeight: "bold",
  },
  heading2: {
    fontSize: 16,
    marginBottom: 6,
    marginTop: 10,
    fontWeight: "bold",
  },
  heading3: {
    fontSize: 13,
    marginBottom: 4,
    fontWeight: "bold",
  },
  list: {
    marginLeft: 12,
  },
  listItem: {
    marginBottom: 3,
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
  smallText: {
    fontSize: 9,
    marginTop: 2,
  },
});

// PDF COMPONENT
function CVPDF() {
  return (
    <Document>
      {/* -------------------- PAGE 1 — HEADER + EXPERIENCE -------------------- */}
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading1}>Dato Khojava</Text>
          <Text>Full-Stack Engineer | React Native Developer</Text>
          <Text>Location: Batumi, Georgia</Text>
          <Text>Email: khojavad30@gmail.com</Text>
        </View>

        {/* EXPERIENCE */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Experience</Text>

          {/* ANDERSEN LAB */}
          <Text style={styles.heading3}>Software Engineer — Andersen Lab</Text>
          <Text style={styles.smallText}>Jan. 2024 - Present | Batumi, Georgia</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Evolved from backend-focused engineer to full-stack contributor, building scalable server-side logic and modern client interfaces across multiple concurrent projects.</Text>
            <Text style={styles.listItem}>• Developed and maintained RESTful APIs using Node.js and Express, serving production applications with 99.9% uptime.</Text>
            <Text style={styles.listItem}>• Implemented React Native mobile features for cross-platform applications, ensuring consistent UX on iOS and Android.</Text>
            <Text style={styles.listItem}>• Collaborated with cross-functional teams of 10-20 members (designers, QA, product managers) using Agile methodologies to deliver features on 2-week sprint cycles.</Text>
            <Text style={styles.listItem}>• Integrated CI/CD pipelines with GitHub Actions, reducing deployment time by 60% and minimizing human error.</Text>
            <Text style={styles.listItem}>• Contributed to code reviews, technical documentation, and knowledge-sharing sessions to maintain code quality standards.</Text>
          </View>
          <Text style={styles.smallText}>Technologies: TypeScript, Node.js, React, React Native, PostgreSQL, Docker, AWS, Git, Jest</Text>

          {/* FOODLY */}
          <Text style={styles.heading3}>Frontend Engineer — Foodly</Text>
          <Text style={styles.smallText}>Mar. 2024 – Jul. 2024 | Remote</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Developed responsive, mobile-first interfaces using Blade and Bootstrap, translating Figma designs into pixel-perfect implementations.</Text>
            <Text style={styles.listItem}>• Integrated RESTful APIs and WebSocket connections to display real-time order updates and delivery tracking for 1,000+ daily users.</Text>
            <Text style={styles.listItem}>• Collaborated with backend team to optimize data structures, reducing API response payload size by 35% and improving page load times.</Text>
          </View>
          <Text style={styles.smallText}>Technologies: PHP, Blade/Laravel, Bootstrap, Vanilla Javascript, REST APIs, WebSockets, Figma</Text>
        </View>
      </Page>

      {/* -------------------- PAGE 2 — EXPERIENCE CONTINUED -------------------- */}
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading2}>Experience (continued)</Text>

          {/* HOSPITAL */}
          <Text style={styles.heading3}>Full-Stack Engineer — Batumi Republican Clinical Hospital</Text>
          <Text style={styles.smallText}>Jan. 2021 – Mar. 2024 | Batumi, Georgia</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Led end-to-end development of the hospital's official web platform, serving as sole developer for design, development, deployment, and maintenance.</Text>
            <Text style={styles.listItem}>• Designed complete UI/UX from scratch, prioritizing accessibility for elderly patients and medical staff with varying technical literacy levels.</Text>
            <Text style={styles.listItem}>• Built full-stack application using React, Node.js, Express, and PostgreSQL, implementing secure authentication and role-based access control.</Text>
            <Text style={styles.listItem}>• Managed content pipeline for 500+ pages, including medical services, doctor profiles, appointment systems, and health resources in Georgian, English and Russian.</Text>
            <Text style={styles.listItem}>• Optimized database queries and indexing strategies, reducing average page load time from 3.5s to under 1s.</Text>
            <Text style={styles.listItem}>• Impact: Reduced phone call inquiries by 40% through self-service appointment booking; processed 10,000+ monthly visits.</Text>
          </View>
          <Text style={styles.smallText}>Technologies: React, Node.js, Express, PostgreSQL, AWS EC2, Nginx, Docker, Git</Text>

          {/* MUSEUM */}
          <Text style={styles.heading3}>Full-Stack Engineer — LEPL "Adjara Museum"</Text>
          <Text style={styles.smallText}>Jul. 2020 – Dec. 2021 | Batumi, Georgia</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Designed and developed QR-based digital guide platform, enabling visitors to access detailed exhibit information via smartphone scanning.</Text>
            <Text style={styles.listItem}>• Built bilingual content management system (Georgian/English), allowing museum staff to create, edit, and publish exhibit profiles without technical knowledge.</Text>
            <Text style={styles.listItem}>• Developed admin dashboard with media management for 100+ museum exhibits.</Text>
            <Text style={styles.listItem}>• Implemented RESTful API architecture connecting frontend and database.</Text>
            <Text style={styles.listItem}>• Collaborated with museum curators and administrators to gather requirements and iterate on UX improvements based on visitor feedback.</Text>
          </View>
          <Text style={styles.smallText}>Technologies: HTML/CSS, PHP, MySQL, QR Code APIs</Text>

          {/* ARDUINO */}
          <Text style={styles.heading3}>Arduino Team Coach</Text>
          <Text style={styles.smallText}>Jan. 2020 – Jun. 2020 | Batumi, Georgia</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Mentored team of 5 students in robotics fundamentals, teaching electronics basics, circuit design, and Arduino programming (C/C++).</Text>
            <Text style={styles.listItem}>• Guided students through building functional prototypes including line-following robots, obstacle-avoiding cars, and sensor-based systems.</Text>
            <Text style={styles.listItem}>• Researched and evaluated ultrasonic sensors, IR sensors, servo motors, and LCD displays, creating reusable code libraries.</Text>
            <Text style={styles.listItem}>• Developed Arduino projects integrating multiple sensors and actuators, debugging hardware-software integration issues.</Text>
            <Text style={styles.listItem}>• Fostered problem-solving mindset by encouraging experimentation and iterative design.</Text>
          </View>
          <Text style={styles.smallText}>Technologies: Arduino (C/C++), Electronics, Sensors, Prototyping</Text>
        </View>
      </Page>

      {/* -------------------- PAGE 3 — EDUCATION + SKILLS -------------------- */}
      <Page style={styles.page}>
        {/* EDUCATION */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Education</Text>

          <Text style={styles.heading3}>Bachelor's Degree in Exact Sciences and Education</Text>
          <Text style={styles.smallText}>Batumi Shota Rustaveli State University | Sep 2016 – Jun 2022</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Focus: Computer Science and Education</Text>
            <Text style={styles.listItem}>• Key Coursework: Data Structures & Algorithms, System Architecture, Database Design, Software Development Principles, Object-Oriented Programming, Web Technologies</Text>
            <Text style={styles.listItem}>• Developed strong foundation in computational thinking, algorithm optimization, and software engineering best practices</Text>
          </View>

          <Text style={styles.heading3}>Mobile App Development (React Native)</Text>
          <Text style={styles.smallText}>Georgia Innovation and Technology Agency | Apr 2022 – Jun 2022</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Focus: Cross-Platform Mobile Development</Text>
            <Text style={styles.listItem}>• Key Topics: React Native, Expo, TypeScript, Mobile UI/UX Design Patterns, State Management (Context API, Redux), REST API Integration, Navigation, Push Notifications</Text>
          </View>

          <Text style={styles.heading3}>Computer Network and System Technician (Level 3 Vocational Qualification)</Text>
          <Text style={styles.smallText}>Batumi Shota Rustaveli State University | Dec 2017 – Jun 2018</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Focus: IT Infrastructure and Systems Administration</Text>
            <Text style={styles.listItem}>• Key Topics: Operating Systems (Windows Server, Linux), TCP/IP Networking, LAN/WAN Configuration, System Troubleshooting, Network Security, Server Maintenance</Text>
            <Text style={styles.listItem}>• Gained hands-on experience configuring routers, switches, firewalls, and enterprise network infrastructure</Text>
          </View>
        </View>

        {/* SKILLS */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Skills</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>Languages: PHP, JavaScript, TypeScript, SQL, C/C++ (Arduino), HTML/CSS</Text>
            <Text style={styles.listItem}>Frontend: Blade, React, Next.js, React Native, Expo, Bootstrap, TailwindCSS, Redux, Context API</Text>
            <Text style={styles.listItem}>Backend: Laravel, Node.js, Nest.js, Express.js, GraphQL, RESTful APIs, WebSockets</Text>
            <Text style={styles.listItem}>Databases: PostgreSQL, MongoDB, Mongoose, SQL Query Optimization</Text>
            <Text style={styles.listItem}>Cloud & DevOps: AWS (EC2, S3, Lambda), Docker, CI/CD, GitHub Actions, Nginx</Text>
            <Text style={styles.listItem}>Testing: Vitest, Jest, Playwright, React Testing Library</Text>
            <Text style={styles.listItem}>Tools & Platforms: Git, GitHub, GitLab, Figma, Linear, Jira, VS Code, Postman, Adobe Photoshop</Text>
            <Text style={styles.listItem}>Methodologies: Agile/Scrum, RESTful Design, Microservices Architecture, Test-Driven Development (TDD)</Text>
          </View>
        </View>
      </Page>

      {/* -------------------- PAGE 4 — PROJECTS -------------------- */}
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading2}>Notable Projects</Text>

          {/* BITEFOLIO */}
          <Text style={styles.heading3}>Bitefolio (2024 – Present)</Text>
          <Text style={styles.smallText}>Tech Stack: TypeScript, React Native, Expo, TanStack, React Native Reusables, Nest.js, PostgreSQL, Docker</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Developing a cross-platform mobile application (iOS & Android) that enables users to create their own digital cookbooks by converting physical recipes into modern, structured digital formats.</Text>
            <Text style={styles.listItem}>• Implemented user profile systems with the ability to follow other creators, explore their recipes, and engage with a growing culinary community.</Text>
            <Text style={styles.listItem}>• Integrated AI-powered assistance to help users refine recipes, generate ingredients, convert measurements, and receive personalized cooking recommendations.</Text>
            <Text style={styles.listItem}>• Added functionality for users to mark recipes as favorites and follow step-by-step guided instructions optimized for mobile cooking experiences.</Text>
            <Text style={styles.listItem}>• Designed a tiered user model allowing creators to switch to a professional profile, enabling visibility to potential employers and opportunities to get hired for culinary work.</Text>
            <Text style={styles.listItem}>• Built a scalable backend using Nest.js and PostgreSQL, with Dockerized services for efficient development and deployment workflows.</Text>
            <Text style={styles.listItem}>• Focused on clean UI/UX, reusable components, offline-friendly patterns, and high-performance mobile interactions.</Text>
            <Text style={styles.listItem}>• Contributing to the startup's core architecture, product direction, and continuous iteration based on user testing and early beta feedback.</Text>
          </View>
          <Link style={styles.link}>https://bitefolio.app/</Link>

          {/* DISH-MASTER */}
          <Text style={styles.heading3}>Dish-Master — Open Source REST API (2024 - present)</Text>
          <Text style={styles.smallText}>Tech Stack: Next.js, Nextra, TypeScript, Node.js, Express, TailwindCSS, ES2022, Docker, PostgreSQL</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Built an open-source REST API that provides access to recipes, cooking tips, ingredient lists, and step-by-step preparation instructions.</Text>
            <Text style={styles.listItem}>• Designed a clean and well-structured API with Nextra-powered documentation for easy onboarding and version management.</Text>
            <Text style={styles.listItem}>• Implemented PostgreSQL data models for recipes, ingredients, metadata, and categorization, ensuring efficient querying and relational integrity.</Text>
            <Text style={styles.listItem}>• Containerized the application using Docker to support streamlined development, consistent environments, and scalable deployment.</Text>
            <Text style={styles.listItem}>• Applied clean architecture principles: modular service layers, request validation, controller separation, and robust error handling.</Text>
            <Text style={styles.listItem}>• Offers endpoints for searching, filtering, and retrieving structured cooking instructions suitable for integration into third-party apps or websites.</Text>
            <Text style={styles.listItem}>• Status: Project is under construction and currently operating in a testing version.</Text>
          </View>
          <Link style={styles.link}>https://dish-master-documentation.vercel.app/</Link>
        </View>
      </Page>

      {/* -------------------- PAGE 5 — MORE PROJECTS -------------------- */}
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading2}>Notable Projects (continued)</Text>

          {/* HOSPITAL SYSTEM */}
          <Text style={styles.heading3}>Hospital Management System (2021-2024)</Text>
          <Text style={styles.smallText}>Tech Stack: TypeScript, React, Node.js, Express, GraphQL, TailwindCSS</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Comprehensive web platform serving 100+ daily users with patient information, and medical resource management.</Text>
            <Text style={styles.listItem}>• Implemented secure authentication with JWT, role-based access control (RBAC), and encrypted data storage.</Text>
          </View>

          {/* MUSEUM */}
          <Text style={styles.heading3}>QR-Based Museum Digital Guide (2020-2021)</Text>
          <Text style={styles.smallText}>Tech Stack: HTML/CSS, PHP, MySQL, QR Code API, Apache Server</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Bilingual platform enabling 10,000+ annual museum visitors to access exhibit information via QR scanning.</Text>
            <Text style={styles.listItem}>• Admin dashboard with content management system supporting media uploads, rich text editing, and translation workflows.</Text>
            <Text style={styles.listItem}>• Impact: 50% increase in visitor engagement, eliminated printing costs for exhibit descriptions.</Text>
          </View>

          {/* BATUMI ROUTES */}
          <Text style={styles.heading3}>Batumi Routes (2020)</Text>
          <Text style={styles.smallText}>Tech Stack: React Native, Expo, Native Maps, REST APIs</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Developed a real-time bus tracking application that displays live bus locations, routes, and nearby stations on an interactive map.</Text>
            <Text style={styles.listItem}>• Designed a clean, intuitive mobile UI optimized for both iOS and Android using cross-platform React Native components.</Text>
            <Text style={styles.listItem}>• Integrated native map functionalities such as markers, dynamic route rendering, and station overlays.</Text>
            <Text style={styles.listItem}>• Built as a Bachelor's degree project, demonstrating a practical real-world solution for improving public transportation accessibility in Batumi.</Text>
            <Text style={styles.listItem}>• Improved understanding of mobile performance optimization, geospatial data processing, and user-centric design.</Text>
          </View>
          <Link style={styles.link}>https://github.com/DatoKhojava/batumi-route</Link>
        </View>

        {/* Publications */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Publications</Text>
          <Text style={styles.listItem}>• "Implementation and Comparative Analysis of Symmetric Encryption Model Based on Substitution Cipher Techniques"</Text>
          <Text style={styles.smallText}>IEEE International Conference | Oct 26, 2021</Text>
          <Link style={styles.link}>https://ieeexplore.ieee.org/document/9580978</Link>
        </View>
      </Page>

      {/* -------------------- PAGE 6 — CERTIFICATIONS + LANGUAGES + CONTACT -------------------- */}
      <Page style={styles.page}>
        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Licenses & Certifications</Text>
          <Text style={styles.heading3}>Programming & Development:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Go Programming Course — Codecademy (2024)</Text>
            <Text style={styles.listItem}>• React Native Development — Codecademy (2023)</Text>
          </View>
          <Text style={styles.heading3}>Cybersecurity:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Cyber Security Camp — American Corner Batumi (2019)</Text>
            <Text style={styles.listItem}>• Cyber Cube 2019 — GRENA (2019)</Text>
            <Text style={styles.listItem}>• Cyber Cube 2017 — GRENA (2017)</Text>
          </View>
          <Text style={styles.heading3}>Academic:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Student Research Conference — Batumi Shota Rustaveli State University (2019)</Text>
          </View>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Languages</Text>
          <Text>• Georgian: Native</Text>
          <Text>• English: Professional Working Proficiency</Text>
          <Text>• Russian: Professional Working Proficiency</Text>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.heading2}>Contact</Text>
          <Link style={styles.link}>GitHub: https://github.com/DatoKhojava</Link>
          <Link style={styles.link}>LinkedIn: https://www.linkedin.com/in/khojava/</Link>
          <Link style={styles.link}>Website: https://datokhojava.vercel.app/</Link>
        </View>
      </Page>
    </Document>
  );
}

// API ROUTE
export async function GET() {
  const blob = await pdf(<CVPDF />).toBuffer();

  return new NextResponse(blob, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Dato Khojava - Curriculum vitae.pdf"',
    },
  });
}