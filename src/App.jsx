import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/details/:listId" element=<DetailsPage /> />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
