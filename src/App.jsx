import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/details/:listId" element=<DetailsPage /> />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
