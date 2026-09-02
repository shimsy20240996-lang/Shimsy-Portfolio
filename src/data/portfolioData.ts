import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Shimsy Ahamed",
    role: "Data Scientist & AI/ML Engineer",
    tagline: "Building scalable web applications and intelligent data solutions",
    bio: "I am a dedicated Data Scientist & AI/ML Engineer with a BSc (Hons) Computer Science. My passion lies in Data Science, Artificial Intelligence, and Machine Learning. I enjoy bridging the gap between complex data problems and clean, user-friendly software solutions. With a strong foundation in Java, Python, and modern web technologies, I build intelligent systems that are performant and visually engaging.",
    email: "shimsyahamed03@gmail.com", // Placeholder
    github: "https://github.com/shimsy20240996-lang",
    linkedin: "https://www.linkedin.com/in/shimsy-ahamed-0bb128333/",
    profileImage: "./profile.png",
  },
  education: [
    {
      id: "edu-1",
      degree: "BSc (Hons) Computer Science",
      institution: "IIT Sri Lanka", // Replace with actual
      period: "2024 - 2028",
      description: "Focused on software architecture, algorithms, and data science principles."
    },
    {
      id: "edu-2",
      degree: "G.C.E. Advanced Level (A/L)",
      institution: "KM/KM/Shams C.C (National School)",
      period: "2022",
      description: "Completed Advanced Level examinations in the Physical Science stream."
    },
    {
      id: "edu-3",
      degree: "G.C.E. Ordinary Level (O/L)",
      institution: "KM/KM/Al-Hambra Vidyalaya",
      period: "2019",
      description: "Successfully completed Ordinary Level examinations."
    }
  ],
  skills: [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 80 },
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 60 },
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Pandas & NumPy", level: 75 },
        { name: "Scikit-Learn", level: 70 },
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Interactive Developer Portfolio",
      description: "A modern, highly responsive personal portfolio website featuring dynamic HTML5 Canvas particle constellations, terminal typing animations, sleek glassmorphism UI, and serverless Firebase integration.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Firebase"],
      imageUrl: "./portfolio_preview.jpg",
      githubUrl: "https://github.com/shimsy20240996-lang/Shimsy-Portfolio.git",
      liveUrl: "https://shimsy20240996-lang.github.io/Shimsy-Portfolio/",
    },
    {
      id: "proj-2",
      title: "Airport Management System",
      description: "A comprehensive management system for airport operations including flight scheduling, passenger tracking, and baggage handling.",
      techStack: ["Python", "Data Analysis"],
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop", // placeholder image of an airport
      githubUrl: "https://github.com/shimsy20240996-lang/airport-data-analysis-python.git",
    },
    {
      id: "proj-3",
      title: "Treasure Island",
      description: "An interactive text-based adventure game where the player makes choices to navigate challenges and find the hidden treasure.",
      techStack: ["Python"],
      imageUrl: "./treasure_island.png",
      githubUrl: "https://github.com/shimsy20240996-lang/Treasure-island-game.git",
      liveUrl: "https://shimsy20240996-lang.github.io/Treasure-island-game/",
    },
    {
      id: "proj-4",
      title: "Interactive PowerBI Dashboard",
      description: "A comprehensive PowerBI dashboard providing deep data visualization and business intelligence insights.",
      techStack: ["PowerBI", "Data Analysis", "Data Visualization"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // placeholder image of a data dashboard
      liveUrl: "https://app.powerbi.com/groups/me/reports/c9fa07f8-7bcc-443b-a62f-3ff9fc3ed1b0/2d7495750ee077602735?experience=power-bi",
    },
    {
      id: "proj-5",
      title: "Smart Token Management System",
      description: "A comprehensive and efficient token management system designed to handle queues and service flows, providing a seamless user experience.",
      techStack: ["Web Application", "Management System", "UI/UX"],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", // placeholder image for management system
      liveUrl: "https://token-management-system-ed5l.onrender.com/",
    }
  ],
  certificates: [
    {
      id: "cert-1",
      title: "Critical Thinking in the AI Era",
      issuer: "HP Life",
      date: "2026",
      url: "./Certificates/Critical%20Thinking%20in%20the%20AI%20Era.pdf"
    },
    {
      id: "cert-2",
      title: "AI for Beginners",
      issuer: "HP Life",
      date: "2026",
      url: "./Certificates/AI%20for%20Beginners.pdf"
    },
    {
      id: "cert-3",
      title: "Data Analytics with Python",
      issuer: "IASSL",
      date: "2026",
      url: "./Certificates/DAP320.pdf"
    },
    {
      id: "cert-4",
      title: "Data Science & Analytics",
      issuer: "HP Life",
      date: "2026",
      url: "./Certificates/Data%20Science%20%26%20Analytics.pdf"
    },
    {
      id: "cert-5",
      title: "Cybersecurity ADBI E-Learning",
      issuer: "ADBInstitute",
      date: "2026",
      url: "./Certificates/Cybersecurity-ADBI-E-Learning.pdf"
    },
    {
      id: "cert-6",
      title: "Elements of AI",
      issuer: "MinnaLearn & University of Helsinki",
      date: "2026",
      url: "./Certificates/certificate-elements-of-ai.png"
    },
    {
      id: "cert-7",
      title: "Machine Learning for Beginners",
      issuer: "Simplilearn",
      date: "2026",
      url: "./Certificates/Machine_Learning_for_Beginners_Simplilearn.pdf"
    },
    {
      id: "cert-8",
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      date: "2026",
      url: "./Certificates/Python_for_Beginners_Moratuwa.pdf"
    },
    {
      id: "cert-9",
      title: "Data Science for Beginners",
      issuer: "Cursa",
      date: "2026",
      url: "./Certificates/Data_Science_for_Beginners_Cursa.jpg"
    }
  ]
};
