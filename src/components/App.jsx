import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { About } from "./About/About";
import { Benefits } from "./Benefits/Benefits";
import { Comments } from "./Comments/Comments";
import { Projects } from "./Projects/Projects"; 
import { Experience } from "./Experience/Experience";
import { Recents } from "./Recents/Recents";
import { Footer } from "./Footer/Footer";

export const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <About />
      <Benefits />
      {/* <Comments />
      <Projects />
      <Experience />
      <Recents />
      <Footer /> */}
    </div>
  );
};
