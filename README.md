# Todo Next.js Application

A modern web application built with **Next.js** and **AWS Amplify** that includes authentication, robust todo management, and a dynamic blog.

---

## Project Overview

This project is a Next.js application, bootstrapped with `create-next-app`, showcasing seamless integration with AWS Amplify for powerful backend services. It's designed to provide a comprehensive example of a full-stack application, featuring:

* **User Authentication**: Secure sign-up, sign-in, and password recovery.
* **Todo List Management**: Create, view, update, and delete todos.
* **Blog/Posts Functionality**: A content management system for blog posts.
* **Modern UI**: Built with **Tailwind CSS** for a sleek and responsive design.

---

## Technologies Used

This application leverages a modern tech stack to deliver a high-performance and scalable experience:

* **Frontend**: Next.js 15, React 19, TypeScript
* **Styling**: Tailwind CSS, Radix UI components
* **State Management**: Zustand
* **Form Handling**: React Hook Form, Zod for validation
* **Backend**: AWS Amplify (Authentication, API, GraphQL)
* **UI Components**: Custom-built components integrated with Tailwind CSS

---

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js**: The [latest LTS version](https://nodejs.org/en/download/) is highly recommended.
* **AWS Account**: With the [Amplify CLI](https://docs.amplify.aws/cli/start/install/) configured.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd todo-nextjs-app
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

---

## Key Features

### Authentication

Powered by **AWS Amplify Auth**, the application provides a secure and user-friendly authentication system, allowing users to:

* **Sign up** for new accounts.
* **Sign in** to access their personalized features.
* **Sign out** securely.

### Todo List

A comprehensive todo list application that empowers users to:

* **Create** new tasks with ease.
* **View** all their existing todos.
* **Update** the status of their todos (e.g., mark as complete).
* **Delete** completed or unwanted todos.

### Blog/Posts

Explore the integrated blog section, demonstrating robust content management capabilities through the **AWS Amplify API**. This feature showcases how to manage and display dynamic content within your application.

---
## AWS Amplify Integration

This project deeply integrates with **AWS Amplify** to provide a scalable and secure backend infrastructure:

* **Authentication**: Manages all aspects of user authentication, including sign-up, sign-in.
* **API**: Leverages GraphQL for efficient data management, powering both the todo list and blog functionalities.
* **Storage**: Configured for file storage, enabling features like user uploads (if applicable and extended).

---

## Customization

You can easily begin customizing the application by modifying `app/page.tsx`. Any changes you make to this file will automatically reflect in your browser, thanks to Next.js's fast refresh.

This project uses `next/font` to automatically optimize and load **Geist**, a new font family provided by Vercel, ensuring optimal performance and aesthetics.

---

## Learn More

To dive deeper into the technologies powering this application, check out the official documentation:

* [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
* [AWS Amplify Documentation](https://docs.amplify.aws/) - Explore Amplify's features and API.
* [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Master the utility-first CSS framework.
* [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction) - Understand this lightweight state management solution.