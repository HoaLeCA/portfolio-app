import React from 'react';
import Title from '../layouts/Title';
import {
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic9,
  pic8,
  pic6,
  pic7,
  mern,
} from '../../assets/index';
import ProjectsCard from './ProjectsCard';
import { Link } from 'react-router-dom';
import CodeSnip3 from './CodeSnip3';
import CodeSnip4 from './CodeSnip4';
import CodeSnip5 from './CodeSnip5';
import CodeSnip6 from './CodeSnip6';
import CodeSnip7 from './CodeSnip7';
import CodeSnip8 from './CodeSnip8';
import CodeSnip9 from './CodeSnip9';
import CodeSnip10 from './CodeSnip10';
import CodeSnip11 from './CodeSnip11';
import CodeSnip12 from './CodeSnip12';
import CodeSnip13 from './CodeSnip13';
import CodeSnipLine from './CodeSnipLine';

const ProjectsPart2 = () => {
  return (
    <section
      id='projects'
      className='w-full py-5 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
        <Title title='HAPPY TO RECEIVE YOUR FEEDBACK' des='My Blogs' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 gap-6 xl:gap-14 mx-9'>
        <h1 className='text-center text-2xl font-bold'>
          Building Full Web Application Using MERN Stack
        </h1>
        <h1 className='text-center text-lg font-bold'>
          Part 2: Build Simple Note Taking Web Application Using MERN Stack
        </h1>
        <p className='leading-10 text-lg italic text-center'>
          Written by:{' '}
          <Link
            className=' hover:text-red-500'
            to='https://github.com/HoaLeCA'
            target={'_blank'}
          >
            Hoa Le
          </Link>
        </p>
        <p className='leading-10 text-lg'>
          In the previous blog, I have provided a lot of theory information
          about MERN Stack technology, and how to divide each part on MERN. I
          think it is hard to image and connect each element without put the
          theory into practical. In this second part, I'll be walking you
          through my experience of building a full-stack web application using
          MongoDB, Express, React, and Node.js. The project is a simple Note
          Taking web application where people can create new users, authenticate
          user, and add the note. This simple project will showcase how to
          integrate these technologies to create a seamless user experience. In
          the rest of this post, we'll cover how to create backend, frontend and
          deploy this project to Heroku. So, let's dive in the project and start
          building the application from scratch!
        </p>
        <h2 className='text-left mt-5 text-xl font-bold'>A. Backend</h2>
        <ProjectsCard
          des=' What is MERN? (image copied from internet source)'
          src={mern}
        />

        <p className='leading-10 text-lg mb-0'>
          Backend plays a crucial role in the MERN stack by managing the
          application's data, providing APIs for the frontend to consume, and
          ensuring the application's security, reliability, and performance. As
          I explained in the fist blog, in MERN Stack, we are using Node.js as
          your server-side platform, Express.js as your web application
          framework, and MongoDB as your database. I assumed that we all have
          installed Node.js in the machine and created MongoDB Atlas’s account
          (a cloud MongoDB). Should you miss this part, please check my first
          blog (link) for more information about it. There are many codes editor
          that you can prefer, but I am using Visual Studio Code on this demon.
        </p>

        <div className='ml-8'>
          <p className='leading-10 text-lg'>
            <span className='font-bold'> - Step 1</span>: Create folder name
            Note_Taking in anywhere in your machine, in this folder we will
            create two separate folders named frontend and backend.
          </p>
          <p className='leading-10 text-lg mb-5'>
            <span className='font-bold'>- Step 2</span>: - On the command line
            on VS Code type: <span className='underline'>cd backend</span> to go
            to backend folder, when we were on this folder, we will install all
            the libraries that we need to build this application.
          </p>
          <CodeSnipLine code='npm install bcrypt colors dotenv express express-async-handler jsonwebtoken mongoose concurrently nodemon' />
        </div>
        <p className='leading-10 text-lg mt-5'>
          <span className='font-bold'>
            To organize folder structure in the backend, I suggest we will
            follow the structure that I mentioned on the first blog:
          </span>
        </p>
        <ProjectsCard des=' Backend folder structure recommended' src={pic8} />

        <div className='ml-8'>
          <p className='leading-10 text-lg'>
            <span className='font-bold'> &#8594; </span>Config folder: store the
            configuration connect to MongoDB.
          </p>
          <p className='leading-10 text-lg'>
            <span className='font-bold'> &#8594; </span> Controller folder:
            store all the controllers that provides a central location for
            handling the business logic and ensuring that requests and responses
            are processed correctly.
          </p>
          <p className='leading-10 text-lg'>
            <span className='font-bold'> &#8594; </span>Middleware folder: store
            all the middleware that function or a set of functions that execute
            between the client request and the server response such as Error
            Handling, Authentication, etc.
          </p>
          <p className='leading-10 text-lg'>
            <span className='font-bold'> &#8594; </span> Model folder: store all
            models of the application, it is quite similar with model we knew in
            Java Servlet and JSP on last semester.
          </p>
          <p className='leading-10 text-lg '>
            <span className='font-bold'> &#8594; </span> Routers: store all
            routes in the application, route is essentially a middleware
            function that listens for specific HTTP requests and routes them to
            the appropriate controller function that handles that request.
          </p>
          <p className='leading-10 text-lg '>
            <span className='font-bold'> &#8594; </span>server.js: all
            configuration in the server side
          </p>
        </div>

        <p className='leading-10 text-lg '>
          (*) Please note that I have pushed all codes into my GitHub account{' '}
          <Link
            className='underline underline-offset-4 hover:bg-violet-600'
            to='https://github.com/HoaLeCA/Note-Taking'
            target={'_blank'}
          >
            code link
          </Link>
          , feel free to fork or clone to test this application. You can also
          check the link that I deployed the application in Heroku ( ). That’s
          cool, right? If you read to here, I hope you get some idea on
          structuring folder in MERN. The next step we will go details how to
          set up and create small application named Note-taking. Let's work on
          each component.
        </p>
        <div className='ml-8'>
          <p className='leading-10 text-lg'>
            <span className='font-bold'>
              {' '}
              &#x2713; 1. Setup MongoDB cloud account:{' '}
            </span>
            Go to:{' '}
            <Link
              className='underline underline-offset-4 hover:bg-violet-600'
              to='https://account.mongodb.com/account/login'
              target={'_blank'}
            >
              https://account.mongodb.com/account/login
            </Link>{' '}
            and set up your account. It is straight forward on how to set up.
            Once you have an account, you can use MongoDB Compass to check your
            data. Should you have problem when you connect with MongoDB Compass,
            you can check their documentation for more information.
          </p>
          <p className='leading-10 text-lg mb-3'>
            <span className='font-bold'>
              {' '}
              &#x2713; 2. Config folder - connects an application to MongoDB.:{' '}
            </span>
            When you login into your account in MongoDB Atlas, you will see the
            Database tab (1) after completing all the steps. The you click on
            Connect (2) to get the link use to connect to your server - check
            the steps below (make sure you create file server.js in the root
            folder of the application to config all information that need to
            connect the application to Server and Database, check my folder
            structure if you missed it).
          </p>
          <ProjectsCard des=' 1- Steps to connect with MongoDB' src={pic9} />
          <ProjectsCard des=' 2- Steps to connect with MongoDB' src={pic10} />
          <ProjectsCard des=' 3- Steps to connect with MongoDB' src={pic11} />
          <p className='leading-10 text-lg mt-3'>
            &#x26A0; You will need the password to fill on the &lt;password&gt;
            on the link above. It is easily to generate when you check security
            tab and Database Access when you login into MongoDB Atlas account.
            Once you got all information needed, you can save it on .env file
            (.env file is environment variable where you will store all
            sensitive information to keep your data safety when you push your
            code to internet like GitHub).
          </p>
          <p className='leading-10 text-lg'>
            Once you had the link to that need to use to connect with MongoDB.
            We can work on the code at Config folder to connect application with
            database.&#x26A0; process.env.MONGO_URL is how we connect with your
            .env file, please make sure you set up .env file and have MONGO_URL
            in it.
          </p>
          <p className='leading-10 text-lg mb-3'>
            <span className='font-bold'> &#x2713; 3. server.js: </span>
            this file will configure all server information in the application.
            Please make sure you install all models and npm package to avoid
            errors. To run and test a backend server, we can change a script
            from package.json in the Backend. Once you completed it, you can run
            the command <span className='underline'>npm run start</span> in the
            VS Code Terminal to start backend server. Should you have errors
            when start running command, you can check error information and fix
            it.
          </p>
          <CodeSnip3 des='Setup Server.js' />
          <CodeSnip4 des='Modify Script On Package.json in Backend' />
          <p className='leading-10 text-lg mt-3'>
            <span className='font-bold'> &#x2713; 4. Model Folder: </span> the
            models on this application is quite simple with two models which are
            user model and note model where user model will link with note model
            in the database.
          </p>
          <p className='leading-10 text-lg mb-3 '>
            - User Model: this model will store all user information into
            MongoDB. Below is a sample code for User model, you can try to
            create the same with Note Model.
          </p>
          <CodeSnip5 des='User Model' />
          <p className='leading-10 text-lg mt-3'>
            <span className='font-bold'> &#x2713; 5. Middleware:</span> as I
            said on the explanation, middleware provides easy way to developer
            to keep the code organized and maintainable by separating concerns
            and promoting reusability. In this application, I used two common
            middelwares:
          </p>
          <p className='leading-10 text-lg mb-3 '>
            - authMiddleware: use to authenticate user when user login.
          </p>
          <CodeSnip6 des='authMiddelware Simple Code' />
          <p className='leading-10 text-lg mb-3 '>
            - errorMiddleware: use to catch and handle any unhandled exceptions
            that may occur in subsequent middleware or route handlers.
          </p>
          <CodeSnip7 des='errorMiddelware Simple Code' />
          <p className='leading-10 text-lg mt-3'>
            <span className='font-bold'>
              {' '}
              &#x2713; 6. Controller and Routes:{' '}
            </span>{' '}
            In this application, we only need two controllers, userController.js
            handles all CRUD of users and noteController.js handles all CRUD of
            notes.
          </p>
          <p className='leading-10 text-lg mb-3 '>
            &rarr; userController.js is where we can create new user, delete
            user, edit user information, retrieve user information and user
            login. There are many other models related to how make the
            application more secure, in this simple application, I only use
            Jsonwebtoken and hash function to encrypt password.
          </p>
          <p className='leading-10 text-lg mb-3 ml-8'>
            + registerUser: the program will get input from user which including
            name, email, and password to create new user. The password will be
            hashing and encrypting before save those into MongoDB. The
            registerUser also have some basic login such as verify user exist in
            the database, if user already stored in database, it will send
            message to user.
          </p>
          <p className='leading-10 text-lg mb-3 ml-8'>
            + loginUser: the program will get information about email and
            password from user, then it will check a data stored in MongoDB to
            verify email and password are correctly. The error message will send
            to user when fail to verify email and password.
          </p>

          <p className='leading-10 text-lg '>
            <span className='text-2xl'>&#9888;</span> Please reference to my
            code in GitHub for simple code at{' '}
            <Link
              className='underline underline-offset-4 hover:bg-violet-600'
              to='https://github.com/HoaLeCA/Note-Taking/tree/main/backend/controller'
              target={'_blank'}
            >
              userController link
            </Link>
          </p>
          <p className='leading-10 text-lg mb-3 ml-8'>
            + Set up route for userController: routes are used to define the
            endpoints that clients can access on the server-side. In the route
            folder, create authRoute.js on routers folder and add the code
            below.
          </p>
          <CodeSnip8 des='authRoute.js sample' />
          <p className='leading-10 text-lg mb-3 ml-8 mt-3'>
            After we setup router for userController at userRoute.js in routers
            folder, we will connect the routes to server.js by adding the code
            above to server.js. At this point, we can use Postman to test the
            function of userController. Once you pass all the tests, it is a
            time we can move to the next step to create noteController.js
          </p>
          <p className='leading-10 text-lg mb-3 '>
            &rarr; noteController.js same idea with userController.js,
            noteController.js will handle all CRUD of the note, user can create
            new note, update, delete, and retrieve note from database.
          </p>
          <p className='leading-10 text-lg mb-3 '>
            <span className='text-2xl'>&#9888;</span> Please check my code in
            GitHub for simple code of noteController.js at{' '}
            <Link
              className='underline underline-offset-4 hover:bg-violet-600'
              to='https://github.com/HoaLeCA/Note-Taking/tree/main/backend/controller'
              target={'_blank'}
            >
              link.{'  '}
            </Link>
            Once finished all functions we need in noteController.js, we will
            move to set up routes for it. Go to routers folder and create new
            file named noteRoutes.js. On sever.js add the code to connect
            noteRoute.js to server
          </p>
          <CodeSnip10 des='noteRoute.js sample code' />
          <p className='leading-10 text-lg mb-3 ml-8 mt-3'>
            The we can use Postman to test the function of noteController. Once
            we pass all the tests, it is a time we complete a simple backend.
            &#128079; &#128079; &#128079; &#128079; WELL DONE!
          </p>
        </div>
        <h2 className='text-left mt-5 text-xl font-bold'>B. Frontend</h2>
        <p className='leading-10 text-lg mb-0'>
          Frontend provides an interactive and user-friendly interface for the
          web application. The frontend is responsible for displaying data and
          content to the user and allowing them to interact with the application
          through various user interface components such as forms, buttons, and
          menus. The instructions below provide step to initialize React in the
          frontend on the application.
        </p>
        <div className='ml-8'>
          <p className='leading-10 text-lg'>
            <span className='font-bold'> &#8594; </span>Open your terminal or
            command prompt and navigate to the frontend directory cd frontend.
          </p>
          <p className='leading-10 text-lg'>
            <span className='font-bold'> &#8594; </span>Run the following
            command to initialize a new React project. Please Note the dot at
            the end of the command. This tells create-react-app to use the
            current directory (frontend) as the project directory, instead of
            creating a new subdirectory.
            <CodeSnipLine
              des='Initialize React on frontend'
              code='npx create-react-app .'
            />
          </p>
          <p className='leading-10 text-lg'>
            <span className='font-bold'> &#8594; </span>Wait for the
            installation process to complete. Once it's done, you can start the
            development server by running: npm start.
          </p>
          <p className='leading-10 text-lg mb-3'>
            <span className='font-bold'> &#8594; </span> We also need install
            some npm package required to build on this application. We may need
            a few more, but we will find out it when we needed. Once we run a
            command to install all the frameworks and npm package, we can start
            building the frontend of the application. For more information about
            the purpose and how to use those packages and frameworks, you can
            check at{' '}
            <Link
              className='underline underline-offset-4 hover:bg-violet-600'
              to='https://www.npmjs.com/'
              target={'_blank'}
            >
              https://www.npmjs.com/.
            </Link>
          </p>
          <CodeSnipLine
            des='Install frameworks and npm packages'
            code='npm i axios  redux  react-router-dom  react-toastify yup formik'
          />
          <p className='leading-10 text-lg py-3'>
            <span className='font-bold'> &#8594; </span> Recap frontend
            structure.
          </p>

          <ProjectsCard
            des=' Recommended folder structure on frontend'
            src={pic7}
          />
          <p className='leading-10 text-lg mt-5 ml-8'>
            + app folder will store the store.js file that create and configure
            the Redux store, which is a JavaScript object that holds the
            application state. In this application, I am using Redux to manage
            states in React, Redux help us to provides a reliable and scalable
            solution for managing state in a web application, making it easier
            to maintain, debug, and scale the application over time.
          </p>
          <p className='leading-10 text-lg mt-3 ml-8'>
            + components folder: store all components in this application, as
            you are all familiar with component in React. It can be used to
            build complex UIs by composing them together. They can also be
            reused across different parts of the application, making it easier
            to maintain and scale the codebase.
          </p>
          <p className='leading-10 text-lg mt-3 ml-8'>
            + pages folder: store all pages in this application, a page
            component is to display specific content and functionality related
            to that view. In this application, we will have some simple pages
            such as a login page, a home page, a register page.
          </p>
          <p className='leading-10 text-lg mt-3 ml-8'>
            + index.css in the customize CSS for this application, I also using
            Bootstrap 5 on top of the customize CSS, you can also use
            Tailwind.css.
          </p>
          <p className='leading-10 text-lg mt-3 ml-8'>
            + If you did some research about React, you may know that there are
            some downsides of using form in React. Therefore, there are many
            frameworks from Open Source came on handy to handle its. In this
            application, I am using Formik and Yup for form and form validation.
            Should you want to go deeper on this topic, you can check at{' '}
            <Link
              className='underline underline-offset-4 hover:bg-violet-600'
              to='https://formik.org/docs/guides/validation'
              target={'_blank'}
            >
              link.
            </Link>
          </p>
          <p className='leading-10 text-lg py-3'>
            <span className='font-bold'> &#x2713; 1. Build component: </span> as
            I explained earlier, a component is a reusable piece of code that
            can be used to create a specific part of a UI. There are 6
            components are using in this application, a header and footer are
            used as header and footer of the application. Layout is where we
            organize the layout of the application, CustomInput is used as input
            to get information from use, the Noteform and NoteIteam have the
            same function with CustomInput. There are many ways you can make for
            the components, it depends on how you want to organize your
            application. Component make the code more efficiency and
            well-organized. Please check my GitHub{' '}
            <Link
              className='underline underline-offset-4 hover:bg-violet-600'
              to='https://github.com/HoaLeCA/Note-Taking/tree/main/frontend/src/components'
              target={'_blank'}
            >
              link {'  '}
            </Link>
            to see the codes for components folder.
          </p>
          <ProjectsCard des=' component folders' src={pic12} />
          <p className='leading-10 text-lg py-3'>
            <span className='font-bold'> &#x2713; 2. Pages folder: </span> To
            simplicity, there only three pages on this application. The login
            page provide login function to user login into their account and
            take note. The register page will place a new user can create a new
            account to login into the application. The dashboard page is place
            display all the notes from users, user can do CRUD for the note they
            created. In the limitation of this application, I only create delete
            note function, another functions I will push into GitHub link for
            your reference.
          </p>
          <p className='leading-10 text-lg mb-3 '>
            &rarr; register.js and login.js: using Formik and Yup make form
            validation is easier than normal form in React. As you can see
            below, when user does not input all the fields required, the program
            will prompt the error to inform user. Please check my GitHub link to
            see the code on this part{' '}
            <Link
              className='underline underline-offset-4 hover:bg-violet-600'
              to='https://github.com/HoaLeCA/Note-Taking/tree/main/frontend/src/pages'
              target={'_blank'}
            >
              link.
            </Link>
          </p>
          <ProjectsCard
            des=' login validation using formik and yup'
            src={pic13}
          />
          <p className='leading-10 text-lg py-3 '>
            &rarr; dashboard.js is where displays all the notes that user
            created. To get all the notes from each user, the program will
            retrieve all the notes store in MongoDB, only the notes belong to
            logged in user can be displayed.
          </p>
          <CodeSnip9 des='Dashboard.jsx code sample' />
          <p className='leading-10 text-lg py-3'>
            <span className='font-bold'>
              {' '}
              &#x2713; 3. state management – redux:{' '}
            </span>{' '}
            to use Redux in the application, we will create folder name features
            where we have two main folders, auth folder and notes folder in it.
            In the auth folder, we will create two JavaScript files,
            authService.js and authSlice.js. An authService.js is a module or
            function that encapsulates a set of related operations that interact
            with an external API or data source. Therefore, we will have all the
            endpoint that connect with the backend using axios. Please note that
            Axios is a popular JavaScript library that is used for making HTTP
            requests from a web browser or Node.js to a server. In React, Axios
            is often used for making asynchronous HTTP requests to a server and
            fetching data from APIs. Please check a snipe code below use to
            register new user or check this{' '}
            <Link
              className='underline underline-offset-4 hover:bg-violet-600'
              to='https://github.com/HoaLeCA/Note-Taking/tree/main/frontend/src/features/auth'
              target={'_blank'}
            >
              link
            </Link>{' '}
            to get all the code for authService.js.
          </p>
          <CodeSnip11 des='Create new user in authService.js' />
          <p className='leading-10 text-lg py-3'>
            The authSlice.js on another hand typically includes code for
            defining actions and reducers related to authentication. Actions are
            objects that describe a change in state, while reducers are
            functions that handle those actions and update the state
            accordingly.
          </p>
          <CodeSnip12 des='Create new user on authSlice.js sample code' />
          <p className='leading-10 text-lg py-3'>
            store.js is a file that contains the Redux store for a React
            application. The store is the central location for managing the
            state of a Redux application, and it holds the current state tree of
            the application.
          </p>
          <CodeSnip13 des='store.js sample code' />
          <p className='leading-10 text-lg mt-3'>
            <span className='text-2xl'>&#9888;</span> The noteService.js and
            noteSlice.js also have the same approach with authService.js and
            authSlice.js. You can try it by yourself and check your code with my
            code at{' '}
            <Link
              className='underline underline-offset-4 hover:bg-violet-600'
              to='https://github.com/HoaLeCA/Note-Taking/tree/main/frontend/src/features/notes'
              target={'_blank'}
            >
              link
            </Link>{' '}
          </p>
          <p className='leading-10 text-lg mt-3'>
            <span className='text-2xl'>&#9888;</span> Once you finished all the
            code for auth and notes folder, you can use Redux DevTools to check
            the auth and notes in the browser.
          </p>
          <ProjectsCard
            des=' Using Redux DevTools to debug and manage states'
            src={pic14}
          />

          <p className='leading-10 text-lg mb-3 ml-8 mt-3'>
            If you go to this step, we completed the simple MERN stack web
            application &#128079; &#128079; &#128079; &#128079; WELL DONE!. The
            next step we will test all the function of the application to
            eliminate the bugs.
          </p>
        </div>
        <h2 className='text-left  text-xl font-bold'>C. Testing and Deploy</h2>
        <p className='leading-10 text-lg mb-3'>
          <span className='font-bold'> &#x2713; 1. Testing: </span> before we
          deploy the application into the internet, we should test all the
          functions of the application. In MERN stack, there are many frameworks
          support for testing the application such as Jest, Enzyme, Mocha, Chai,
          and Sinon. However, in this application, I only use simple one which
          is end-to-end testing tests the entire application from the user's
          perspective, simulating real user interactions. We will go through
          every functions and check to make sure it minimums bugs.
        </p>
        <p className='leading-10 text-lg mb-3'>
          <span className='font-bold'> &#x2713; 2. Deploy: </span> before we
          deploy the application into the internet, we should test all the
          functions of the application. In MERN stack, there are many frameworks
          support for testing the application such as Jest, Enzyme, Mocha, Chai,
          and Sinon. However, in this application, I only use simple one which
          is end-to-end testing tests the entire application from the user's
          perspective, simulating real user interactions. We will go through
          every functions and check to make sure it minimums bugs.
        </p>

        <h2 className='text-center text-xl font-bold'>Conclusion</h2>
        <p className='leading-10 text-lg'>
          The MERN stack provides a complete solution for building modern and
          dynamic full web applications that meet the demands of today's users.
          The four main components of the MERN stack—MongoDB, Express.js, React,
          and Node.js —work together to provide a robust and efficient platform
          for web development. Alternative choices for developer is to using
          Angular instead of React (MEAN Stack) on a view, or using Next.js (a
          popular React-based framework for building server-side rendered web
          applications) on top of React to increase SEO for the web application.
          With supporting from large community and developers around the world
          and the flexible from wide range of library (node package manage –
          npm) that makes MERN becomes the most popular technology in recent
          years. The next step we will discovery on how to build the full web
          application using MERN Stack and its library.
        </p>
        <p className='leading-10 text-lg'>
          Thank you for reading my blog. I am happy to have your feedback!
        </p>

        <p className='leading-10 text-s italic text-right'>
          (*) Please note that the information from this blog is adapted from
          various resources.
        </p>
      </div>
    </section>
  );
};

export default ProjectsPart2;
