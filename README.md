# FileShare
## React JS + Typescript JS + Vite JS

Ce projet est une application de partage de fichiers en ligne développée avec React JS, Vite JS, TypeScript, et Firebase pour le stockage des fichiers.

## Installation

1. Clonez le dépôt et installez les dépendances:

```bash
git clone https[://github.com/votre-utilisateur/votre-projet.git](https://github.com/KiritoEM/fileshare-firebase.git)
cd fileshare-firebase
npm install
```

2. Créer votre configuration sur firebase en créant un nouveau projet et remplacer dans .env votre configuration firebase:

```bash
apiKey: import.meta.env.VITE_API_KEY,
authDomain: import.meta.env.VITE_AUTH_DOMAIN,
projectId: import.meta.env.VITE_PROJECT_ID,
storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
appId: import.meta.env.VITE_APP_ID,
measurementId: import.meta.env.VITE_MEASUREMENT_ID,
```

3. Lancer le projet en local:

```bash
npm run vite
```
