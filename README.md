# My First React App

This project is a React application built with Vite. It includes React Router and a simple multi-page layout with Home, About, and Contact pages.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- Node.js (v18 or later recommended)
- npm (comes with Node.js)

## Setup Instructions

1. Open your terminal in the project folder.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal, usually:

   ```text
   http://localhost:5173
   ```

5. To stop the server, press:

   ```text
   Ctrl + C
   ```

## Useful Scripts

### Run the app in development mode

```bash
npm run dev
```

### Build the app for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Project Structure

```text
my-first-react-app-main/
├── public/
├── src/
│   ├── Components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── package-lock.json
```

## Notes

- The app uses React 19 and Vite.
- Routing is handled with `react-router-dom`.
- The development server supports hot reloading automatically.

## Troubleshooting

If dependencies are not installed correctly, run:

```bash
rm -rf node_modules package-lock.json
npm install
```

If the app does not start, confirm that Node.js is installed and the project folder is the current working directory.

```bash
node -v
npm -v
```

If you need help, check the Vite documentation or the project package scripts.
