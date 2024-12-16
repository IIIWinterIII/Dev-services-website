import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Главная",
    icon: "",
  },
  {
    path: "/Services",
    component: Services,
    name: "Услуги",
    icon: "",
  },
  {
    path: "/About",
    component: About,
    name: "Обо мне",
    icon: "",
  },
  {
    path: "/FAQ",
    component: FAQ,
    name: "FAQ",
    icon: "",
  },
  {
    path: "/Contact",
    component: Contact,
    name: "Контакты",
    icon: "",
  },
];

export default routes;
