import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/details/:listId" element=<DetailsPage /> />
      </Routes>
    </>
  );
}

export default App;
