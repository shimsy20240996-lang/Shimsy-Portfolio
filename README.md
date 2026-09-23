# 🚀 Shimsy Ahamed | Portfolio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

Welcome to the source code of my personal portfolio website! I am a **Data Scientist & AI/ML Engineer** with a passion for building scalable web applications and intelligent data solutions.

🌍 **Live Demo:** [shimsy20240996-lang.github.io/Shimsy-Portfolio](https://shimsy20240996-lang.github.io/Shimsy-Portfolio/)

---

## ✨ Features

- **Custom AI Constellation Background:** A highly optimized, custom HTML5 Canvas engine rendering a futuristic, interactive constellation. Nodes react to the mouse cursor, draw dynamic connection lines, and pulse with energy mimicking data flow.
- **Mac Terminal Animation:** A custom-built, auto-typing terminal hero section highlighting tech skills.
- **Featured Projects Showcase:** Highlighting AI applications (FAISI AI Assistant), E-Commerce platforms, Data Science & Analytics dashboards, and full-stack systems.
- **Licenses & Interactive Certificate Viewer:** Dynamic modal popup for viewing verified certificates (University of Moratuwa, HP Life, Simplilearn, MinnaLearn/University of Helsinki, etc.).
- **Dynamic Theming:** Seamless Light and Dark mode capabilities using CSS variables mapped to RGB channels for advanced Tailwind opacity modifiers.
- **Smooth Animations:** Integrated with `framer-motion` for scroll-triggered fades, scales, and layout transitions.
- **Contact Integration:** A fully functional contact form securely connected directly to **Firebase Firestore**.
- **Fully Responsive & Glassmorphic UI:** Modern Fuchsia/Purple glowing aesthetic with frosted glass panels tailored for all screen sizes.

---

## 🌟 Featured Projects

| Project | Tech Stack | Live Demo |
| :--- | :--- | :--- |
| **FAISI AI — Conversational Assistant** | React, TypeScript, Tailwind CSS, Gemini AI, RAG, Node.js | [Live Demo](https://sabu-ai.onrender.com) |
| **Interactive Developer Portfolio** | React, TypeScript, Tailwind CSS, Framer Motion, Firebase | [Live Demo](https://shimsy20240996-lang.github.io/Shimsy-Portfolio/) |
| **Butterfly Care — E-Commerce** | Next.js, React, TypeScript, Tailwind CSS, UI/UX | [Live Demo](https://butterfly-care-e-commerce-website.vercel.app/) |
| **Airport Data Analysis Dashboard** | Python, Streamlit, Pandas, Data Visualization | [Live Demo](https://airport-data-analysis-python-b6d9gp4pkn9uxjcauerxky.streamlit.app/) |
| **Smart Token Management System** | React, Node.js, Web Application, UI/UX | [Live Demo](https://token-management-system-ed5l.onrender.com/) |
| **Interactive PowerBI Dashboard** | PowerBI, Business Intelligence, Data Analytics | [Live Report](https://app.powerbi.com/groups/me/reports/c9fa07f8-7bcc-443b-a62f-3ff9fc3ed1b0/2d7495750ee077602735?experience=power-bi) |
| **Treasure Island Game** | Python | [Play Online](https://shimsy20240996-lang.github.io/Treasure-island-game/) |

---

## 📜 Licenses & Certifications

- **Front-End Web Development** — *University of Moratuwa (CODL)*
- **Web Design for Beginners** — *University of Moratuwa*
- **Python for Beginners** — *University of Moratuwa*
- **Critical Thinking in the AI Era** — *HP Life*
- **AI for Beginners** — *HP Life*
- **Data Science & Analytics** — *HP Life*
- **Data Analytics with Python** — *IASSL*
- **Elements of AI** — *MinnaLearn & University of Helsinki*
- **Machine Learning for Beginners** — *Simplilearn*
- **Data Science for Beginners** — *Cursa*
- **Cybersecurity E-Learning** — *ADBI*
- **Professional Student Member** — *Computer Society of Sri Lanka (CSSL)*

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS, PostCSS
- **Animations:** Framer Motion, HTML5 Canvas API
- **Icons:** Lucide React, React Icons
- **Backend/Database:** Firebase Firestore (Serverless)
- **Deployment:** GitHub Pages

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### 1. Prerequisites
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- `npm` or `yarn`

### 2. Installation
Clone the repo and install the dependencies:
```bash
git clone https://github.com/shimsy20240996-lang/Shimsy-Portfolio.git
cd Shimsy-Portfolio
npm install
```

### 3. Firebase Setup
The contact form requires Firebase Firestore to save messages.
1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable the **Firestore Database**.
3. Register a Web App in the project settings and copy the configuration keys.
4. Create a `.env` file in the root of the directory and add your keys:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Run the Application
Start the Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### 5. Build for Production
To generate a production-ready build:
```bash
npm run build
```
The output will be available in the `dist` folder.

---

## 📁 Project Structure

```text
├── public/                 # Static assets (images, PDFs)
├── src/
│   ├── components/         # Reusable React components (Navbar, Footer, Canvas)
│   │   └── sections/       # Main page sections (Hero, About, Projects, Contact, etc.)
│   ├── context/            # React Contexts (ThemeContext)
│   ├── data/               # Centralized portfolio data (portfolioData.ts)
│   ├── firebase.ts         # Firebase initialization and configuration
│   ├── index.css           # Global styles and dynamic CSS variables
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Entry point
├── tailwind.config.js      # Tailwind configuration and custom theme colors
└── package.json            # Project metadata and dependencies
```

---

## 📫 Contact

**Shimsy Ahamed**  
📧 Email: [shimsyahamed03@gmail.com](mailto:shimsyahamed03@gmail.com)  
🔗 LinkedIn: [linkedin.com/in/shimsy-ahamed-0bb128333](https://www.linkedin.com/in/shimsy-ahamed-0bb128333/)  
💬 WhatsApp: [Chat directly](https://wa.me/0776404824)

If you like this project, please give it a ⭐ on GitHub!
