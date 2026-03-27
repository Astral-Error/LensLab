import { useState, useEffect, useRef } from "react"
import Header from "./components/Header.jsx"
import "./App.css"
import LensPage from './pages/LensPage.jsx'
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home.jsx"
import AddCard from "./components/AddCard.jsx"
import { lenses as defaultLenses } from "./data/lenses"
import { Toaster } from "react-hot-toast"

const App = () => {
  const scrollRef = useRef(null);
  const scrollPositions = useRef({});
  const location = useLocation();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      scrollPositions.current[location.pathname] = container.scrollTop;
    };

    container.addEventListener("scroll", handleScroll);

    const savedPosition = scrollPositions.current[location.pathname];
    if (savedPosition !== undefined) {
      container.scrollTop = savedPosition;
    }

    return () => container.removeEventListener("scroll", handleScroll);
  }, [location]);

  const [lenses, setLenses] = useState(defaultLenses);
  const [counter, setCounter] = useState(defaultLenses.length);

  function addLens(newLens) {
    const scrollTop = scrollRef.current?.scrollTop ?? 0;
    setLenses(prev => [...prev, newLens]);
    setCounter(prev => prev + 1);
    requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = scrollTop;
    });
  }

  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Toaster />
      <Header setSearchText={setSearchText} openModal={() => setShowModal(true)} />

      {showModal &&
        <AddCard
          closeModal={() => setShowModal(false)}
          addLens={addLens}
          counter={counter}
        />}

      {}
      <div className="scroll-container" ref={scrollRef}>
        <div key={location.pathname} className="page-container">
          <Routes location={location}>
            <Route path="/" element={<Home lenses={lenses} searchText={searchText} />} />
            <Route path="/lens/:id" element={<LensPage lenses={lenses} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App
