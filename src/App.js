import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ColorBanner from "./components/ColorBanner.js";
import ProductCard from "./components/ProductCard.js";
import GetStarted from "./components/GetStarted.js";
import GetStarted_1 from "./components/GetStarted_1.js";
import AddCard from "./components/AddCard.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ColorBanner />
      <AddCard/>
      <GetStarted />
      <GetStarted_1 />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
