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
- **Dynamic Theming:** Seamless Light and Dark mode capabilities using CSS variables mapped to RGB channels for advanced Tailwind opacity modifiers.
- **Smooth Animations:** Integrated with `framer-motion` for scroll-triggered fades, scales, and layout transitions.
- **Contact Integration:** A fully functional contact form securely connected directly to **Firebase Firestore**.
- **Fully Responsive:** Sleek, mobile-first design perfectly adapted for all screen sizes.
- **Premium UI/UX:** Features a modern Fuchsia/Purple glowing aesthetic, glassy transparent panels, and stacked card layouts for social links.

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
