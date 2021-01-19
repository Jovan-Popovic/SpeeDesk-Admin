import "./App.css";
import { Header } from "./components/Header";
import { SignIn } from "./components/SignIn";
import { Reports } from "./components/Reports";
import { Heading } from "./components/Heading";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Heading />
      <Reports />
      <SignIn />
    </BrowserRouter>
  );
};

export default App;
