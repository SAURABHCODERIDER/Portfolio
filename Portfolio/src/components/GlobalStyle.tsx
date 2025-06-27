const GlobalStyles = () => (
  <style>{`
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Inter', sans-serif;
        background-color: #111827; /* Dark background */
        color: #E5E7EB; /* Light text */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .section-title {
        @apply text-3xl md:text-4xl font-bold text-center mb-12 text-white;
    }
    .glass-effect {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .skill-badge {
        @apply bg-gray-700 text-teal-300 text-sm font-medium mr-2 mb-2 px-3 py-1.5 rounded-full;
    }
    .btn {
        @apply px-6 py-3 rounded-lg font-semibold text-white transition-transform duration-300 ease-in-out;
    }
    .btn-primary {
        @apply bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-600/20 hover:scale-105;
    }
    .btn-secondary {
        @apply bg-gray-700 hover:bg-gray-600 hover:scale-105;
    }
  `}</style>
);

export default GlobalStyles     