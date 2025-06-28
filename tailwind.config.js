// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Light Mode Palette ---
        'light-bg-primary': '#FFFFFF',     // Pure White
        'light-bg-secondary': '#F8F8F8',   // Very light gray for cards/sections
        'light-text-primary': '#333333',   // Dark gray for main text
        'light-text-secondary': '#666666', // Medium gray for secondary text
        'light-accent': '#007BFF',         // Standard vibrant blue (e.g., Bootstrap blue)
        'light-accent-hover': '#0056B3',   // Darker blue for hover
        'light-border': '#E0E0E0',         // Light gray border

        // --- Dark Mode Palette (Pixion-like) ---
        'dark-bg-primary': '#0A0A0A',      // Very dark, almost black
        'dark-bg-secondary': '#121212',    // Slightly lighter dark for cards/sections
        'dark-text-primary': '#F0F0F0',    // Off-white for main text
        'dark-text-secondary': '#B0B0B0',  // Light gray for secondary text
        'dark-accent': '#00C8F8',          // **Vibrant Cyan/Sky Blue (Pixion's main accent)**
        'dark-accent-hover': '#00A0C8',    // Darker cyan for hover
        'dark-border': '#2A2A2A',          // Dark gray border

        // --- Gradient Colors (for consistent Pixion-like glows/gradients) ---
        'pixion-gradient-start': '#00C8F8', // Same as dark-accent
        'pixion-gradient-end': '#007BFF',   // A slightly deeper blue
      },
      boxShadow: {
        'custom-light': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'custom-dark': '0 10px 30px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};