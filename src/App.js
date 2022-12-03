import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";
import Themes from "./components/uithemes/Themes";
// import Temp from "./components/Temp";
function App() {
  return (
    <>
      <Themes />
      <Header />
      {/* <Temp /> */}
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
