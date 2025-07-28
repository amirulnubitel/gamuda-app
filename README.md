# Gamuda Berhad App

A modern Nuxt 3 application with Tailwind CSS, featuring Google OAuth authentication and a dashboard with analytics, themed for Gamuda Berhad.

## Features

-  🔐 Google OAuth Authentication (without Firebase)
-  🎨 Beautiful UI with Tailwind CSS and Gamuda branding
-  📊 Interactive dashboard with pie charts using Chart.js
-  👤 User profile management
-  🔄 State management with Pinia
-  📱 Responsive design

## Setup

### Prerequisites

-  Node.js 18+
-  npm or yarn
-  Google Cloud Console account

### Installation

1. **Clone and install dependencies:**

```bash
npm install
```

2. **Configure Google OAuth:**

   -  Go to [Google Cloud Console](https://console.cloud.google.com/)
   -  Create a new project or select an existing one
   -  Enable the Google+ API
   -  Go to Credentials > Create Credentials > OAuth 2.0 Client IDs
   -  Add your domain to authorized origins (e.g., `http://localhost:3000`)
   -  Copy the Client ID

3. **Environment setup:**

   -  Copy `.env` file and update `GOOGLE_CLIENT_ID` with your actual GOOGLE_CLIENT_ID
   -  Copy `.env` file and update `GOOGLE_CLIENT_SECRET` with your actual GOOGLE_CLIENT_SECRET
   -  Copy `.env` file and update `GOOGLE_REDIRECT_URI` with your actual GOOGLE_REDIRECT_URI

# Google OAuth Configuration

4. **Start development server:**

```bash
npm run dev
```

The application will be only port 3000 for permission cors from google auth at `http://localhost:3000`

## Project Structure

```
├── assets/css/          # Global styles
├── components/          # Vue components
├── middleware/          # Route middleware
├── pages/              # Application pages
├── stores/             # Pinia stores
├── types/              # TypeScript definitions
└── app.vue             # Root component
```

## Usage

1. **Login:** Visit the homepage and click "Continue with Google"
2. **Dashboard:** After authentication, you'll be redirected to the dashboard
3. **Navigation:** Use the three tabs:
   -  **Analytics:** View project distribution pie chart and stats
   -  **Profile:** See your Google account information
   -  **Settings:** Sign out securely

## Deployment

```bash
npm run build
npm run preview
```

## Technologies

-  **Framework:** Nuxt 3
-  **Styling:** Tailwind CSS with custom Gamuda theme
-  **Charts:** Chart.js with vue-chartjs
-  **State:** Pinia
-  **Authentication:** Google OAuth (no Firebase)
-  **Icons:** Heroicons (SVG components)

## License

Private - Gamuda Berhad
