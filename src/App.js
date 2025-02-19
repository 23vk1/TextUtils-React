import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light"); // wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState(null);
  const [themeFontColor, setThemeFontColor] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleTheme = (color1, color2) => {
    setTheme(color1);
    setThemeFontColor(color2);
    console.log(color1, color2);
  };

  const toggleMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been disabled", "success");
      document.title = "TextUtils - Light";

      setTheme(null);
      setThemeFontColor(null);
    } else {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#19191a";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark";
      setTheme(null);
      setThemeFontColor(null);
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" about="About" /> */}
      {/* <Navbar /> */}

      {/* <Router> */}
      <Navbar
        title="TextUtils"
        theme={theme}
        handleTheme={handleTheme}
        mode={darkMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  theme={theme}
                  themeFontColor={themeFontColor}
                  heading="Enter the text to analyze below"
                  mode={darkMode}
                />
              }
            />
          </Routes> */}

        <TextForm
          showAlert={showAlert}
          theme={theme}
          themeFontColor={themeFontColor}
          heading="Enter the text to analyze below"
          mode={darkMode}
        />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
