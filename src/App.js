import Home from "./components/Home";
import Footer from "./components/Footer";
import Company from "./components/Company";
import Services from "./components/Services";
import FixedBack from "./components/FixedBack";

function App() {
  return (
    <div>
        <Home />
        <FixedBack/>
        <Services />
        <Company />
        <Footer />
    </div>
  );
}

export default App;
