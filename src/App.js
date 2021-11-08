import style from "./app.module.css";

import Header from "./Container/Header";
import Home from "./Container/Home/index";
import About from "./Container/About";
import Portfolio from "./Container/Portfolio";
import Resume from "./Container/Resume";
import Contact from "./Container/Contact";
import Footer from "./Container/Footer";

const App = () => {
  return (
    <div className={style.App}>
      <Header />
      <Home />
      <main className={style.main}>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
