import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Sobremi from "./componentes/Sobremi/Sobremi";
import Footer from "./componentes/Footer";
import Contact from "./componentes//Contact";
import Proyectos from "./componentes/Proyects";
import Error404 from "./componentes/Error404";
import { HelmetProvider, Helmet } from "react-helmet-async";
import juan from "./assets/Juan.jpg";

export default function App() {
  const helmetContext = {};
  return (
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        {" "}
        {/* el context ayuda a garantizar que el contexto nunca se encuentre fuera de la instancia actual de su aplicación */}
        {/* <HashRouter> */}
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Helmet>
                  <title>Juan Ramirez </title>
                  <meta
                    name="description"
                    content="Desarrollador fullStack orientado más al frontend"
                  />
                  <link rel="canonical" href="/" />
                  <meta property="og:title" content="Juan Ramirez" />
                  <meta
                    property="og:description"
                    content="Desarrollador fullStack orientado más al frontend"
                  />
                  <meta property="og:url" content="https://jcrp.vercel.app/" />
                  <meta property="og:image" content={juan} />
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <Helmet>
                  <title>¿Quién soy? | ¿Qué hago?</title>
                  <meta
                    name="description"
                    content="Maquetación responsiva, desarrollo frontend "
                  />
                  <link rel="canonical" href="/about" />
                </Helmet>
                <Sobremi />
              </>
            }
          />
          <Route exact path="/proyects" element={<Proyectos />} />
          <Route
            exact
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contáctame aquí</title>
                  <meta
                    name="description"
                    content="Gmail, LinkedIn, Github, Whatsapp "
                  />
                  <link rel="canonical" href="/contact" />
                </Helmet>
                <Contact />
              </>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
        {/* </HashRouter> */}
      </HelmetProvider>
    </BrowserRouter>
  );
}
