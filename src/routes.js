import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
// import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
// import Calculator from "./pages/Calculator.jsx";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Главная",
    icon: "",
  },
  {
    path: "/services",
    component: Services,
    name: "Услуги",
    icon: "",
  },
  // {
  //   path: "/about",
  //   component: About,
  //   name: "Обо мне",
  //   icon: "",
  // },
  {
    path: "/contact",
    component: Contact,
    name: "Контакты",
    icon: "",
  },
  // {
  //   path: "/сalculator",
  //   component: Calculator,
  //   name: "Калькулятор",
  //   icon: "",
  // },
];

export default routes;
