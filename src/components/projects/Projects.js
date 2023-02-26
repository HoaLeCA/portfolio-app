import React from 'react';
import Title from '../layouts/Title';
import {
  pic2,
  pic1,
  // pic3,
  // pic4,
  // pic5,
  pic6,
  pic7,
  mern,
} from '../../assets/index';
import ProjectsCard from './ProjectsCard';
import { Link } from 'react-router-dom';
import CodeSnip from './CodeSnip';
import CodeSnip2 from './CodeSnip2';
import CodeSnipLine from './CodeSnipLine';

const Projects = () => {
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
          Building full application using MERN Stack in web development
        </h1>
        <h1 className='text-center text-xl font-bold'>
          Part 1: A Comprehensive information about MERN stack in Web
          Development.
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
          The world of web development is constantly evolving, and keeping up
          with the latest technologies and trends can be a challenge. There are
          many technologies that web developer chooses to build the desires
          website such Spring using Java, ASP.NET core, Django, MEAN, etc.
          However, one of the most popular and versatile technology stacks for
          web development today is the MERN stack, which stands for MongoDB,
          ExpressJS, ReactJS, and NodeJS. The MERN stack is used to develop the
          web application in many big tech companies around a world such as
          Facebook, Airbnb, Netflix, Uber, Walmart, Amazon, GoDaddy, PayPal,
          etc. This technology provides a complete solution for building modern
          and dynamic web applications that meet the demands of any users.
        </p>
        <ProjectsCard
          des=' What is MERN? (image copied from internet source)'
          src={mern}
        />
        <h2 className='text-center mt-5 text-xl font-bold'>
          What is advantage of using MERN Stack in web development?
        </h2>
        <p className='leading-10 text-lg'>
          The main purpose of using MERN Stack is that developer can use
          JavaScript only and it is very convenient choice for developers who
          are already proficient in JavaScript, as they can use the same
          language for both the frontend and backend of the application. The
          MERN Stack separated web application structure into two components:
          the Frontend and the Backend. The whole database system is isolated
          from the frontend and backend.
        </p>
        <ProjectsCard
          des=' MERN structure frontend - backend - database (Image copied from https://medium.com/aeologic/why-choose-mern-stack-323b4d95e4ea)'
          src={pic1}
        />
        <p className='leading-10 text-lg mt-5'>
          The MERN stack can use RESTful APIs (Representational State Transfer
          Application Programming Interface) to communicate between the frontend
          and backend very easy. In addition, with RESTful APIs, the web
          developers can reuse the CRUD (Create, Read, Update, and Delete) model
          to the new application that can save a lot of time in building a web
          application. <br />
          <span className='font-bold'>
            To understand about MERN, we will deep into each component and learn
            more about it.
          </span>
        </p>
        <p className='leading-10 text-xl text-center'>
          <span className='text-4xl'>M</span>ongoDB is the heart of the MERN
          Stack technology.
        </p>
        <p className='leading-10 text-lg '>
          MongoDB is a powerful and flexible NoSQL database that stores data in
          a document-oriented format. Unlike traditional relational databases
          such as Oracle SQL or MySQL, MongoDB allows developer to store and
          retrieve data in a way that is more flexible and adaptable to changing
          requirements.
        </p>
        <p className='leading-10 text-lg '>
          The key benefits of using MongoDB instead of other database is that it
          is scalability and reliability to store a data. MongoDB provides
          built-in support for sharing, which allows developer to distribute
          data across multiple servers, meaning that MongoDB can be handle more
          data by adding more servers. In contrast, the tradition database needs
          to add more hardware resources to handle with more data. It could lead
          to the cost that company may encounter when they use traditional
          database.
        </p>
        <p className='leading-10 text-lg '>
          MongoDB provides flexible document schemas that allows for easy
          storage of complex, multi-level data structures, and support a wide
          range of datatype including arrays, binary, nest objects. It is
          perfectly tool for storing unstructured data type that increasing
          dramatically today.
        </p>
        <ProjectsCard
          des=' NoSQL vs SQL (Image copied from https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/.'
          src={pic2}
        />
        <p className='font-bold text-center text-xl mt-5'>
          How to connect or interact with MongoDB?
        </p>
        <p className='leading-10 text-lg '>
          There are two common approaches that developer used to use when they
          want to interact with database, using the database native language
          (SQL) or using Object Data Model (ODM) or Object Relational Model
          (ORM). In MERN Stack, developer use Mongoose which is MongoDB object
          modeling tool use to interact with MongoDB. To use Mongoose in MERN,
          we need to install it as following command:&nbsp;
          <span className='font-bold italic'>npm install mongoose</span>
        </p>
        <CodeSnipLine code='npm install mongoose' />
        <p className='leading-10 text-lg'>
          The command Installing Mongoose above will add all its dependencies,
          including the MongoDB database driver that help to connect with
          MongoDB. The developer can choose either using local MongoDB or
          MongoDB Cloud. To use MongoDB in local machine, the developer can
          download and install it from MongoDB website &nbsp;
          <Link
            className='underline underline-offset-4 hover:bg-violet-600'
            to='https://www.mongodb.com/try/download/community'
            target={'_blank'}
          >
            download and install
          </Link>
          . The developer also can use MongoDB Atlas, the Cloud MongoDB so they
          do not need to install MongoDB in their local machine. The following
          snip code provides information on how to connect to MongDB using
          mongoose. It seems very easy compared to the way connect to database
          using predecessor database.
        </p>
        <CodeSnip des='Setup Connect To MongoDB Using Mongoose' />
        <p className='leading-10 mt-5 text-xl text-center'>
          <span className='text-5xl '>E</span>xpress.js: Building Scalable and
          Efficient Web Applications.
        </p>
        <p className='leading-10 text-lg'>
          Express.js is powerful and flexible framework in web development that
          help developers create backend API quickly and easily. It provides a
          simple and flexible way to manage routes, middleware, and database
          interactions. Here are some key advantages of using Express.js
          framework in MERN Stack:
        </p>
        <div className='ml-8'>
          <p className='leading-10 text-lg'>
            <span className='font-bold'>1. Routing</span>: Express.js provides a
            simple API for creating routes that handle HTTP requests from
            clients. It allows developers define a different routes for
            different type of requests that can use in creating a website such
            as GET, POST, PUT, DELETE, etc. As a result, the developers can
            manage routes efficiently and flexibly.
          </p>
          <p className='leading-10 text-lg mt-5'>
            <span className='font-bold'>2. Middleware</span>: middleware is a
            function that support from Express.js to access the ‘request’ and
            ‘response’, and the ‘next’ function in the application request and
            response cycle. Middleware can be used for authentication, request
            parsing, error handling, and many other purposes in MERN stack. With
            support from middleware, the developers can create a web application
            easily and flexible.
          </p>
          <p className='leading-10 text-lg mt-5'>
            <span className='font-bold'>3. Error Handling</span>: Express.js
            provides built-in error handling capabilities, allowing developers
            to define error-handling middleware to catch and handle errors in a
            centralized way.
          </p>
        </div>
        <CodeSnip2 des=' Example of use async-handle-express in MERN' />

        <p className='leading-10 text-lg mt-5'>
          Mongoose and Express.js provides wide range of ways to interact with
          MongoDB through model. It is very easy and flexible for developer to
          obtain using those model. You can check it more detail at &nbsp;
          <Link
            className='underline underline-offset-4 hover:bg-violet-600'
            to='https://mongoosejs.com/docs/api/model.html'
            target={'_blank'}
          >
            Mongoose models.
          </Link>
        </p>
        <p className='leading-10 text-xl text-center'>
          <span className='text-4xl'>R</span>eact: Building Dynamic and
          Interactive User Interfaces
        </p>
        <p className='leading-10 text-lg'>
          The definition about React from Wikipedia
          <span className='italic'>
            “React is a free and open-source front-end JavaScript library for
            building user interfaces based on components.”&nbsp;
          </span>
          ReactJS is a powerful JavaScript library for building user interfaces.
          It provides a fast and efficient way to build complex, interactive
          user interfaces, and it's well suited for building modern. A
          single-page applications (SPAs) that provides a fast and responsive
          user experience. In React, there is only one single HTML page with
          default name is index.html. On this page, we can only see a single
          root that will render all components from the application.
        </p>
        <CodeSnipLine
          code='<div id="root"></div>'
          des='Single-page Application (SPA) in React'
        />

        <p className='leading-10 text-lg mt-5'>
          ReactJS uses a virtual DOM, which is a lightweight in-memory
          representation of the actual DOM, to manage and update the user
          interface. This allows ReactJS to update the user interface
          efficiently,{' '}
          <span className='font-bold'>
            without having to reload the entire page
          </span>
          . This results in a fast and responsive user experience, and it makes
          ReactJS well suited for building complex web applications that need to
          handle real-time data updates and interactions. It is very easy to set
          up react in the machine by using simple command line, developers could
          use either command prompt in Windows/iOS or Command line function in
          code editor like Visual Studio Code (highly recommend when working
          with MERN). Command line use to create React application in VSCode is{' '}
          <span className=' font-bold'>npx create-react-app my-app.</span>{' '}
          Please note that it is required install Node.js in the machine before
          to run this command, and my-app is your application's name, you can
          choose different name that related to your application's function.
        </p>
        <CodeSnipLine code='npx create-react-app my-app' />
        <p className='leading-10 text-lg '>
          Now you can start your program by running:{' '}
          <span className='font-bold'>cd my-app then npm start</span> and you
          can see React Application will be running in your browser. If you
          choose React is a view in your web application, you should install
          some library that recommended for React such as React Dev Tools for
          browser, react-router-dom to manage router in your application, etc.
          Due to React is open-source frontend, there are millions of libraries
          that developed by community around the world. You can utilize these
          libraries to boost your application. You can check it on{' '}
          <Link
            className='underline underline-offset-8 hover:bg-violet-600'
            to='https://www.npmjs.com/package/react'
            target={'_blank'}
          >
            npm react library
          </Link>{' '}
          and search the package you want to plug into your code.
        </p>
        <p className='leading-10 text-xl text-center'>
          <span className='text-4xl'>N</span>odeJS: Building Scalable and
          Efficient Server-side Applications.
        </p>
        <p className='leading-10 text-lg'>
          NodeJS is a fast and efficient JavaScript runtime that allows
          developers to build server-side applications using JavaScript. It
          provides a simple and flexible way to build scalable and efficient web
          applications, and it's well suited for building real-time,
          data-intensive applications.
        </p>
        <p className='leading-10 text-lg'>
          NodeJS provides a simple and efficient way to handle HTTP requests and
          responses, and it makes it easy to build scalable and efficient
          server-side applications. For example, developers can use NodeJS to
          build a RESTful API that serves data to their ReactJS front-end, or
          developers can use it to build a web socket server that provides
          real-time data updates to their users.
        </p>
        <p className='leading-10 text-lg'>
          NodeJS also provides a large and growing ecosystem of packages and
          libraries that developers can use to build their web application. This
          makes it easy to find the tools and libraries developer need to build
          their web application, and it makes it easy to integrate their
          application with other technologies and services.
        </p>
        <p className='leading-10 text-lg'>
          To have Node.js run in your machine, you can download from
          https://nodejs.org/ and install. You can find more information on the
          essential steps to set up MERN below.
        </p>
        <h2 className='text-center text-xl font-bold'>
          Essential steps to set up MERN stack in your machine.
        </h2>
        <p className='text-lg font-bold'>1. Set up Backend.</p>
        <p className='leading-10 text-lg'>
          First, you need to install Node.js to your machine, you can download
          and install from{' '}
          <Link
            className='underline underline-offset-4 hover:bg-violet-600'
            to='https://nodejs.org/en/'
            target={'_blank'}
          >
            Node.js
          </Link>{' '}
          by following step by step instruction. The latest version when I wrote
          this blog is 19.7.0 and LTS version is 18.14.2. I highly recommend
          installing the LTS version as it is quite reliable and have supported
          from community.
        </p>
        <p className='leading-10 text-lg'>
          Next, for the database, you can either download and install{' '}
          <Link
            className='underline underline-offset-4 hover:bg-violet-600'
            to='https://www.mongodb.com/try/download/community'
            target={'_blank'}
          >
            MongoDB Community Server
          </Link>{' '}
          to your machine or use{' '}
          <Link
            className='underline underline-offset-4 hover:bg-violet-600'
            to='https://www.mongodb.com/try'
            target={'_blank'}
          >
            MongoDB Atlas
          </Link>{' '}
          , the MongoDB Cloud database. it is free to register and convenience
          to use. If you want to manage your database with GUI, you can also
          download and install{' '}
          <Link
            className='underline underline-offset-4 hover:bg-violet-600'
            to='https://www.mongodb.com/try/download/shell'
            target={'_blank'}
          >
            MongoDB Compass
          </Link>{' '}
          . It is very friendly UI and easy to mange your database.
        </p>
        <p className='leading-10 text-lg'>
          There are several ways to structure folders in your machine, you can
          choose the one that you feel more comfortable. However, as far as I
          understand from the industry, the optimize way is to create separately
          folder with different functions such as config, models, middleware,
          routes, controller, utils, etc. The backend/server folder is root
          folder for backend. This structure helps the developer easy to manage
          and control the codes. I will provide more details on how to set up
          these folders and the main function of those on part 2 of the blog.{' '}
        </p>
        <ProjectsCard
          des=' Recommended folder structure on Backend'
          src={pic6}
        />
        <p className='text-lg font-bold mt-5'>2. Set up Frontend.</p>
        <p className='leading-10 text-lg'>
          To set up React for the frontend, we can either use command prompt in
          Window/iOS or command line in code editor (I am using Visual Studio
          Code). On the command line we type{' '}
          <span className='underline'> npm create-react-app frontend</span>,
          frontend is name of folder stores all the codes of the frontend. After
          the command is finish, your browser should run the React default page
          when you run the command <span className='underline'>npm start</span>.
        </p>
        <p className='leading-10 text-lg'>
          There are many ways to structure the folders of the frontend as same
          as the backend. However, I tried to structure the way that help me
          easy to manage the code by its functions. When we go further in
          building the MERN application on part 2. I will go more details on the
          libraries and npm packages (node package manager) that required on
          building the MERN application. MERN stack has a huge support from
          community by provided many useful npm package. You can research more
          on{' '}
          <Link
            className='underline underline-offset-4 hover:bg-violet-600'
            to='https://www.npmjs.com/'
            target={'_blank'}
          >
            npm website
          </Link>{' '}
        </p>
        <ProjectsCard
          des=' Recommended folder structure on Frontend'
          src={pic7}
        />
        <p className='leading-10 text-lg'>
          The next step we will discovery on how to apply the concept from this
          blog to build the full web application using MERN Stack and its
          library. Finally, we will deploy the project to the internet using
          Heroku. All of them will be coming at{' '}
          <span className='font-bold'>
            Part 2 – Build the real MERN stack web application
          </span>
          . I hope you enjoy following along with me on this exciting journey
          and after completing these, you also could build your own full web
          application using MERN Stack.
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

export default Projects;
