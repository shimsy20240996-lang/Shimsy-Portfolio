# Shimsy Portfolio

This portfolio site is built with React, TypeScript, Vite, Tailwind CSS, and Firebase Firestore.

## Firebase setup

1. Create a Firebase project in the Firebase console.
2. Enable Firestore Database.
3. Add a web app and copy the config values.
4. Create a local environment file named `.env` with the following values:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Start the app:

```bash
npm install
npm run dev
```

## Contact form

The contact form saves submissions to the Firestore collection `messages`.

## Build

```bash
npm run build
```
