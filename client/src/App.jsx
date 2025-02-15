import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and Routes
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";  
import RegistrationPage from "./pages/RegistrationPage"; 

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This controls the authentication state

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
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
        {/* If the user is not authenticated, show the Login page */}
        {!isAuthenticated ? (
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<RegistrationPage />} />
            {/* Redirect to login if no other routes match */}
            <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          </Routes>
        ) : (
          // If the user is authenticated, show the app with NavBar and routes
          <>
            <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} />
            <div className="main-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/register" element={<RegistrationPage />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
