import "./App.scss";

import { Route, Routes } from "react-router-dom";
import routes from "./routes";

import Header from "./components/Header";
import Footer from "./components/Footer";
// Кнопка наверх
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
// Скрипт "Страница при переключении имеет top: 0"
import PageAlwaysOnTop from "./components/PageAlwaysOnTop.jsx";
// Фиксированная кнопка контакта
import FixedButtonContact from "./components/FixedButtonContact.jsx";
// Форма заявки
import ContactForm from "./components/ContactForm.jsx";

import servicesDataForServicesPage from "./serviceDataForServicePage.js";
import LandingPage from "./pages/pages-info-services-individual/LandingPage.jsx";
import { useState } from "react";
import BannerOfWorks from "./BannerOfWorks.jsx";

function App() {
  const [works, setWorks] = useState(true);

  return (
    <>
    {works ? <BannerOfWorks /> : 
      <div className="App">
        <Header />
        <main className="content">
          <PageAlwaysOnTop />
          <Routes>
            {routes.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
            {servicesDataForServicesPage.map(({ pathInPagesInfo }, index) => (
              <Route
                key={index}
                path={pathInPagesInfo}
                element={<LandingPage />}
              />
            ))}
          </Routes>
          <ScrollToTopButton />
          <FixedButtonContact />
          <ContactForm />
        </main>
        <Footer />
      </div>
      }
    </>
  );
}

export default App;
