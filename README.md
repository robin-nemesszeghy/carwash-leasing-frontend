# C-Store Car Wash Modernization Portal

A React-based landing page and conversion funnel designed for a car wash consulting firm. This application enables C-store owners to evaluate the benefits of leasing their underperforming wash bays and features an interactive before-and-after slider to demonstrate modernization ROI.

## Table of Contents

- [Architecture & Tech Stack](#architecture--tech-stack)
- [Component Breakdown](#component-breakdown)
- [Configuration: Updating Slider Images](#configuration-updating-slider-images)
- [Local Development Setup](#local-development-setup)
- [Deployment](#deployment)

## Architecture & Tech Stack

This project is built as a Single Page Application (SPA) prioritizing performance, mobile responsiveness, and maintainability.

- **Framework:** React 18 / Vite
- **Styling:** Tailwind CSS (Utility-first CSS framework)
- **Form Handling:** Formspree (Serverless form submission)
- **Icons/Assets:** Heroicons & Custom SVG assets

## Component Breakdown

The application follows a modular, top-down structure contained within `App.jsx`.

- `<Hero />`: Primary call-to-action (CTA) and value proposition.
- `<WhatWeDo />` & `<Features />`: Educational sections detailing the leasing business model.
- `<Comparison />`: **Core Feature.** An interactive, draggable image slider with state-managed thumbnail navigation to visually demonstrate structural upgrades.
- `<ContactForm />`: Integrated webhook form for lead generation.

## Configuration: Updating Slider Images

The interactive comparison slider is data-driven. Future maintainers can update the before-and-after images without modifying the core slider logic.

To update the images, locate the `washBays` array inside the `<Comparison />` component.

### Data Structure Requirements

The `washBays` array accepts an array of objects. Each object represents a distinct location and must adhere to the following schema:

| Property | Type      | Description                                            |
| :------- | :-------- | :----------------------------------------------------- |
| `id`     | `integer` | A unique identifier for the rendering key.             |
| `title`  | `string`  | The display name of the wash bay (renders as a badge). |
| `before` | `string`  | File path to the "outdated" image.                     |
| `after`  | `string`  | File path to the "modernized" image.                   |

**Example Implementation:**

```javascript
const washBays = [
  {
    id: 1,
    title: "Tunnel / Bay",
    before: "/site1-before.png",
    after: "/site1-after.jpg",
  },
];
```

> **Note:** Image assets must be stored in the root `/public` directory to be referenced via absolute paths (e.g., `/site1-before.png`). Images should ideally be cropped to a 16:9 aspect ratio prior to upload to prevent unexpected scaling.

## Local Development Setup

To run this project locally, ensure you have Node.js (v18 or higher) installed.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YourUsername/carwash-leasing-frontend.git
   cd carwash-leasing-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   _The application will be available at your local host port._

## Deployment

This application is optimized for static hosting platforms like Vercel, Netlify, or GitHub Pages.

To generate a production-ready build:

```bash
npm run build
```

This will output minified, optimized static assets into the `/dist` directory.
