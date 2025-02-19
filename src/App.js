import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light"); // wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add(`bg-${cls}`);

    if(cls==null){
      if (darkMode === "dark") {
        setDarkMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Dark Mode has been disabled", "success");
      } else {
        setDarkMode("dark");
        document.body.style.backgroundColor = "#19191a";
        showAlert("Dark Mode has been enabled", "success");
      }
    }else{
      showAlert(`${cls} color is applied`, "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={darkMode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={darkMode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={darkMode}
                />
              }
            />
          </Routes>

          {/* <TextForm
          showAlert={showAlert}
          theme={theme}
          themeFontColor={themeFontColor}
          heading="Enter the text to analyze below"
          mode={darkMode}
        /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
