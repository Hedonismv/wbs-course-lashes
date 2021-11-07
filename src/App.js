import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import {HashRouter} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import WaitPage from "./pages/WaitPage/WaitPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import RatePage from "./pages/RatePage/RatePage";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <MainPage/>
        <AboutPage/>
        <WaitPage/>
        <QuestionPage/>
        <RatePage/>
        <Footer/>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
