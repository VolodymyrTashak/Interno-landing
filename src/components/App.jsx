import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { About } from "./About/About";
import { Benefits } from "./Benefits/Benefits";
import { Comments } from "./Comments/Comments";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Comments />
    </div>
  );
};
