import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
