export type workType = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string;
  source: string;
  page: string;
  image: string;
};

const works: workType[] = [
  {
    id: "phonebook",
    title: "Phonebook",
    description:
      "Phonebook made using the Chakra UI connected to the Swagger backend API (register, login, add, delete or filter contacts, log out).",
    fullDescription:
      "Pet-project.Phonebook made using the Chakra UI connected to the Swagger backend API (register, login, add, delete or filter contacts, log out).",
    technologies: "React (Hooks, Routers, Redux, Redux Toolkit)",
    source: "https://github.com/Reqvite/goit-react-hw-08-phonebook",
    page: "https://reqvite.github.io/goit-react-hw-08-phonebook/",
    image: "/images/works/Phonebook.png",
  },
  {
    id: "social-network",
    title: "Social network",
    description:
      "Social network is mobile application made using the React Native, Expo, and Firebase.",
    fullDescription:
      "Pet-project.Social network is mobile application made using the React Native, Expo, Firebase (register, login,log out, add post, add profile image).",
    technologies: "React Native (Hooks, Routers, Redux, Redux Toolkit), Expo",
    source: "https://github.com/Reqvite/react-native-social-media-app",
    page: "https://expo.dev/@reqvite/react-native-pr",
    image: "/images/works/Social-app.png",
  },
  {
    id: "real-time-chat",
    title: "Real time chat",
    description:
      "Real-time chat using google authentication and firebase to store messages.",
    fullDescription:
      "Pet-project.Real-time chat using google authentication and firebase to store messages.",
    technologies: "React (Hooks, Routers)",
    source: "https://github.com/Reqvite/realtime-chat-react",
    page: "https://real-time-chat-01.netlify.app/chat-room",
    image: "/images/works/Realtimechat.png",
  },
  {
    id: "filmoteka",
    title: "Filmoteka",
    description:
      "Application for  searching  andchoosing a movie with user registration and database using Firebase.",
    fullDescription:
      "Application for  searching  andchoosing a movie with user registration and database using Firebase.Role: Team lead.Here is what I did in this project: initialized the project and prepared all the files for the team to work. Added registration/login feature on the site, modal windows with detailed information about films, team review code, resolve merge conflicts on github.",
    technologies: "HTML, SASS, JS, REST API, AJAX, Parcel",
    source: "https://github.com/Reqvite/Filmoteka",
    page: "https://reqvite.github.io/Filmoteka/",
    image: "/images/works/Filmoteka.png",
  },
  {
    id: "image-search",
    title: "Image search",
    description: "Image search site with infinite scroll using Pixabay API.",
    fullDescription:
      "Pet-project.Image search site with infinite scroll using Pixabay API.",
    technologies: "HTML, SCSS, JS",
    source: "https://github.com/Reqvite/goit-js-hw-11",
    page: "https://reqvite.github.io/goit-js-hw-11/",
    image: "/images/works/imagesearch.png",
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
    image: "/images/works/Barbershop.png",
  },
  {
    id: "icecream",
    title: "Icecream",
    description:
      "Ice company website with responsive layout,burger menu, modal windows and attractive design. ",
    fullDescription:
      "Ice company website with responsive layout,burger menu, modal windows and attractive design. Role: Team lead.Here is what I did in this project: initialized the project and prepared all the files for the team to work. Added about,gallery sections, team review code, resolve merge conflicts on github.",
    technologies: "HTML, Parcel, SCSS, JS",
    source: "https://github.com/Reqvite/team-project-1",
    page: "https://reqvite.github.io/team-project-1/",
    image: "/images/works/Icecream.png",
  },
  {
    id: "webstudio",
    title: "WebStudio",
    description:
      "The website has a clean and simple design using basic HTML, SCSS and Javascript.",
    fullDescription:
      "Pet-project.My first website has a clean and simple design using basic HTML, SCSS and Javascript.",
    technologies: "HTML, SCSS, JS",
    source: "https://github.com/Reqvite/goit-markup-hw-08",
    page: "https://reqvite.github.io/goit-markup-hw-08/",
    image: "/images/works/Webstudio.png",
  },
];

export default works;
