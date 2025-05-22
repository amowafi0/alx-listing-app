ALX Listing App
A modern, responsive Airbnb clone listing page built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates advanced React patterns, component architecture, and modern web development practices.

🎯 Project Goals
Create a fully functional property listing interface similar to Airbnb
Implement reusable, scalable React components
Demonstrate TypeScript integration for type safety
Showcase responsive design principles
Build a foundation for a complete booking platform
📁 Project Structure
alx-listing-app/
├── components/
│   ├── common/
│   │   ├── Card.tsx          # Reusable card component for property listings
│   │   └── Button.tsx        # Reusable button component with multiple variants
│   └── ...
├── interfaces/
│   └── index.ts              # TypeScript interfaces and type definitions
├── constants/
│   └── index.ts              # Application constants, API URLs, and configuration
├── public/
│   └── assets/               # Static assets (images, SVGs, icons)
│       ├── placeholder-property.jpg
│       ├── placeholder-user.jpg
│       └── logo.svg
├── pages/
│   └── ...                   # Next.js pages
└── README.md
Directory Purpose
components/common/: Houses reusable UI components that are used across multiple pages and features. These components are designed to be generic and configurable.

interfaces/: Contains all TypeScript interface definitions, ensuring type safety throughout the application. Includes interfaces for props, API responses, and data models.

constants/: Stores application-wide constants including API endpoints, UI text, configuration settings, and other static data that may be referenced throughout the app.

public/assets/: Contains static assets like images, SVGs, and other media files that are served directly by the web server.

🚀 Getting Started
Prerequisites
Node.js (version 16 or higher)
npm or yarn package manager
Installation
Clone the repository
bash
git clone <repository-url>
cd alx-listing-app
Install dependencies
bash
npm install
# or
yarn install
Set up environment variables Create a .env.local file in the root directory:
env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
Start the development server
bash
npm run dev
# or
yarn dev
Open your browser Navigate to http://localhost:3000 to view the application.
🛠️ Available Scripts
npm run dev - Starts the development server
npm run build - Creates an optimized production build
npm run start - Runs the production server
npm run lint - Runs ESLint for code quality checks
npm run type-check - Runs TypeScript compiler for type checking
🎨 Features
Responsive Design: Fully responsive layout that works on all device sizes
TypeScript Support: Full type safety with comprehensive interface definitions
Reusable Components: Modular component architecture for easy maintenance
Modern Styling: Tailwind CSS for utility-first styling approach
Performance Optimized: Built with Next.js for optimal performance and SEO
🧩 Component Architecture
Card Component
A flexible card component for displaying property information with support for:

Property images with fallback placeholders
Rating displays
Price information
Location details
Click handlers for navigation
Button Component
A versatile button component featuring:

Multiple variants (primary, secondary, outline, danger)
Different sizes (small, medium, large)
Loading states
Disabled states
Full accessibility support
🔧 Customization
The project is designed to be easily customizable:

Styling: Modify Tailwind classes or add custom CSS
Components: Extend existing components or create new ones
Types: Add new interfaces in the interfaces/ directory
Constants: Update configuration in the constants/ directory
📝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🤝 Support
For support, please contact support@alxlisting.com or create an issue in the repository.

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.

