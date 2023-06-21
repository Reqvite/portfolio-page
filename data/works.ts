import phonebookImg from "../public/images/works/Phonebook.png";
import realtimechatImg from "../public/images/works/Realtimechat.png";
import filmotekaImg from "../public/images/works/Filmoteka.png";
import icecreamImg from "../public/images/works/Icecream.png";
import barbershopImg from "../public/images/works/Barbershop.png";
import imagesearchImg from "../public/images/works/imagesearch.png";
import socialappImg from "../public/images/works/Social-app.png";
import webstudioImg from "../public/images/works/Webstudio.png";
import soYummyImg from "../public/images/works/So-yummy-preview.jpg";
import headphonesStoreImg from "../public/images/works/headphones-shop-sanity.jpg";
import foodDelivery from '../public/images/works/Food-delivery.png'

import { StaticImageData } from "next/image";

export interface WorkI {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string;
  source: string;
  page: string;
  image: StaticImageData;
  backendSource?: string;
  bigPage?: boolean;
  teamProject: boolean;
}

const works: WorkI[] = [
  {
    id: "food-delivery",
    title: "Food Delivery",
    description:
      "A Food delivery shop made using React, with the ability to make orders.The site also has Google maps with the ability to track the amount of departure time and a detailed route.",
    fullDescription:
      "Pet project. A Food delivery shop made using React, with the ability to make orders.The site also has Google maps with the ability to track the amount of departure time and a detailed route. The back-end part of the  project is responsible for handling server-side logic, data storage, and communication between the front-end and the database. It includes a database that stores all food information, and orders data.",
      technologies:
      "Frontend - React, React-router-dom, Redux Toolkit, Axios, Formik,React-hot-toast, SASS, React-google-recaptcha, React-google-maps/api. Backend - Node.js, Express, MongoDB, Mongoose, Joi",
    source: "https://github.com/Reqvite/delivery-app",
    backendSource: "https://github.com/Reqvite/delivery-api",
    page: "https://req-food-delivery.netlify.app/",
    image: foodDelivery,
    bigPage: true,
    teamProject: false,
  },
  {
    id: "so-yummy",
    title: "So Yummy",
    description:
      "Application where you can discover a vast collection of culinary delights that will help you expand your cooking skills and impress your loved ones.",
    fullDescription:
      "Application where you can discover a vast collection of culinary delights that will help you expand your cooking skills and impress your loved ones. The back-end part of the So Yummy project is responsible for handling server-side logic, data storage, and communication between the front-end and the database. It includes a database that stores all recipe information, and user data. Role: Team lead. Here is what I did in this project: initialized the project and prepared all the files for the team to work. Backend - auth(login, register, logout, currentUser, googleAuth), ownRecipes(add, delete, get list), shopping-list(add, delete, get list). Frontend - WelcomePage, RegisterPage, SigninPage, ShoppingListPage, RecipePage, header (update user modal, dark theme). Code review, resolve merge conflicts on github.",
    technologies:
      "Frontend - HTML/CSS, React, React-dom, Redux Toolkit, Axios, Formik, Yup, Toastify, MUI, Styled Components. Backend - Node.js, Express,MongoDB, Mongoose, Joi, Cloudinary, Swagger",
    source: "https://github.com/Reqvite/so-yummy-project",
    backendSource: "https://github.com/Reqvite/so-yummy-backend",
    page: "https://so-yummy.netlify.app",
    image: soYummyImg,
    bigPage: true,
    teamProject: true,
  },
  {
    id: "phonebook",
    title: "Phonebook",
    description:
      "Phonebook made using the Chakra UI connected to the Swagger backend API (register, login, add, delete or filter contacts, log out).",
    fullDescription:
      "Pet-project. Phonebook made using the Chakra UI connected to the Swagger backend API (register, login, add, delete or filter contacts, log out).",
    technologies: "React (Hooks, Routers, Redux, Redux Toolkit)",
    source: "https://github.com/Reqvite/goit-react-hw-08-phonebook",
    page: "https://reqvite.github.io/goit-react-hw-08-phonebook/",
    image: phonebookImg,
    teamProject: false,
  },
    {
    id: "headphones-shop",
    title: "Headphones Shop",
    description:
      "A headphone store made using Next.js, Sanity and Stripe connected.",
    fullDescription:
      "Pet project. A headphone store made  Next.js, Sanity and Stripe, with the ability to make a test purchase.",
    technologies: "Typescript, React, Next.js, Sanity, Stripe",
    source: "https://github.com/Reqvite/Headphones-shop-sanity",
    page: "https://headphones-shop-sanity.vercel.app/",
    image: headphonesStoreImg,
    bigPage: false,
    teamProject: false,
  },
  {
    id: "social-network",
    title: "Social network",
    description:
      "Social network is mobile application made using the React Native, Expo, and Firebase.",
    fullDescription:
      "Pet-project. Social network is mobile application made using the React Native, Expo, Firebase (register, login,log out, add post, add profile image).",
    technologies: "React Native (Hooks, Routers, Redux, Redux Toolkit), Expo",
    source: "https://github.com/Reqvite/react-native-social-media-app",
    page: "https://expo.dev/@reqvite/react-native-pr",
    image: socialappImg,
    teamProject: false,
  },
  {
    id: "filmoteka",
    title: "Filmoteka",
    description:
      "Application for  searching  and choosing a movie with user registration and database using Firebase.",
    fullDescription:
      "Application for  searching  and choosing a movie with user registration and database using Firebase.Role: Team lead.Here is what I did in this project: initialized the project and prepared all the files for the team to work. Added registration/login feature on the site, modal windows with detailed information about films, code review, resolve merge conflicts on github.",
    technologies: "HTML, SASS, JS, REST API, AJAX, Parcel",
    source: "https://github.com/Reqvite/Filmoteka",
    page: "https://reqvite.github.io/Filmoteka/",
    image: filmotekaImg,
    teamProject: true,
  },
  {
    id: "real-time-chat",
    title: "Real time chat",
    description:
      "Real-time chat using google authentication and firebase to store messages.",
    fullDescription:
      "Pet-project. Real-time chat using google authentication and firebase to store messages.",
    technologies: "React (Hooks, Routers)",
    source: "https://github.com/Reqvite/realtime-chat-react",
    page: "https://real-time-chat-01.netlify.app/chat-room",
    image: realtimechatImg,
    teamProject: false,
  },
  {
    id: "image-search",
    title: "Image search",
    description: "Image search site with infinite scroll using Pixabay API.",
    fullDescription:
      "Pet-project. Image search site with infinite scroll using Pixabay API.",
    technologies: "HTML, SCSS, JS",
    source: "https://github.com/Reqvite/goit-js-hw-11",
    page: "https://reqvite.github.io/goit-js-hw-11/",
    image: imagesearchImg,
    teamProject: false,
  },
  {
    id: "barbershop",
    title: "Barbershop",
    description:
      "Website provides a comprehensive and attractive presentation of information about the barbershop.",
    fullDescription:
      "Pet-project.Overall, this website provides a comprehensive and attractive presentation of information about the barbershop, making it a useful resource for anyone interested in learning more about the barbershop's services and team.",
    technologies: "HTML, SCSS, JS",
    source: "https://github.com/Reqvite/barbershop",
    page: "https://reqvite.github.io/barbershop/",
    image: barbershopImg,
    teamProject: false,
  },
  {
    id: "icecream",
    title: "Icecream",
    description:
      "Ice company website with responsive layout,burger menu, modal windows and attractive design. ",
    fullDescription:
      "Ice company website with responsive layout,burger menu, modal windows and attractive design. Role: Team lead.Here is what I did in this project: initialized the project and prepared all the files for the team to work. Added about,gallery sections, code review, resolve merge conflicts on github.",
    technologies: "HTML, Parcel, SCSS, JS",
    source: "https://github.com/Reqvite/team-project-1",
    page: "https://reqvite.github.io/team-project-1/",
    image: icecreamImg,
    teamProject: true,
  },
  {
    id: "webstudio",
    title: "WebStudio",
    description:
      "The website has a clean and simple design using basic HTML, SCSS and Javascript.",
    fullDescription:
      "Pet-project. My first website has a clean and simple design using basic HTML, SCSS and Javascript.",
    technologies: "HTML, SCSS, JS",
    source: "https://github.com/Reqvite/goit-markup-hw-08",
    page: "https://reqvite.github.io/goit-markup-hw-08/",
    image: webstudioImg,
    teamProject: false,
  },
];

export default works;
