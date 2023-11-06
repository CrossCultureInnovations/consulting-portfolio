import { Route, Routes } from "react-router-dom";
import Front from './components/front';
import { Error404 } from './components/error';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./components/portfolio/index.jsx";

const App = () =>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>;

export default App;