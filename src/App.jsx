import Home from "./pages/Home";
import GalleryAPI from "./pages/GalleryAPI";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
