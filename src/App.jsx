import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}> 
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
};

export default App;
