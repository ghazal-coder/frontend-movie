-in termenal write: npm install
-for the running the project write : npm run dev

- for login you have to used : Email: "lalehganighazal@gamil.com" and Password: "6115"



Frontend Overview:
The frontend is thoughtfully built with a strong emphasis on accessibility, SEO optimization, and a smooth user experience:
Accessibility: Semantic HTML elements like <main> and <section> are used to help screen readers interpret the layout correctly. All images include descriptive alt attributes, and interactive elements (like buttons and forms) are fully keyboard-accessible to ensure inclusivity.
SEO Best Practices: Key meta tags such as <title> and <meta name="description"> are implemented to enhance search engine visibility.
User Tracking & Preferences: Google Analytics is integrated to gather insights into user interactions and app performance. Cookies are used to store user preferences, and clear consent prompts are provided in compliance with privacy regulations.


Backend Overview:
The backend architecture focuses on security, data integrity, and scalable performance:
Authentication: Secure authentication is implemented using JWT (JSON Web Tokens), which validate each request and protect routes from unauthorized access.
Input Protection: All incoming user data is strictly validated and sanitized to prevent attacks like XSS (Cross-Site Scripting) and NoSQL injections.
Database: The application exclusively uses MongoDB as its database, avoiding any use of traditional SQL databases. This NoSQL approach offers flexibility in data structure and better scalability for the application's needs. The database is securely hosted via MongoDB Atlas, ensuring encrypted connections and role-based access control.
Data Security: Sensitive data is never stored in plain text. All important information is properly encrypted, and database queries are always parameterized to prevent injection vulnerabilities.
Monitoring & Maintenance: Analytical tools collect anonymized usage data to support performance tracking. Dependencies, including MongoDB drivers and security libraries, are regularly updated to mitigate potential vulnerabilities and maintain system health.

