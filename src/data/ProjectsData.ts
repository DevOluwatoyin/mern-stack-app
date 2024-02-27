import Iduara from "../assets/iduara.png";
import Mern from "../assets/mern.png";

interface ProjectsType {
  title: string;
  description: string;
  image: string;
  GitHub: string;
  hosted: string;
}

export const ProjectsData: ProjectsType[] = [
  {
    title: "Iduara App",
    description: `A robust enterprise system built with React, Node Js and Express js and MongoDB architecture`,
    image: Iduara,
    GitHub: "",
    hosted: "https://cloud.idurarapp.com/",
  },
  {
    title: "App Mern",
    description: `A one page website built with React, Node Js and Express js and MongoDB`,
    image: Mern,
    GitHub: "",
    hosted: "https://basic-mern-stack-app-ten.vercel.app/",
  },
];
