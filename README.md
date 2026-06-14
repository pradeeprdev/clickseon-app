# ClickSeon App

A modern web application built with Next.js, React, TypeScript, and Tailwind CSS. The project focuses on delivering a fast, responsive, and scalable user experience with modern development practices.

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS 4
* Framer Motion
* Lucide React Icons

### State & Forms

* React Hook Form

### API Communication

* Axios

### Development Tools

* ESLint
* Next Themes

---

## Features

* Responsive UI for desktop and mobile devices
* Dark and Light theme support
* Modern animations using Framer Motion
* Form validation with React Hook Form
* API integration using Axios
* TypeScript support for better code quality
* Optimized performance with Next.js App Router

---

## Project Structure

```bash
clickseon-app/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
├── hooks/
├── services/
├── utils/
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/pradeeprdev/clickseon-app
cd clickseon-app
```

Install dependencies:

```bash
npm install
```

---

## Running the Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

Start production server:

```bash
npm run start
```

---

## Linting

Run ESLint:

```bash
npm run lint
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=https://clickseon.vercel.app/
```

Add all required environment variables before running the application.

---

## Dependencies

| Package         | Purpose          |
| --------------- | ---------------- |
| Next.js         | React Framework  |
| React           | UI Library       |
| TypeScript      | Type Safety      |
| Tailwind CSS    | Styling          |
| Axios           | HTTP Requests    |
| Framer Motion   | Animations       |
| React Hook Form | Form Handling    |
| Lucide React    | Icons            |
| Next Themes     | Theme Management |

---

## Deployment

The application can be deployed on:

* Vercel
* Netlify
* AWS
* DigitalOcean
* Any Node.js hosting provider

### Deploy on Vercel

```bash
npm install -g vercel
vercel
```

---

## Author

**Pradeep Rawat**

* Portfolio: https://pradeepdev.com
* GitHub: https://github.com/pradeeprdev
* LinkedIn: https://linkedin.com/in/pradeeprawatdev

---

## License

This project is licensed under the MIT License.
