# Deployment Pipeline

This application is designed as a static Single Page Application (SPA) and utilizes Continuous Integration / Continuous Deployment (CI/CD) practices for streamlined updates.

## Build Process

The project is bundled and optimized using standard Vite build scripts.

- **Command:** `npm run build`
- **Output:** Generates a highly optimized `/dist` directory containing minified HTML, CSS, and JavaScript. Image assets in the `/public` directory are securely hashed and optimized for CDN delivery.

## Hosting & CI/CD Setup

This repository is optimized for deployment on modern edge networks (e.g., Vercel, Netlify, or GitHub Pages).

1.  **Git Integration:** The production hosting environment is directly linked to this GitHub repository.
2.  **Trigger:** Any push or merged pull request to the `main` branch automatically triggers a new deployment build.
3.  **Immutable Deployments:** Every push generates a unique deployment URL for previewing changes before they are aliased to the primary production domain.

## Environment Variables

Currently, the Formspree contact form handles POST requests via a direct action URL hardcoded into the component. No local `.env` variables are required to run or deploy this application. Should future backend API integrations be required, ensure all keys are stored in a `.env` file locally and securely added to the hosting provider's Environment Variables dashboard.
