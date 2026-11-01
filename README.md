# Full-Stack Development with AI Integration

A practical journey towards becoming a well-rounded full-stack software developer, with the ability to design, build, deploy and maintain modern applications powered by Artificial Intelligence.

This repository serves as a central space to document the learning process, track progress, explore technologies, build practical projects and share useful resources along the way.

The goal is not just to learn programming languages or frameworks, but to develop the engineering skills required to build reliable, scalable and useful real-world software.

## 🎯 Project Objectives

The key objectives of this initiative are to:

- Develop strong foundations in software engineering and modern web development.
- Build expertise in frontend and backend development.
- Understand databases, APIs, authentication, system architecture and application security.
- Gain hands-on experience with modern development tools, Git, GitHub, testing and deployment.
- Learn how to integrate AI capabilities into applications using LLMs, AI APIs, agents and related technologies.
- Build practical, portfolio-worthy applications that demonstrate end-to-end development capabilities.
- Follow industry best practices for writing clean, maintainable and scalable code.

## 🧭 Areas of Focus

The learning and development journey is organised around the following areas:

| Area                       | Focus                                                                     |
| -------------------------- | ------------------------------------------------------------------------- |
| Programming Fundamentals   | JavaScript, TypeScript, problem-solving and programming concepts          |
| Frontend Development       | HTML, CSS, React, Next.js and modern UI development                       |
| Backend Development        | Node.js, server-side development, API design and application architecture |
| Databases                  | SQL, PostgreSQL, MongoDB, data modelling and database management          |
| Authentication & Security  | Authentication, authorisation, secure coding and application protection   |
| Development Tools          | Git, GitHub, VS Code, package managers and developer workflows            |
| Testing & Quality          | Unit testing, integration testing, debugging and code quality             |
| Cloud & Deployment         | Hosting, CI/CD, Docker, cloud fundamentals and production deployment      |
| AI Engineering             | LLMs, prompt engineering, embeddings, vector databases, RAG and AI agents |
| AI Application Development | Integrating AI APIs and building intelligent, AI-powered applications     |
| Software Engineering       | System design, scalability, performance and maintainable architecture     |

## 🛠️ Technology Stack

The technologies explored throughout this journey will include:

- **Languages:** JavaScript, TypeScript, Python, SQL
- **Frontend:** React, Next.js, HTML, CSS, Tailwind CSS
- **Backend:** Node.js, Express.js and related backend frameworks
- **Databases:** PostgreSQL, MongoDB and Redis
- **AI & LLMs:** OpenAI APIs, LLM frameworks, embeddings, RAG and AI agents
- **Tools:** Git, GitHub, VS Code, Postman, pnpm
- **Testing:** Jest, Vitest, Playwright and related tools
- **Deployment & Infrastructure:** Docker, GitHub Actions and cloud platforms

This is an evolving technology stack. Tools and frameworks may be added, replaced or explored depending on their relevance to the projects being developed.

## 📂 Repository Structure

The repository follows a monorepo approach, allowing learning exercises, applications, reusable packages, documentation and infrastructure configurations to be organised within a single repository.

```text
full-stack-dev-with-ai-integration/
│
├── learning/
│   ├── 01-html-css/
│   ├── 02-javascript/
│   ├── 03-typescript/
│   ├── 04-react/
│   └── 05-nextjs/
│
├── apps/
│   ├── web/
│   ├── api/
│   └── ai-service/
│
├── packages/
│   ├── ui/
│   └── api-client/
│
├── docs/
│   ├── architecture/
│   └── decisions/
│
├── infra/
│   ├── docker/
│   └── deployment/
│
├── progress/
│   ├── weekly-reviews/
│   ├── daily-log.md
│   └── milestones.md
│
├── .github/
├── .vscode/
│
├── .editorconfig
├── .gitignore
├── .nvmrc
├── CONTRIBUTING.md
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── README.md
```

_Note: This represents the intended repository structure as it evolves. Not all directories and applications have been created yet._

### Directory Overview

| Directory   | Purpose                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| `learning/` | Programming exercises, experiments and technology-specific learning activities.                           |
| `apps/`     | Complete applications and independently deployable services, including frontend, backend and AI services. |
| `packages/` | Shared components, utilities, configurations and reusable code.                                           |
| `docs/`     | Technical documentation, architecture diagrams and engineering decisions.                                 |
| `infra/`    | Infrastructure, Docker and deployment configurations.                                                     |
| `progress/` | Learning milestones, daily progress and weekly reviews.                                                   |
| `.github/`  | GitHub workflows, templates and repository automation.                                                    |
| `.vscode/`  | Shared Visual Studio Code workspace settings and extension recommendations.                               |

