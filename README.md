server link: https://loanlink-server-jjmp.onrender.com
live link: https://roaring-lollipop-0e295e.netlify.app


# LoanLink

LoanLink is a React-based loan management web application that allows users to browse loans, apply for loans, and manage their dashboard. The project is built with **React**, **Vite**, **Firebase**, **Tailwind CSS**, and **React Router**.

---

## 🚀 Features

- User Authentication (Firebase)
- Browse Available Loans
- Loan Application Form
- User Dashboard
- Protected Routes
- Responsive UI
- Error Handling
- Modern Component-Based Architecture

---

## 🛠️ Tech Stack

- React.js
- Vite
- Firebase Authentication
- React Router DOM
- Tailwind CSS
- PostCSS
- ESLint

---

## 📂 Project Structure

```
LoanLink/
│
├── dist/                     # Production build
├── node_modules/             # Project dependencies
├── public/                   # Static assets
│
├── src/
│   ├── assets/               # Images, icons, static files
│   │
│   ├── components/
│   │   ├── Banner/
│   │   ├── BrowseLoans/
│   │   ├── Dashboard/
│   │   ├── Footer/
│   │   ├── Form/
│   │   ├── Navbar/
│   │   └── shared/
│   │
│   ├── firebase/             # Firebase configuration
│   ├── hooks/                # Custom React hooks
│   ├── layouts/              # Layout components
│   │
│   ├── pages/
│   │   ├── Coverage/
│   │   ├── Dashboard/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── SignUp/
│   │   └── ErrorPage.jsx
│   │
│   ├── providers/            # Context Providers
│   ├── Routes/               # Route configuration
│   ├── utils/                # Utility functions
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env.local                # Environment variables
├── .firebaserc
├── firebase.json
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/loanlink.git
```

Go to the project directory

```bash
cd loanlink
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 🔥 Environment Variables

Create a `.env.local` file in the root directory and add:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
VITE_IMGBB_API_KEY=your_image_secret_key
```

---

## 📦 Build

Create a production build

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server

npm run build    # Build for production

npm run preview  # Preview production build

```

---

## 🚀 Deployment

This project can be deployed on:

- Netlify
- Vercel


---
