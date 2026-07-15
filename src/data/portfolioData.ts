import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Shimsy Ahamed",
    role: "Data Scientist",
    tagline: "Building scalable web applications and intelligent data solutions",
    bio: "I am a dedicated Software Engineer with a BEng (Hons) in Software Engineering. My passion lies in Data Science, AI, and Machine Learning. I enjoy bridging the gap between complex data problems and clean, user-friendly software solutions. With a strong foundation in Java, Python, and modern web technologies, I build applications that are not only performant but also visually engaging.",
    email: "shimsyahamed03@gmail.com", // Placeholder
    github: "https://github.com/shimsy20240996-lang",
    linkedin: "https://www.linkedin.com/in/shimsy-ahamed-0bb128333/",
    profileImage: "./profile.png",
  },
  education: [
    {
      id: "edu-1",
      degree: "BEng (Hons) Software Engineering",
      institution: "IIT Sri Lanka", // Replace with actual
      period: "2024 - 2028",
      description: "Focused on software architecture, algorithms, and data science principles."
    },
    {
      id: "edu-2",
      degree: "G.C.E. Advanced Level (A/L)",
      institution: "Your School Name", // Please provide if you want me to update
      period: "2021 - 2023",
      description: "Studied Physical Science / Mathematics stream."
    },
    {
      id: "edu-3",
      degree: "G.C.E. Ordinary Level (O/L)",
      institution: "Your School Name", // Please provide if you want me to update
      period: "2020",
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
      title: "Airport Management System",
      description: "A comprehensive management system for airport operations including flight scheduling, passenger tracking, and baggage handling.",
      techStack: ["Java", "MySQL", "JavaFX"],
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop", // placeholder image of an airport
      githubUrl: "#",
    },
    {
      id: "proj-2",
      title: "AI Image Classifier",
      description: "A deep learning model trained to classify objects in natural images with high accuracy using PyTorch.",
      techStack: ["Python", "PyTorch", "OpenCV"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop", // placeholder image of code/AI
      githubUrl: "#",
    },
    {
      id: "proj-3",
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for an e-commerce platform with real-time sales data visualization.",
      techStack: ["React", "Tailwind CSS", "Recharts"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // placeholder image of dashboard
      liveUrl: "#",
      githubUrl: "#",
    }
  ],
  certificates: [
    {
      id: "cert-1",
      title: "Critical Thinking in the AI Era",
      issuer: "LinkedIn Learning",
      date: "2023",
      url: "./Certificates/Critical%20Thinking%20in%20the%20AI%20Era.pdf"
    },
    {
      id: "cert-2",
      title: "AI for Beginners",
      issuer: "Coursera",
      date: "2023",
      url: "./Certificates/AI%20for%20Beginners.pdf"
    },
    {
      id: "cert-3",
      title: "Data Analytics with Python",
      issuer: "DataCamp",
      date: "2024",
      url: "./Certificates/DAP320.pdf"
    },
    {
      id: "cert-4",
      title: "Data Science & Analytics",
      issuer: "IBM",
      date: "2024",
      url: "./Certificates/Data%20Science%20%26%20Analytics.pdf"
    },
    {
      id: "cert-5",
      title: "Cybersecurity ADBI E-Learning",
      issuer: "ADBI E-Learning",
      date: "2024",
      url: "./Certificates/Cybersecurity-ADBI-E-Learning.pdf"
    },
    {
      id: "cert-6",
      title: "Elements of AI",
      issuer: "MinnaLearn & University of Helsinki",
      date: "2024",
      url: "./Certificates/certificate-elements-of-ai.png"
    }
  ]
};
