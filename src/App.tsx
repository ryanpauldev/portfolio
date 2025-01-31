import { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Hero = lazy(() => import("./components/Hero"));

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("nd-theme") ?? "light",
  );

  function handleTheme(theme: string): void {
    setTheme(theme);
    localStorage.setItem("nd-theme", theme);
    document.getElementsByTagName("html")[0]?.setAttribute("theme", theme);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Hero theme={theme} setTheme={handleTheme} />}
        />
        <Route
          path="*"
          element={<Hero theme={theme} setTheme={handleTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}