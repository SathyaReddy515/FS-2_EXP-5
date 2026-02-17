
# Component Lazy Loading Using React.lazy and Suspense

## Optimize Frontend Performance Using Lazy Loading

---

## Aim
To optimize frontend performance by implementing lazy loading of components in a Single Page Application using React.lazy and Suspense.

---
## Screenshots

### Loading State
![Loading State](../Images/Experiment%205.2.png)

### Home Page
![Home Page](../Images/Experiment%205.2.1.png)

### About Page
![About Page](../Images/Experiemnt%205.2.3.png)

### Contact Page
![Contact Page](../Images/Experiment%205.2.2.png)
## Introduction
Lazy loading is an optimization technique that improves application performance by loading components only when they are required. This experiment demonstrates how React.lazy and Suspense can be used to dynamically load components in a React application, thereby reducing the initial bundle size and improving page load time.

---

## Software Requirements
- Node.js
- React
- React Router DOM
- VS Code
- Web Browser

---

## Technologies Used
- React JS
- JavaScript (ES6)
- HTML5
- CSS3

---

## Project Structure
lazy-loading-demo/
│
├── src/
│ ├── components/
│ │ ├── Home.js
│ │ ├── About.js
│ │ └── Contact.js
│ │
│ ├── App.js
│ ├── index.js
│ └── index.css
│
├── public/
├── package.json
└── README.md


---

## Implementation
1. A React application is created using Create React App.
2. Multiple components such as Home, About, and Contact are created.
3. React Router DOM is used for navigation.
4. Components are imported dynamically using React.lazy().
5. Suspense is used to display a fallback UI while components are loading.
6. Lazy loading behavior is observed during route navigation.

---

## Output
- The application loads faster on initial render.
- Components are loaded only when their routes are accessed.
- A loading message is displayed during component loading.

---

## Result
Component lazy loading was successfully implemented using React.lazy and Suspense. The performance of the application was improved by reducing the initial load time.

---

## Conclusion
This experiment proves that lazy loading is an effective optimization technique in React applications. Using React.lazy and Suspense enhances performance and improves the overall user experience.

---