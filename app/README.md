\# CS-465 Full Stack Development — Travlr Getaways



\## Project Overview



Travlr Getaways is a full stack travel application developed using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). The application includes a customer-facing travel website and an administrative single-page application (SPA) that allows authorized users to manage travel packages.



The project demonstrates full stack development concepts, including MVC architecture, RESTful APIs, database integration, reusable Angular components, and JWT authentication.



\## Architecture



\### Frontend Development



Throughout this project, I worked with Express, HTML, JavaScript, Handlebars, and Angular to develop the customer-facing website and administrative interface.



The customer-facing website uses Express with the Model-View-Controller (MVC) architecture. Handlebars templates allow the application to display dynamic content without duplicating HTML across pages. Express handles routing and communicates with the database through controllers and models.



The administrative interface uses Angular to create a single-page application. Unlike traditional server-rendered pages, Angular updates the interface dynamically without requiring a complete page reload. Components such as the trip list, trip card, trip editor, and login form separate the application's functionality into manageable sections.



The main difference between these approaches is how content is rendered. Express generates pages on the server, while Angular manages the interface in the browser and retrieves information through API requests.



\### Why MongoDB?



MongoDB was selected because it is a NoSQL database that stores information in flexible, document-based structures. This approach works well for travel packages because each trip contains related information such as its name, destination, resort, duration, price, and description.



MongoDB integrates with Node.js and Express through Mongoose, which provides schemas, models, and database operations. Using MongoDB also allows the application to exchange data using JSON-compatible structures, making communication between the frontend and backend straightforward.



\## Functionality



\### JSON and JavaScript



JavaScript is a programming language used to implement application logic, while JSON (JavaScript Object Notation) is a lightweight format for representing and exchanging structured data.



JSON connects the frontend and backend by allowing the Express API to send trip information to Angular. When Angular requests travel packages, the server retrieves records from MongoDB and returns them as JSON. Angular then uses the returned information to display trip cards.



When an administrator updates a trip, Angular sends the modified information to the API as JSON. The backend processes the request and updates the corresponding MongoDB document.



\### Code Refactoring and Reusable Components



Refactoring played an important role in improving the application's organization and maintainability.



One example was converting the original customer-facing HTML into Handlebars templates. This reduced duplicated markup and separated presentation from application logic.



Another example was developing reusable Angular components for the administrative interface. The TripList component manages the collection of trips, TripCard displays individual packages, and TripEdit provides a form for modifying package details.



The TripData service centralizes HTTP requests, allowing multiple components to communicate with the API without duplicating networking logic.



These improvements make the application easier to maintain, troubleshoot, and expand. Reusable components also support consistent interface behavior throughout the SPA.



\## Testing



\### API Methods and Endpoints



Testing a full stack application requires verifying that the frontend, backend, and database communicate correctly.



The application uses several HTTP methods:



\- \*\*GET:\*\* Retrieves travel packages from MongoDB.

\- \*\*POST:\*\* Creates new records or submits authentication credentials.

\- \*\*PUT:\*\* Updates existing travel packages.

\- \*\*DELETE:\*\* Removes travel packages.



Each method corresponds to an API endpoint that performs a specific operation.



For example, `GET /api/trips` retrieves the available travel packages, while `PUT /api/trips/:tripCode` updates a particular package.



During development, I tested API requests using command-line tools and verified that the expected responses were returned. I also tested the Angular interface by retrieving trip records, modifying a trip price, and confirming that the updated information appeared after the application refreshed its data.



\### Security Testing



Security introduces additional testing requirements because protected endpoints must distinguish between authenticated and unauthenticated requests.



The application uses JSON Web Tokens (JWTs) for authentication. When an administrator submits valid login credentials, the backend verifies the account and generates a token.



Protected API endpoints require a valid token before allowing modifications to travel package information.



I tested the registration and login endpoints and confirmed that successful authentication returned a JWT. I also sent requests to protected endpoints without authentication and confirmed that the server returned HTTP 401 Unauthorized.



These tests demonstrated the importance of validating user identity on the server rather than relying only on the frontend login interface.



\## Reflection



Completing CS-465 helped me understand how different technologies work together to create a functional full stack application.



Before this project, I had experience working with individual programming concepts and development tools. Building Travlr Getaways gave me an opportunity to connect frontend development, backend programming, database management, and application security within one project.



One of the most valuable skills I developed was troubleshooting communication between application layers. I learned how to identify whether a problem originated in the Angular interface, Express routes, API controllers, or MongoDB database.



I also gained experience with Git and GitHub for version control, allowing me to organize development work into branches and maintain a record of changes.



These skills support my professional goal of becoming a software developer, particularly in roles involving application development, debugging, and maintaining complex software systems.



This project demonstrates my ability to build an application using established frameworks, integrate a database, develop RESTful APIs, implement authentication, and test interactions between the frontend and backend.



\## Technologies Used



\- MongoDB

\- Mongoose

\- Express.js

\- Angular

\- Node.js

\- JavaScript

\- TypeScript

\- HTML and CSS

\- Handlebars

\- JSON Web Tokens

\- Git and GitHub



\## Conclusion



Travlr Getaways represents my experience developing a full stack application from initial architecture through database integration, frontend functionality, authentication, and testing.



The project strengthened my understanding of full stack development and provided practical experience with technologies commonly used in professional software development.