The structure is designed to evolve gradually as the complexity of the applications and development workflows increases.

## 🚀 Getting Started

Follow these instructions to set up the repository on your local machine.

### 1. Prerequisites

Install the following tools:

| Tool               | Version / Recommendation |
| ------------------ | ------------------------ |
| Git                | Latest stable            |
| Node.js            | 24 LTS                   |
| pnpm               | 12.16.1                  |
| Visual Studio Code | Latest stable            |
| Google Chrome      | Latest stable            |

**Node.js Version Management**

[NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) is recommended for managing Node.js versions.

The repository uses an `.nvmrc` file to specify the required Node.js version.

### 2. Clone the Repository

```bash
git clone https://github.com/gitggjhub/Full-Stack-Dev-with-AI-Integration.git

cd Full-Stack-Dev-with-AI-Integration
```

### 3. Configure Node.js

Install and activate Node.js 24 using NVM:

```bash
nvm install
nvm use
```

Verify the installation:

```bash
node --version
npm --version
```

### 4. Install pnpm

Install the specified pnpm version globally:

```bash
npm install -g pnpm@12.16.1
```

Verify:

```bash
pnpm --version
```

**Important:** Use pnpm for JavaScript and TypeScript dependency management throughout this repository. Avoid mixing npm, Yarn and pnpm lockfiles.

### 5. Install Project Dependencies

From the repository root, execute:

```bash
pnpm install
```

This installs the dependencies defined in the workspace and ensures consistency using the committed `pnpm-lock.yaml` file.

### 6. Open the Project in VS Code

```bash
code .
```

Recommended extensions:

- Prettier – Code Formatter
- ESLint
- Tailwind CSS IntelliSense
- GitLens (optional)

Google Chrome is recommended for frontend development and browser debugging through Chrome DevTools.

React Developer Tools is recommended when working with React applications.

## 📦 Package Management Guidelines

This repository uses **pnpm** as its JavaScript and TypeScript package manager.

The following commands cover common dependency management operations:

| Operation                    | Command                      |
| ---------------------------- | ---------------------------- |
| Install dependencies         | `pnpm install`               |
| Add a dependency             | `pnpm add <package-name>`    |
| Add a development dependency | `pnpm add -D <package-name>` |
| Remove a dependency          | `pnpm remove <package-name>` |
| Run a project script         | `pnpm run <script-name>`     |
| Execute a package binary     | `pnpm exec <package-name>`   |

### Workspace Management

The repository uses pnpm workspaces to manage multiple applications and reusable packages within a single repository.

The `pnpm-workspace.yaml` configuration defines the workspace directories.

Applications and packages can maintain their own `package.json` files and dependencies while sharing the root workspace configuration.

## 🚀 Practical Development & Portfolio Projects

Learning will be reinforced through hands-on development rather than theory alone.

The journey will involve building applications that demonstrate:

- Modern frontend development and responsive interfaces.
- Backend services, APIs and database integration.
- Full-stack application architecture and authentication.
- Cloud deployment and production-ready development practices.
- AI-powered features, intelligent workflows and LLM integrations.

Individual projects and their source code will be maintained within this repository or in dedicated repositories where appropriate and linked here as they become available.

## 📈 Progress & Learning Documentation

Progress will be documented through:

- Weekly reviews and reflections.
- Completed milestones.
- Practical exercises and projects.
- Useful learning resources and technical references.

The intention is to maintain an honest and transparent record of both achievements and areas that need further improvement.

## 🤝 Contributions & Collaboration

This repository is open to constructive suggestions and contributions.

Whether you are an experienced developer, someone learning full-stack development, or an enthusiast exploring AI engineering, your input is welcome.

You can contribute by:

- Suggesting improvements to the learning roadmap.
- Sharing high-quality tutorials, documentation and learning resources.
- Recommending practical projects and coding challenges.
- Identifying missing concepts or important industry practices.
- Improving documentation and correcting technical inaccuracies.
- Sharing suggestions for better development workflows and tools.
- Contributing to practical examples and projects as they become available.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a contribution.

## 🌱 A Continuous Learning Journey

Software development and AI engineering are constantly evolving.

This repository will evolve with them. The focus will remain on understanding fundamentals, applying concepts through practical development, learning from mistakes and continuously improving engineering capabilities.

**Build. Experiment. Learn. Improve. Repeat.**

If you find this initiative useful, feel free to explore the repository, share feedback, suggest improvements or contribute.

Let's learn and build together!
