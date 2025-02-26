# Legal Client Portal

A responsive Next.js client portal for legal services companies, featuring authentication, case management, document management, and communication systems.

## Features

- **Authentication System**: Secure login and registration (with testing bypass option)
- **Dashboard**: Overview of active cases and upcoming appointments
- **Case Management**: View and track case progress and details
- **Document Management**: Upload, view, and download case-related documents
- **Messaging System**: Communicate with attorneys and legal staff
- **Calendar**: Schedule and view appointments and court dates
- **Billing & Payments**: View invoices and make payments

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/client-portal.git
   cd client-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Accessing the Site

Once the development server is running, you can access the site in the following ways:

### Regular Access

1. Open your browser and go to `http://localhost:3000`
2. You'll see the home page with a login option

### Testing Access (Bypassing Authentication)

For development and testing purposes, you can bypass the authentication:

1. From the home page (`http://localhost:3000`), click the "Skip Authentication (Testing Only)" link at the bottom
2. Alternatively, from the login page (`http://localhost:3000/auth/login`), click the "Skip Authentication (Testing Only)" link

This will take you directly to the dashboard without requiring login credentials.

### Site Navigation

Once on the dashboard, you can navigate to different sections using the sidebar:

- **Dashboard**: Overview of your cases and appointments
- **Cases**: View and manage all your legal cases
- **Documents**: Access and upload case-related documents
- **Messages**: Communicate with your legal team
- **Calendar**: View and schedule appointments
- **Billing**: View invoices and make payments

## Development Notes

- This portal is built with Next.js 14+, TypeScript, and Tailwind CSS
- Authentication is handled through NextAuth.js (currently bypassed for testing)
- The "Skip Authentication" links should be removed in production environments

## Production Deployment

Before deploying to production:

1. Remove the authentication bypass links from:
   - `src/app/page.tsx`
   - `src/app/auth/login/page.tsx`

2. Configure proper authentication with NextAuth.js
3. Set up environment variables for database connections and API keys

## License

[MIT License](LICENSE)
