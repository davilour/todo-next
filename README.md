# Todo Next.js Application

A modern web application built with Next.js and AWS Amplify that includes authentication, todo management, and blog functionality.

## Project Overview

This is a Next.js project bootstrapped with create-next-app that demonstrates integration with AWS Amplify for backend services. The application includes:

- User authentication
- Todo list management
- Blog/posts functionality
- Modern UI with Tailwind CSS

## Technologies Used

- Frontend : Next.js 15, React 19, TypeScript
- Styling : Tailwind CSS, Radix UI components
- State Management : Zustand
- Form Handling : React Hook Form, Zod validation
- Backend : AWS Amplify (Authentication, API, GraphQL)
- UI Components : Custom components with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- AWS account with Amplify CLI configured

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   Open http://localhost:3000 with your browser to see the result.

## Features

### Authentication

The application includes user authentication powered by AWS Amplify Auth, allowing users to:

- Sign up
- Sign in
- Sign out
- Password recovery

### Todo List

A fully functional todo list application that allows users to:

- Create new todos
- View existing todos
- Update todo status
- Delete todos

### Blog/Posts

A blog section that demonstrates content management with AWS Amplify API.

## Project Structure
src/
├── app/                  # Next.js app router pages
│   ├── @navbar/          # Navbar component (parallel routing)
│   ├── auth/             # Authentication pages
│   ├── blog/             # Blog functionality
│   ├── todo-list/        # Todo list functionality
├── components/           # Shared UI components
├── graphql/              # GraphQL queries, mutations, subscriptions
├── lib/                  # Utility functions and configurations
│   ├── AmplifyConfig.tsx # AWS Amplify configuration
│   ├── amplify-server.tsx# Server-side Amplify setup
├── store/                # State management with Zustand
└── ui-components/        # AWS Amplify Studio generated components

## AWS Amplify Integration
This project uses AWS Amplify for backend services:

- Authentication : User management and authentication flows
- API : GraphQL API for data management
- Storage : File storage for user uploads (if applicable)
## Customization
You can start editing the page by modifying app/page.tsx . The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist , a new font family for Vercel.

## Learn More
To learn more about the technologies used in this project:

- Next.js Documentation - learn about Next.js features and API
- AWS Amplify Documentation - learn about Amplify features and API
- Tailwind CSS Documentation - learn about Tailwind CSS
- Zustand Documentation - learn about Zustand state management

