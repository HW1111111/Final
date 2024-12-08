Milestone 04 - Final Project Documentation
===

NetID
---
hw3059

Name
---
Haonan Wu

Repository Link
---
https://github.com/HW1111111/Final

URL for deployed site 
---
http://linserv1.cims.nyu.edu:12154

URL for form 1 (from previous milestone) 
---
http://linserv1.cims.nyu.edu:12154/?#/auth/signIn

Special Instructions for Form 1
---
You will not receive the error message if you fail to login.

URL for form 2 (for previous milestone)
---
http://linserv1.cims.nyu.edu:12154/?#/createPost

Special Instructions for Form 2
---
You need to login first to create posts. Or you will be redirected to the sign-in page.

URL for form 3 (from current milestone) 
---
No specific link, but you can add comments after all the articles you want. (AJAX interaction)

Special Instructions for Form 3
---
Login is also needed.

First link to github line number(s) for constructor, HOF, etc.
---
https://github.com/HW1111111/Final/blob/0f2ddba7770c295c42bea5e71bfaf5da22eb4358/final-project-frontend/src/views/HomePage.js#L20C20-L59

Second link to github line number(s) for constructor, HOF, etc.
---
https://github.com/HW1111111/Final/blob/0f2ddba7770c295c42bea5e71bfaf5da22eb4358/final-project-frontend/src/views/PostPage.js#L83-L93

Short description for links above
---
First link: The `list.map(post => ...)` part is a higher-order function used to iterate over the `list` array, which contains blog posts fetched from the server. It dynamically generates UI components for each blog post, displaying their titles, authors, creation dates, and tags on the homepage as the main interface of the blog website.

Second link: The `comments.map(comment => ...)` part is a higher-order function used to iterate over the `comments` array, which contains user-submitted comments fetched from the server. It dynamically generates UI components for each comment, displaying the comment content, author information, and creation date on the post's page.



Link to github line number(s) for schemas (db.js or models folder)
---
https://github.com/HW1111111/Final/blob/0f2ddba7770c295c42bea5e71bfaf5da22eb4358/final-project-backend/model/index.js#L1C1-L38C42

Description of research topics above with points
---
(TODO: add description of research topics here, including point values for each, one per line... for example: 2 points - applied and modified "Clean Blog" Bootstrap theme)

1. 3 points - Use built tools / task runners ([Webpack](https://webpack.js.org/))

2. 2 points - Integrate ESLint into your workflow

3. 2 points - Use a CSS framework or UI toolkit, use a reasonable of customization of the framework(tailwind css)

4. 6 points - Use a front-end framework(React)

5. 2 points - Use a **client-side** JavaScript library(rich text editor)

Links to github line number(s) for research topics described above (one link per line)
---
1. https://github.com/HW1111111/Final/blob/e76f754997d7bc2700358d31879b649ba13629cd/final-project-frontend/package.json#L22C3-L26C35

2. https://github.com/HW1111111/Final/blob/e76f754997d7bc2700358d31879b649ba13629cd/final-project-frontend/package.json#L28C1-L32C6

3. https://github.com/HW1111111/Final/blob/main/final-project-frontend/tailwind.config.js

4. https://github.com/HW1111111/Final/blob/main/final-project-frontend/src/index.js

5. https://github.com/HW1111111/Final/blob/e76f754997d7bc2700358d31879b649ba13629cd/final-project-frontend/package.json#L14

   https://github.com/HW1111111/Final/blob/e76f754997d7bc2700358d31879b649ba13629cd/final-project-frontend/src/views/PostPage.js#L79

Optional project notes 
--- 


Attributions
---
### Backend (final-project-backend)

1. **bin/www**
   - Responsible for starting the backend server. It sets up the application to listen on a specified port.
2. **model/index.js**
   - Contains the database schema and model definitions for entities used in the backend, such as `Post` or `User`.
3. **public/**
   - This directory contains static files that can be served to the client.
     - **static/css/main.c155aea8.css**: Compiled CSS styles for the frontend.
     - **static/js/**: Compiled JavaScript files for the frontend application.
     - **index.html**: Entry point for the frontend application.
     - **favicon.ico, logo192.png, logo512.png**: Assets for branding and icons.
     - **manifest.json**: Provides metadata about the application (e.g., for PWA).
     - **robots.txt**: Contains rules for web crawlers.
4. **routes/index.js**
   - Handles backend API routing, defining endpoints for the application, such as fetching posts or user profiles.
5. **app.js**
   - The main entry point for the backend server, initializing middleware (e.g., body parsers) and connecting routes.

### Frontend (final-project-frontend/src)

#### Components

1. **components/SignInForm.js**
   - Renders the sign-in form and handles authentication input and submission.
2. **components/SignUpForm.js**
   - Renders the sign-up form and handles user registration inputs and submissions.

#### Layout

1. **layout/AuthLayout.js**
   - Layout component for authentication-related pages, wrapping content like sign-in and sign-up forms.
2. **layout/PublicLayout.js**
   - Layout component for public-facing pages, like the homepage and post pages.

#### Lib

1. lib/utils.js
   - Contains utility functions that are used across the frontend application (e.g., data formatting or API helpers).

#### Views

1. **views/AuthPage.js**
   - The page component for the sign-in and sign-up forms, combining the `AuthLayout` and relevant forms.
2. **views/CreatePostPage.js**
   - The page component for creating a new blog post, including a form for title, content, and tags.
3. **views/HomePage.js**
   - Displays a grid of all blog posts fetched from the backend. Each post is clickable, navigating to its details.
4. **views/PostPage.js**
   - Displays the details of a single blog post, including comments and the form to add a new comment.
5. **views/Profile.js**
   - Displays a user profile, including user details and their published posts.

#### Global

1. **App.css**
   - Contains global styles for the frontend application.
2. **App.js**
   - The main React component that sets up routes and initializes the application.
3. **App.test.js**
   - Test file for verifying the functionality of the `App` component using a testing library.
4. **index.css**
   - CSS styles specific to the root React component or overrides for third-party libraries.
5. **index.js**
   - Entry point for the React application, rendering the root component (`App`) into the DOM.
6. **logo.svg**
   - Logo used in the application, often displayed in the header or as a favicon.
7. **output.css**
   - Compiled CSS file from a preprocessor or a tool like Tailwind.
8. **reportWebVitals.js**
   - Optional performance reporting for the React application.
9. **setupTests.js**
   - Configuration for setting up testing utilities and environment before running tests.

#### Configuration and Metadata

1. **package.json**
   - Lists project dependencies, scripts, and metadata for both backend and frontend.
2. **package-lock.json**
   - Locks the dependency tree to ensure consistent builds.
3. **README.md**
   - Contains documentation about the project, including how to run it and its purpose.
4. **tailwind.config.js**
   - Configuration for the Tailwind CSS framework, specifying theme customizations and plugin setups.