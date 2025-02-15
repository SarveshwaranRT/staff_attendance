import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/Login";

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // UseEffect to trigger a re-render when isAuthenticated state changes
  useEffect(() => {
    // Check if the user is authenticated, you can also check localStorage or cookies here
    if (isAuthenticated) {
      console.log("User is authenticated");
    }
  }, [isAuthenticated]);

  const NAVBAR_ITEMS = [
    { icon: "🏠", text: "home", path: "/" },
    { icon: "🖼️", text: "about", path: "/about" },
    { icon: "🔍", text: "search", path: "/search" },
    { icon: "🤦", text: "profile", path: "/profile" },
  ];

  return (
    <Router>
      <div className="app">
        {!isAuthenticated ? (
          <LoginPage setIsAuthenticated={setIsAuthenticated} /> // Show login page if not authenticated
        ) : (
          <>
            <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} />
            <div className="main-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
