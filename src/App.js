import style from "./app.module.css";
import Header from "./Container/Header";
import Home from "./Container/Home/index";
import About from "./Container/About";
import Portfolio from "./Container/Portfolio";
import Footer from "./Container/Footer";
import Contact from "./Container/Contact";

const App = () => {
  return (
    <div className={style.App}>
      <Header />
      <Home />
      <main className={style.main}>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
