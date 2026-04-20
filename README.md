# Picksell - Modern Landing Page

A premium, interactive landing page built with React, Framer Motion, and Tailwind CSS, featuring smooth tab transitions and dynamic card animations designed for a modern experience.

## Getting Started

To get the project running locally, follow these steps:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

🔗 **[Live Demo]
(https://picksell-landing.netlify.app/)** 


---

## Project Structure

```text
src/
│
├── App.js             # Main application shell and component entry
├── index.js           # React DOM mounting
├── index.css          # Global styles & Tailwind CSS base
│
├── components/        # UI components
│   └── PicksellLanding.jsx  # Main interactive landing section
│
└── assets/            # Project icons and static assets (SVG integrated)
```        

## Design Decisions

### Interactive Motion — Framer Motion
I chose **Framer Motion** to handle all layout animations and tab transitions. This ensures a fluid, app-like feel where content shifts and cards glide along paths based on the user's selected context (Catalogue, Business, or Shopping).

### Component-Driven Architecture
The entire landing experience is encapsulated within the `PicksellLanding` component, utilizing a state-driven approach to content delivery. This allows for easy maintenance and scalability as more service tabs or features are added.

### Fluid Layout — Tailwind CSS
The project leverages **Tailwind CSS** for rapid UI development. Custom utility classes and responsive modifiers ensure the design scales beautifully from mobile devices to ultra-wide monitors.

### Visual Polish — SVG & Typography
The interface uses the **DM Sans** typeface for a professional look and high-quality, inline SVGs for icons. This ensures visual clarity at any zoom level while maintaining a lightweight bundle size.

---

## Features Implemented

- [x] **Interactive Tab System**: Seamless switching between service categories with animated underlining.
- [x] **Dynamic Card Animations**: Color-coded cards that shift and rotate based on the active tab.
- [x] **Responsive Navigation**: Adaptive header with functional "Sign in" and "Get Started" buttons.
- [x] **SVG Wave Background**: A custom-drawn vector background that adds depth to the hero section.
- [x] **Fully Responsive**: Optimized for all screen sizes with tailwind-driven breakpoints.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 18 + JavaScript |
| **Styling** | Tailwind CSS v3 |
| **Animations** | Framer Motion |
| **Typography** | DM Sans (Google Fonts) |
| **Icons** | Custom SVGs |

---
