React Lazy Loading Dashboard App

A simple Single Page Application built using Vite + React that demonstrates lazy loading with React.lazy and Suspense.
This project loads the Dashboard component only when required, improving performance and user experience.

🚀 Features

Vite + React setup

React Lazy Loading (React.lazy)

Suspense fallback loader

Separate Dashboard component

Clean UI with CSS styling

Optimized component loading

Single Page Application (SPA)

📂 Project Structure
src/
├─ Component/
│  └─ Dashboard.jsx
├─ App.jsx
├─ App.css
├─ index.css
└─ main.jsx

🖼 Screenshot

Dashboard Component Display
## 🖼 Screenshot
![Dashboard Screenshot](../Images/Experiment5.1.1.png)

![Dashboard Screenshot](../Images/Experiment%205.1.png)


⚙ Installation
1. Create Vite React App
npm create vite@latest
cd your-project-name
npm install

2. Run Project
npm run dev

🧭 Lazy Loading Logic

The Dashboard component is loaded using React.lazy()

Suspense is used to display a fallback loading message

Component is rendered only when needed

Improves initial load performance

const LazyDashboard = lazy(() => import('./Component/Dashboard'))

🧠 Concepts Used

React Components

React Lazy Loading

Suspense

Component-based architecture

CSS Styling

Single Page Application (SPA)

✅ Result

The Dashboard component loads successfully using lazy loading, displaying a loading message until the component is ready—without refreshing the browser.

📌 Conclusion

This project demonstrates how to implement lazy loading in React using React.lazy and Suspense. It provides better performance, clean structure, and a scalable approach for larger applications.

React Lazy Loading Dashboard App

A simple Single Page Application built using Vite + React that demonstrates lazy loading of components using React.lazy and Suspense.
The Dashboard component is loaded only when required, improving performance and user experience.

🚀 Features

Vite + React setup

Lazy loading with React.lazy

Suspense fallback loader

Separate Dashboard component

Clean UI with CSS styling

Optimized component loading

Single Page Application (SPA)

📂 Project Structure
src/
├─ Component/
│  └─ Dashboard.jsx
├─ App.jsx
├─ App.css
├─ index.css
└─ main.jsx

🖼 Screenshot
<p align="center"> <img src="screenshots/dashboard.png" width="600" /> </p>
⚙ Installation
1. Create Vite React App
npm create vite@latest
cd your-project-name
npm install

2. Run the Project
npm run dev

🧭 Lazy Loading Logic

The Dashboard component is imported using React.lazy()

Suspense is used to show a loading message while the component loads

Improves initial load time and performance

const LazyDashboard = lazy(() => import('./Component/Dashboard'))

🧠 Concepts Used

React Components

React Lazy Loading

Suspense

Component-based architecture

CSS Styling

Single Page Application (SPA)

✅ Result

The Dashboard component loads successfully using lazy loading, displaying a loading message until the component is ready—without refreshing the browser.

📌 Conclusion

This project demonstrates how to implement lazy loading in React using React.lazy and Suspense. It provides a clean structure, better performance, and scalability for larger React applications.