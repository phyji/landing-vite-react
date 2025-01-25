import React, {useEffect} from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Speciality from "./components/speciality";
import Workprocess from "./components/workprocess";
import Completedproject from "./components/completedproject";
import Feedback from "./components/feedback";
import Myteam from "./components/myteam";
import Offer from "./components/offer";
import Footer from "./components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    AOS.init();
  }, []);
  return (
    <div className="">
      <Header />
      <Hero/>
      <Speciality/>
      <Workprocess/>
      <Completedproject/>
      <Feedback/>
      <Myteam />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
