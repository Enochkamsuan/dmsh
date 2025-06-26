import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/navigation/footer";
import Header from "./components/navigation/header";
import RoutePage from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutePage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
