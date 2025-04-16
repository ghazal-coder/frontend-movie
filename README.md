# React + Vite
-clone the repo
-in termenal write:    npm install 
-for the running the project write : npm run dev

-for login you have to used : 
Email:"lalehganighazal@gmail.com" and Password:"6115"


Frontend Overview:
The frontend has been built with a strong focus on accessibility, SEO optimization, and providing a seamless user experience. Semantic HTML elements such as <main>, <header>, <nav>, and <section> have been used to structure the layout in a way that's easily understandable by screen readers and other assistive technologies.
All images include descriptive alt attributes, ensuring they convey information even if the image fails to load or for users relying on assistive devices. Interactive elements like buttons and forms are fully keyboard-accessible and follow ARIA standards to ensure compliance with modern accessibility guidelines.
To enhance SEO, essential meta tags such as <title> and <meta name="description"> have been included. These help search engines understand and index the page content effectively. Google Analytics is integrated into the project to track user behavior, engagement, and overall performance.
Cookies are used to store user preferences and settings, contributing to a more personalized experience. A consent notification is displayed to inform users about cookie usage and obtain their explicit approval before storing any information.


Backend Overview:
The backend is designed with a focus on security, data integrity, and scalability. For user authentication, the application uses JWT (JSON Web Tokens), which allow for secure validation of each request. These tokens are encrypted and verified on every request to ensure that only authorized users can access protected routes.
All user input is rigorously validated and sanitized before being processed or stored. This helps prevent common security threats such as Cross-Site Scripting (XSS) and NoSQL injection attacks, especially in interactions with the database.
Instead of using SQL, the system relies on MongoDB for data storage, providing flexibility and scalability for handling large datasets. The database is hosted on MongoDB Atlas, a secure cloud platform, which enables encrypted connections and fine-grained access control through role-based permissions.
Sensitive data is never stored in plaintext. Any critical information is properly encrypted before being saved to the database. All database queries are parameterized to prevent injection vulnerabilities.
Furthermore, anonymous analytics tools are integrated to monitor usage trends and performance metrics without collecting personally identifiable information. The system undergoes regular updates to maintain the security of MongoDB and other project dependencies, ensuring long-term stability and protection from newly discovered vulnerabilities.










Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
